// Get the current year for copyright
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the footer's first paragraph with the copyright year
document.getElementById("currentyear").textContent = currentYear;

// Update the footer's second paragraph with the last modified date
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = `Last Modification: ${lastModifiedDate}`;