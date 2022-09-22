// we can construct the element from the scarch in js 

//create element 
const li = document.createElement('li');

//Add class
li.className='collection-item';

//Add id
li.id = 'new-item';

//create text node and appen it 
li.appendChild(document.createTextNode('new item'));

//create link
const link = document.createElement('a');

// Add class
link.className='delete-item secondary-content';

//Add html icon
link.innerHTML='<i class="fa fa-remove"></i>';

//Append the link into the li
li.appendChild(link);

//Appen the li as the child of ul
document.querySelector('ul').appendChild(li);
