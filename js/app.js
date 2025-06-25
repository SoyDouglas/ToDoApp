
// Add category

const listUserCategories = document.getElementById("listUserCategories");
const addCategoryButton = document.getElementById("addCategoryButton");
let customCategories = [];

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
            console.log(`Change to custom category: ${cat.id}`);
        });
        listUserCategories.appendChild(li);
    })
}

