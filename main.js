// SHOPPING LIST OBJECT

const shoppingList = {
  items: [], // ARRAY TO STORE ITEMS
  htmlShoppingList: null,
  htmlAddItemForm: null,
  htmlInputField: null,
  initiate: function () {
    // SET'S UP THE PAGE
    // OBTAINS HTML ELEMENTS
    shoppingList.htmlShoppingList = documentQuerySelector("shop-list");
    shoppingList.htmlAddItemForm = documentQuerySelector("shop-add");
    shoppingList.htmlInputField = documentQuerySelector("shop-item");
    shoppingList.htmlAddItemForm.addEventListener("submit", shoppingList.add);

    // RESTORE PREVIOUS SHOPPING LIST
    if (localStorage.items === undefined) {
      localStorage.items = "[]";
    }
    shoppingList.items = JSON.parse(localStorage.items);

    // EXECUTES CODE INSIDE BLOCK .DRAW FUNCTION
    shoppingList.draw();
  },
};
window.addEventListener("DOMContentLoaded", shoppingList.initiate);

const shoppingList = {
  // ADD A NEW ITEM TO LIST
  add: function (event) {
    // PREVENT FORM SUBMIT
    event.preventDefault();

    // ADD NEW ITEM TO LIST
    shoppingList.items.push({
      name: shoppingList.htmlInputField.value,
      done: false,
    });
    // LOAD HTML SHOPPING LIST
    shoppingList.htmlInputField.value = "";
    shoppingList.save();

    // LOADS HTML SHOPPING LIST
    shoppingList.draw();
  },
};

const shoppingList = {
  // LOOPS THROUGH SHOPPING LIST AND CREATES HTML
  draw: function () {
    // ZERO OUT LIST
    shoppingList.htmlShoppingList.innerHTML = "";
    if (shoppingList.items.length > 0) {
      let row, name, deleteButton, okayButton;
      for (let input in shoppingList.items) {
        // ITEM ROW -> DIV FOR INPUT
        row = document.createElement("div");
        row.className = "item-row";
        shoppingList.htmlShoppingList.appendChild(row);

        // ITEM NAME
        name = document.createElement("div");
        name.className = "item-name";
        name.innerHTML = shoppingList.items[i].name;
        if (shoppingList.items[i].done) {
          name.classList.add("item-got");
        }
        row.appendChild(name);

        // CREATES DELETE BUTTON
        deleteButton = document.createElement("input");
        deleteButton.className = "item-del";
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.dataset.id = input;
        deleteButton.addEventListener("click", shoppingList.delete);
        row.appendChild(deleteButton);

        // COMPLETED / NOT YET COMPLETED -> BUTTON
        okayButton = document.createElement("input");
        okayButton = className = "item-ok";
        okayButton.type = "button";
        okayButton.value = shoppingList.items[i].done ? "Not Yet" : "Got It";
        okayButton.dataset.id = input;
        okayButton.addEventListener("click", shoppingList.toggle);
        row.appendChild(okayButton);
      }
    }
  },
};


