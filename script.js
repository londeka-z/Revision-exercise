let items = [];

const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const total = document.getElementById("total");

// Logic below
addBtn.addEventListener('click', function() {
  const newItem = input.value;
  if (newItem !== '') {
    items.push(newItem);
    const li = document.createElement('li');
    li.textContent = newItem;
    itemList.appendChild(li);
    total.textContent = 'Total items: ' + items.length;
    input.value = '';
  }
});
