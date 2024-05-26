// declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // the actual id of your list element

const chaptersArray = getChaptersList() || [];

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {

    // Code to execute when the button is clicked
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // If input is not blank, create new elements and add them to the list
        const li = document.createElement('li'); // Create a new li element
        const deleteButton = document.createElement('button');  // Create a new delete button
        li.textContent = input.value; // Populate the li element's textContent with the input value
        deleteButton.textContent = '❌'; // Populate the button textContent with a ❌
        li.appendChild(deleteButton); // Append the delete button to the li element
        list.appendChild(li); // Append the li element to the list

        // Add an event listener to the delete button that removes the parent li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value = '';

    } else {
        // If input is blank, provide a message or return the focus to the input field
        alert('Please enter something before proceeding.'); // Provide a message
        input.focus(); // Return focus to the input field
    }
});

// Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element.
input.focus();


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {    // make sure the input is not empty
        displayList(input.value);   // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);    // add the chapter to the array
        setChapterList();   // update the localStorage with the new array
        input.value = '';   // clear the input
        input.focus();  // clear the input
    }
});

function displayList(item) {
    const li = document.createElement('li'); // Create a new li element
        const deleteButton = document.createElement('button');  // Create a new delete button
        li.textContent = input.value; // Populate the li element's textContent with the input value
        deleteButton.textContent = '❌'; // Populate the button textContent with a ❌
        li.appendChild(deleteButton); // Append the delete button to the li element
        list.appendChild(li); // Append the li element to the list

        // Add an event listener to the delete button that removes the parent li element when clicked.
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        console.log('You like to copy code instead of typing it and trying to understand it')

};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChaptersList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};