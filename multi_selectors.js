// document.getElementsByClassName()


// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[1]);
// items[1].style.color='red';
// items[3].textContent='hello';


// document.getElementsByTagName()

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[2]);
// lis[0].style.color='pink';
// lis[2].textContent='Hello';

// convert html collection to array
// const lisArr = Array.from(lis);
// console.log(lisArr);
// lisArr.reverse();


// document.querySelectorAll()
// return a node list
// node list can be treated like an array (loops, methods)
// not require to convert

const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);

items.forEach(function(item) {
    item.textContent = 'Hello'
});



const liOdd = document.querySelectorAll('li:nth-Child(odd)');
const liEven = document.querySelectorAll('li:nth-Child(even)');

liOdd.forEach(function(li){
    li.style.background='#333'
})

liEven.forEach(function(li){
    li.style.background='#f4f4f4'
})