# dom-manipulation-practice
### **Ticket Breakdown: DOM Manipulation Practice**

---

### **Ticket 1: Basic DOM Manipulation**

**Description:** Practice accessing and manipulating elements in the DOM.

**Starting HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic DOM Manipulation</title>
</head>
<body>
    <h1 id="main-heading">Welcome to My Website</h1>
    <p class="description">This is a simple paragraph of text.</p>
    <ul id="item-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="change-text">Change Heading Text</button>
    <button id="add-item">Add List Item</button>

    <script src="app.js"></script>
</body>
</html>
```

**Tasks:**

1. **Change the text of the main heading when the "Change Heading Text" button is clicked.**
   - **Hint:** Use `getElementById()` to select the heading and `innerText` to change its text.

2. **Add a new list item when the "Add List Item" button is clicked.**
   - **Hint:** Use `createElement()` to create a new `li` element and `appendChild()` to add it to the list.

3. **Change the color of all list items to blue when you hover over the "Change Heading Text" button.**
   - **Hint:** Use `querySelectorAll()` to select all `li` elements and change the `style` property inside an event listener.

4. **Remove the last list item when you double-click anywhere on the page.**
   - **Hint:** Use `querySelectorAll()` to find all list items, and remove the last one with `removeChild()`.

5. **Update the paragraph text when the mouse moves over the heading.**
   - **Hint:** Use an event listener for the `mouseover` event and change the `innerText` of the paragraph.

---

### **Ticket 2: Dynamic DOM Elements and Styling**

**Description:** Practice dynamically adding elements, removing elements, and changing their styles.

**Starting HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Elements</title>
  <style>
        .completed {
            text-decoration: line-through;
        }
    </style>
</head>
<body>
    <h2>To-Do List</h2>
    <ul id="todo-list">
        <li>Task 1</li>
        <li>Task 2</li>
    </ul>
    <button id="add-task">Add Task</button>
    <button id="remove-task">Remove Last Task</button>
    <button id="clear-list">Clear List</button>

    <script src="todo.js"></script>
</body>
</html>
```

**Tasks:**

1. **Add a new task to the list when the "Add Task" button is clicked.**
   - **Hint:** Use `createElement()` and `appendChild()` to add a new `li` element.

2. **Remove the last task from the list when the "Remove Task" button is clicked.**
   - **Hint:** Use `lastElementChild` and `removeChild()` to remove the last `li` element.

3. **Clear all tasks when the "Clear List" button is clicked.**
   - **Hint:** Use a loop or set `innerHTML = ''` to clear all list items.

4. **Toggle a 'completed' class on the list items when clicked.**
   - **Hint:** Use `classList.toggle()` to add or remove the 'completed' class.

5. **Style the completed tasks to have a different background color.**
   - **Hint:** Modify the `.completed` class in the `<style>` section to change the background color.

---

### **Ticket 3: Advanced DOM Manipulation with Events**

**Description:** Practice using event listeners and dynamically interacting with elements based on user input.

**Starting HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced DOM Manipulation</title>
</head>
<body>
    <h1>Event Interaction Demo</h1>
    <button id="hide-btn">Hide Heading</button>
    <button id="show-btn">Show Heading</button>

    <h2 id="demo-heading">Hello, World!</h2>

    <button id="change-color-btn">Change Heading Color</button>

    <script src="events.js"></script>
</body>
</html>
```

**Tasks:**

1. **Hide the heading when the "Hide Heading" button is clicked.**
   - **Hint:** Use `style.display = 'none'` to hide the element.

2. **Show the heading when the "Show Heading" button is clicked.**
   - **Hint:** Use `style.display = 'block'` to show the element again.

3. **Change the color of the heading when the "Change Heading Color" button is clicked.**
   - **Hint:** Use `style.color` to change the heading’s color.

4. **Toggle the visibility of the heading with a single button (combine hide and show functionality).**
   - **Hint:** Use `style.display` with a conditional to toggle between 'none' and 'block'.

5. **Automatically change the heading color every second (use `setInterval`).**
   - **Hint:** Use an array of colors and cycle through them with `setInterval()`.

---
