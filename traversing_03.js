//traversing the document object mode;
// how to move around
let val;

const list=document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get child node
// provide us a node list of all child
// text nodes are the line breaks
// in most cases we need element child node

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;

// Types of nodes
// 1 - element
// 2 - attributes
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

// How to get children element nodes
// It returns HTML collection so we can treat it like an array
// Except using loops and methods
// It should convert to an array to loop through and use methods

val = list.children;
val = list.children[0];
val = list.children[0].textContent='Hello';

// acess to children of children

val = list.children[3].children[0].id='test-link';

// first child
val = list.firstChild;
val = list.lastElementChild;

// count child
val=list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);