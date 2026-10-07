let items = [];

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const total = document.getElementById("total");
const removeBtn = document.getElementById("removeBtn");
// Logic below
removeBtn.addEventListener("click", () => {
    items.pop();
    renderList();
});
