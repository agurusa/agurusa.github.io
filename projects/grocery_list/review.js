// Pseudocode:
// Create a new list
// 1. Ask the user to input all items and quantities.
// 2. Store this information so key value pairs are items and quantities respectively.


// Add an item with a quantity to the list
// 1. Ask the user what item they want to add.
// 2. Check IF the item was already there.
//   a. IF it was there, add 1 to the quantity.
//   b. ELSE add the item to the list with quantity 1.
// 3. Alert the user that their item was added.

// Remove an item from the list
// 1. Ask the user what item they want to remove.
// 2. Check IF the item was already there.
//   a. IF it was there, remove it. Then alert the user that their item was deleted.
//   b. ELSE alert the user that it was never on the list.

// Update quantities for items in the list
// 1. Ask the user what item they want to update
// 2. Check IF the item was already there
//   a. IF it was there, change the quantity to new amount.
//   b. ELSE, alert the user that it wasn't on the list. Ask them if they would like to add the item with that quantity.

// Print the list
// 1. Print each item:quantity on a separate line
$(document).ready(function(){
  $("#print").mouseenter(function(){
    $("#print").fadeTo("fast", 1);
  });
  $("#print").mouseleave(function(){
    $("#print").fadeTo("fast", 0.8);
  });
  $("#add").mouseenter(function(){
    $("#add").fadeTo("fast", 1);
  });
  $("#add").mouseleave(function(){
    $("#add").fadeTo("fast", 0.8);
  });
  $("#remove").mouseenter(function(){
    $("#remove").fadeTo("fast", 1);
  });
  $("#remove").mouseleave(function(){
    $("#remove").fadeTo("fast", 0.8);
  });
});

var list = {};

print_list = function(){
  var text = document.getElementById("text");
  var list2 = "<ul>"
  for(var element in list){
    list2 += "<li>"+element+ " : " + list[element] + "</li>";
  }
  list2 += "</ul>";
  text.innerHTML = list2;
}

add = function(){
  var item = document.getElementById("item").value.toLowerCase().trim();
  var quantity = document.getElementById("quantity").value.trim();
  if (item === "" || quantity ===""){
    alert("You must provide an item and quantity")
  }
  else{
  list[item] = quantity;
  print_list();
  var form = document.getElementById("form");
  form.reset();
  }
}

take_off = function(){
  var item = document.getElementById("item").value.toLowerCase().trim();
  if (list[item]){
    delete list[item];
    print_list();
  }
  else{
    alert("That item was never on your list.");
  }
  form.reset();
}

// Reflection:
// What concepts did you solidify in working on this challenge? (reviewing the passing of information, objects, constructors, etc.)
// I did a lot of DOM work, so it was nice to review how to access elements. I wish I was able to review constructors and prototypes more- I couldn't quite figure out how to put that together.

// What was the most difficult part of this challenge?
// The most difficult part of this challenge was figuring out why some of the code worked and some didn't. I found it really confusing that chrome recognizes functions like print() and remove(), even if they are defined differently in the code. I also can't quite figure out why I can't make an if statement work in the print function, with:

// if(list ==={}){
//   alert("Your list is empty");
// }

// It just doesn't ever recognize that statement as true, even if the user hasn't inputted any iformation.

// Did an array or object make more sense to use and why?

// I used an object to keep track of key/value pairs with items: quantity.




