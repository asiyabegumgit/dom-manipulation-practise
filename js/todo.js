//Task 1:Add a new task to the list when the "Add Task" button is clicked
document.getElementById('add-task').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
        const newListItem = document.createElement('li');
        newListItem.innerText = "Task "+(todoList.children.length+1);

        // Toggle the 'completed' class on click
        newListItem.addEventListener('click', function() {
            newListItem.classList.toggle('completed');
           // Task 5:Style the completed tasks to have a different background color
            if(newListItem.classList.contains('completed'))
            {
                newListItem.style.backgroundColor='green';
            }
            else{
                newListItem.style.backgroundColor='';
            }
        });

        document.getElementById('todo-list').appendChild(newListItem);
    }
);
//Task 2:Remove the last task from the list when the "Remove Task" button is clicked
document.getElementById('remove-task').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    if (todoList.lastChild) {
        todoList.removeChild(todoList.lastChild);
    } else {
        alert("List is empty");
    }
});
//Task 3:Clear all tasks when the "Clear List" button is clicked
document.getElementById('clear-list').addEventListener('click', function() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
});
// Task 4:Toggle a 'completed' class on the list items when clicked

const listItem = document.getElementById('todo-list').querySelectorAll('li');
for(let item of listItem)
{
item.addEventListener('click',()=>{
          item.classList.toggle('completed');
         //Task 5: Style the completed tasks to have a different background color
          if(item.classList.contains('completed'))
            {
                item.style.backgroundColor='green';
            }
            else{
                item.style.backgroundColor='';
            }});
}
          