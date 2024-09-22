// Task 1: Change the text of the main heading
document.getElementById('change-text').addEventListener('click', function() {
    document.getElementById('main-heading').innerText = 'Welcome to My Website!';
});

// Task 2: Add a new list item
document.getElementById('add-item').addEventListener('click',function() {
    const newItem = document.createElement('li');
    newItem.innerText = "Item "+(itemList.children.length+1);
    itemList.appendChild(newItem);
});

// Task 3: Change color of all list items on hover over button
document.getElementById('change-text').addEventListener('mouseover', function()  {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.style.color = 'blue';
    });
});

document.getElementById('change-text').addEventListener('mouseout', function() {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.style.color = ''; // Reset color
    });
});

// Task 4: Remove the last list item on double click
document.addEventListener('dblclick', () => {
    const listItems = itemList.querySelectorAll('li');
    if (listItems.length > 0) {
        itemList.removeChild(listItems[listItems.length - 1]);
    }
});

// Task 5: Update paragraph text on mouse move over heading
document.getElementById('main-heading').addEventListener('mouseover', () => {
    document.querySelector('.description').innerText = 'This is not a simple paragraph of text.';
});
