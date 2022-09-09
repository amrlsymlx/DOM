const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click',runEvent);

// double click
clearBtn.addEventListener('dbclick',runEvent);

// Mouse down
clearBtn.addEventListener('mousedown',runEvent);

















// event handler
function runEvent(e){
    console.log(`Event Type : ${e.type}`);

}