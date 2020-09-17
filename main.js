/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
'use strict';
let store = [
  { name: 'apples', checked: false },
  { name: 'oranges', checked: true },
  { name: 'bananas', checked: false }
];
  
function handleCheckedItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function (evt) {
    let title = $(this).parent().siblings();
    title.toggleClass('shopping-item__checked');
    console.log(title);
  
  
  });
}
  
function handleDeleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function (evt) {
    let listItem = $(this).closest('li');
    listItem.remove();
  
  });
}
  
function handleAddItem(){
  $('#js-shopping-list-form').submit(function (evt) {
    evt.preventDefault();
    let listItem = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    console.log(listItem);
    store.push({name:listItem, completed:false});  
    render();
  });
}
  
  
  
function generateShoppingItemHtml(item, itemIndex){
  const checkedClass = item.checked ? 'shopping-item__checked' : '';
  
  return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${checkedClass}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
     </li>
    `;
}
  
  
function generateShoppingListElements(items){
  // Create new array of HTML strings
  const elements = items.map((item, index) => {
    return generateShoppingItemHtml(item, index);
  });
  
  // Join the array into a single string and return it
  return elements;
}
  
function render(){
  let html= generateShoppingListElements(store); 
  $('.shopping-list').html(html);
}
  
function main() {
  handleAddItem();
  handleCheckedItem();
  handleDeleteItem();
  render();
  
  
  
  
  let myNumber = 10;
  
  function passedPrimitive(num) {
    num = 20;
  }
  
  passedPrimitive(myNumber);
  console.log(myNumber);   // => 10
    
}
  
  
  
$(main);