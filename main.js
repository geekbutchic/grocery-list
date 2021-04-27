// SHOPPING LIST OBJECT 

const shoppingList = { 
    items: [], // ARRAY TO STORE ITEMS
    htmlShoppingList: null,  
    htmlAddItemForm: null,
    htmlInputField: null,
    initiate : function () { // SET'S UP THE PAGE
        // OBTAINS HTML ELEMENTS
        shoppingList.htmlShoppingList = documentQuerySelector("shop-list"); 
        shoppingList.htmlAddItemForm = documentQuerySelector("shop-add");
        shoppingList.htmlInputField = documentQuerySelector("shop-item");
        shoppingList.htmlAddItemForm.addEventListener("submit", shoppingList.add)
        
        // RESTORE PREVIOUS SHOPPING LIST 
        if(localStorage.items === undefined) {localStorage.items = "[]";}
        shoppingList.items = JSON.parse(localStorage.items);

        // EXECUTES CODE INSIDE BLOCK .DRAW FUNCTION 
        shoppingList.draw();
    }
}
window.addEventListener("DOMContentLoaded", shoppingList.initiate);


