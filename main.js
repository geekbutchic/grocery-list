// // SHOPPING LIST OBJECT

// const shoppingList = {
//   items: [], // ARRAY TO STORE ITEMS
//   htmlShoppingList: null,
//   htmlAddItemForm: null,
//   htmlInputField: null,
//   initiate: function () {
//     // SET'S UP THE PAGE
//     // OBTAINS HTML ELEMENTS
//     shoppingList.htmlShoppingList = documentQuerySelector("shop-list");
//     shoppingList.htmlAddItemForm = documentQuerySelector("shop-add");
//     shoppingList.htmlInputField = documentQuerySelector("shop-item");
//     shoppingList.htmlAddItemForm.addEventListener("submit", shoppingList.add);

//     // RESTORE PREVIOUS SHOPPING LIST
//     if (localStorage.items == undefined) {
//       localStorage.items = "[]";
//     }
//     shoppingList.items = JSON.parse(localStorage.items);

//     // EXECUTES CODE INSIDE BLOCK .DRAW FUNCTION
//     shoppingList.draw();
//   },

//   // ADD A NEW ITEM TO LIST
//   add: function (event) {
//     // PREVENT FORM SUBMIT
//     event.preventDefault();

//     // ADD NEW ITEM TO LIST
//     shoppingList.items.push({
//       name: shoppingList.htmlInputField.value,
//       done: false,
//     });
//     // LOAD HTML SHOPPING LIST
//     shoppingList.htmlInputField.value = "";
//     shoppingList.save();

//     // LOADS HTML SHOPPING LIST
//     shoppingList.draw();
//   }

//   // LOOPS THROUGH SHOPPING LIST AND CREATES HTML
//     draw: function () {
//     // ZERO OUT LIST
//     shoppingList.htmlShoppingList.innerHTML = "";
//     if (shoppingList.items.length > 0) {
//       let row, name, deleteButton, okayButton;
//       for (let input in shoppingList.items) {
//         // ITEM ROW -> DIV FOR INPUT
//         row = document.createElement("div");
//         row.className = "item-row";
//         shoppingList.htmlShoppingList.appendChild(row);

//         // ITEM NAME
//         name = document.createElement("div");
//         name.className = "item-name";
//         name.innerHTML = shoppingList.items[i].name;
//         if (shoppingList.items[i].done) {
//           name.classList.add("item-got");
//         }
//         row.appendChild(name);

//         // CREATES DELETE BUTTON
//         deleteButton = document.createElement("input");
//         deleteButton.className = "item-del";
//         deleteButton.type = "button";
//         deleteButton.value = "Delete";
//         deleteButton.dataset.id = input;
//         deleteButton.addEventListener("click", shoppingList.delete);
//         row.appendChild(deleteButton);

//         // COMPLETED ? NOT YET COMPLETED -> BUTTON
//         okayButton = document.createElement("input");
//         okayButton = className = "item-ok";
//         okayButton.type = "button";
//         // TERNARY
//         okayButton.value = shoppingList.items[i].done ? "Not Yet" : "Got It";
//         okayButton.dataset.id = input;
//         okayButton.addEventListener("click", shoppingList.toggle);
//         row.appendChild(okayButton);
//       }
//     }
//   }

// // SAVES SHOPPING LIST INTO LOCAL STORAGE

//   save: function () {
//     if (localStorage.items == undefined) {
//       // EMPTY ARRAY
//       localStorage.items = "[]";
//     }
//     // SAVES INTO LOCAL STORAGE
//     localStorage.items = JSON.stringify(shoppingList.items);
//   },

// // DELETE SELECTED ITEM -> UPDATES LOCAL STORAGE -> UPDATED HTML

//   delete: function () {
//     if (confirm("Remove selected item?")) {
//       shoppingList.items.splice(this.dataset.id, 1);
//       shoppingList.save();
//       shoppingList.draw();
//     }
//   },

