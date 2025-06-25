// Global application state
let currentCategory = 'home';
let categories = JSON.parse(localStorage.getItem('categories')) || [
  { id: 'home',       name: '🏠 Home',       tasks: [] },
  { id: 'work',       name: '📁 Work',       tasks: [] },
  { id: 'university', name: '🎓 University', tasks: [] },
  { id: 'gym',        name: '💪 Gym',        tasks: [] }
];

// Save the current categories and their tasks to localStorage
function save() {
  localStorage.setItem('categories', JSON.stringify(categories));
}

// Factory function: create a new task object with a unique ID and default completed state
function createTask(text) {
  return {
    id: Date.now(),   // use timestamp as a simple unique identifier
    text,             // task description
    completed: false  // default to not completed
  };
}

// Render all categories (both default and user-created) into the sidebar
function renderCategories() {
  const fixedUL = document.querySelector('aside.sidebar > ul');
  const customUL = document.getElementById('listUserCategories');
  fixedUL.innerHTML = '';
  customUL.innerHTML = '';

  categories.forEach(cat => {
    const li = document.createElement('li');
    li.className = 'categoryItem';
    li.dataset.cat = cat.id;   // store category ID for reference
    li.textContent = cat.name; // show icon + name
    li.addEventListener('click', () => selectCategory(cat.id));

    // Append to default list or custom list based on ID
    if (['home', 'work', 'university', 'gym'].includes(cat.id)) {
      fixedUL.appendChild(li);
    } else {
      customUL.appendChild(li);
    }
  });
}

// Handle when a category is selected: visually mark it, update header, and render its tasks
function selectCategory(id) {
  currentCategory = id;

  // Toggle 'activeCategory' class on each sidebar item
  document.querySelectorAll('.categoryItem').forEach(li => {
    li.classList.toggle('activeCategory', li.dataset.cat === id);
  });

  // Update the header text to match the selected category name
  const selectedCat = categories.find(c => c.id === id);
  document.querySelector('.currentCategoryName').textContent = selectedCat.name;

  // Render the tasks that belong to the newly selected category
  renderTasks();
}

// Display all tasks for the currently selected category
function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  const cat = categories.find(c => c.id === currentCategory);
  (cat.tasks || []).forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'taskItem' + (task.completed ? ' completed' : '');
    li.innerHTML = `
      <span class="taskIcon"></span>
      <span class="taskText">${task.text}</span>
      <button class="deleteTaskBtn" title="Delete task">&times;</button>
    `;

    // toggle completion
    li.querySelector('.taskIcon').addEventListener('click', () => {
      task.completed = !task.completed;
      save();
      renderTasks();
    });

    // delete handler
    li.querySelector('.deleteTaskBtn').addEventListener('click', e => {
      e.stopPropagation();                // don’t toggle complete
      cat.tasks.splice(idx, 1);           // remove this task
      save();                             // persist
      renderTasks();                      // re-render list
    });

    list.appendChild(li);
  });
}


// Listen for the 'submit' event on the new-task form to add a task to the current category
document.getElementById('taskForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const cat = categories.find(c => c.id === currentCategory);
  cat.tasks.push(createTask(text)); // add the new task object
  save();                            // persist changes
  input.value = '';                  // clear the input field
  renderTasks();                     // update displayed list
});

// Listen for clicks on the 'Add category' button to prompt user and create a new category
document.getElementById('addCategoryButton').addEventListener('click', () => {
  const name = prompt('Enter the new category name:');
  if (!name) return;

  const id = name.trim().toLowerCase().replace(/\s+/g, '-');
  if (categories.some(c => c.id === id)) {
    return alert('A category with that name already exists.');
  }

  // Add the new category object and persist
  categories.push({ id, name, tasks: [] });
  save();
  renderCategories();
});

// Initial setup: render sidebar and select the default category
renderCategories();
selectCategory(currentCategory);







