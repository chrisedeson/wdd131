const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('open');

})

// const toggleButton = document.querySelector('.toggle-button');
// const navbarLinks = document.querySelector('.navbar-links');

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
//     toggleButton.classList.toggle('open');
// });