//   toggle: function () {
//     let id = this.dataset.id;
//     shoppingList.items[id].done = !shoppingList.items[id].done;
//     shoppingList.save();
//     shoppingList.draw();
//   },
// };

// window.addEventListener("DOMContentLoaded", shoppingList.initiate);

const shoppingList = {
  items: [], // ARRAY TO SAVE RAW DATA
  htmlShoppingList: null,
  htmlAddItemForm: null,
  htmlInputField: null,
  initiate: function () {
    // OBTAINS HTML ELEMENTS -> SET'S UP PAGE
    shoppingList.htmlShoppingList = document.getElementById("shop-list");
    shoppingList.htmlAddItemForm = document.getElementById("shop-add");
    shoppingList.htmlInputField = document.getElementById("shop-item");
    shoppingList.htmlAddItemForm.addEventListener("submit", shoppingList.add);

    // RESTORES PREVIOUS SHOPPING LIST
    if (localStorage.items === undefined) {
      localStorage.items = "[]";
    }
    shoppingList.items = JSON.parse(localStorage.items);

    // EXECUTES INSIDE BLOCK .DRAW() FUNCTION
    shoppingList.draw();
  },

  // ADDS NEW ITEM TO LIST
  add: function (event) {
    // PREVENT FORM RE-SUBMISSION
    event.preventDefault();

    // ADDS ITEM
    shoppingList.items.push({
      name: shoppingList.htmlInputField.value, // NAME
      done: false, // TRUE = "GOT IT" | FALSE = FOR "NOT YET"
    });

    // UPDATES LOCAL STORAGE
    shoppingList.htmlInputField.value = "";
    shoppingList.save();

    // EXECUTE CODE
    shoppingList.draw();
  },

  // (C) DRAW THE HTML SHOPPING LIST
  draw: function () {
    shoppingList.htmlShoppingList.innerHTML = "";
    if (shoppingList.items.length > 0) {
      let row, name, delbtn, okbtn;
      for (let i in shoppingList.items) {
        // CREATES ITEM ROW
        row = document.createElement("div");
        row.className = "item-row";
        shoppingList.htmlShoppingList.appendChild(row);

        // CREATES ITEM NAME
        name = document.createElement("div");
        name.className = "item-name";
        name.innerHTML = shoppingList.items[i].name;
        if (shoppingList.items[i].done) {
          name.classList.add("item-got");
        }
        row.appendChild(name);

        // DELETE BUTTON
        deleteButton = document.createElement("input");
        deleteButton.className = "item-del";
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.dataset.id = i;
        deleteButton.addEventListener("click", shoppingList.delete);
        row.appendChild(deleteButton);

        // COMPLETED ? NOT YET : IN CART -> BUTTON
        okayButton = document.createElement("input");
        okayButton.className = "item-ok";
        okayButton.type = "button";
        okayButton.value = shoppingList.items[i].done ? "IN CART" : "NOT YET";
        okayButton.dataset.id = i;
        okayButton.addEventListener("click", shoppingList.toggle);
        row.appendChild(okayButton);
      }
    }
  },

  // UPDATES SHOPPING LIST TO LOCAL STORAGE
  save: function () {
    if (localStorage.items === undefined) {
      localStorage.items = "[]";
    }
    localStorage.items = JSON.stringify(shoppingList.items);
  },

  // DELETES ITEM FROM LIST 
  delete: function () {
    if (confirm("Remove selected item?")) {
      shoppingList.items.splice(this.dataset.id, 1);
      shoppingList.save();
      shoppingList.draw();
    }
  },

  // TOGGLE FUNCTION FOR IN CART ? NOT YET
  toggle: function () {
    let id = this.dataset.id;
    shoppingList.items[id].done = !shoppingList.items[id].done;
    shoppingList.save();
    shoppingList.draw();
  },
};
window.addEventListener("DOMContentLoaded", shoppingList.initiate);
