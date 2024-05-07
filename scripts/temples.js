// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


// Get the current year for copyright
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the footer's first paragraph with the copyright year
document.getElementById("currentyear").textContent = currentYear;

// Update the footer's second paragraph with the last modified date
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = `Last Modification: ${lastModifiedDate}`;