
// Add category

const listUserCategories = document.getElementById("listUserCategories");
const addCategoryButton = document.getElementById("addCategoryButton");
let currentCategory = 'home';
let customCategories = [];


// Function to create new task
function createTask(text) {
    return {
        id: Date.now(),
        text,
        completed: false
    };
}

addCategoryButton.addEventListener("click", () => {
    const nameCustomCategory = prompt("Category name: ");
    
    if(!nameCustomCategory){
        return;
    }

    const id = nameCustomCategory.trim().toLowerCase().replace(/\s+/g, "-");

    const newCategory = {nameCustomCategory, id};
    customCategories.push(newCategory);
    renderCustomCategories();
});

function renderCustomCategories() {
    listUserCategories.innerHTML = "";

    customCategories.forEach(cat => {
        const li = document.createElement("li");

        li.className = "categoryItem";
        li.dataset.cat = cat.id;
        li.textContent = cat.nameCustomCategory;

        li.addEventListener("click", () => {
            // Change category, render tasks of the active category, etc..
            updateActiveCategory(li);
        });
        listUserCategories.appendChild(li);
    })
}


// apply styles to task list

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", (event) => {
    const taskItem = event.target.closest('.taskItem');
    if(!taskItem) {
        return ;
    }

    taskItem.classList.toggle('completed');
});

// Change the current category name while it is selected

const categoryNameHeader = document.querySelector('.currentCategoryName');

function updateActiveCategory(item) {
    // delete activeCategory class to all items
    document.querySelectorAll('.categoryItem')
    .forEach(el => el.classList.remove('activeCategory'));

    item.classList.add('activeCategory');

    categoryNameHeader.textContent = item.textContent;

    // Render the task of that category
    // renderTask() this method must be coded
}

document.querySelectorAll('aside.sidebar ul li.categoryItem')
.forEach(item => {
    item.addEventListener('click', () => updateActiveCategory(item));
});





