// declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li'); // Create a li element that will hold each entries chapter title and an associated delete button.
const deleteButton = document.createElement('button');  // Create a delete button.

li.textContent = input.Value; // Populate the li element variable's textContent or innerHTML with the input value.
deleteButton.textContent = '❌'; // Populate the button textContent with a ❌
li.append(deleteButton); // Append the li element variable with the delete button
list.append(li); // Append the li element variable to the unordered list in your HTML.


// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {

    // Code to execute when the button is clicked
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // If input is not blank, do the following tasks
        // Populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        // Other tasks you want to do if input is not blank can be placed here
    } else {
        // If input is blank, provide a message or return the focus to the input field
        alert('Please enter something before proceeding.'); // Provide a message
        input.focus(); // Return focus to the input field
    }
});

// Add an event listener to the delete button that removes the li element when clicked.
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

// Change the input value to nothing or the empty string to clean up the interface for the user.
input.value = '';

// Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element.
input.focus();