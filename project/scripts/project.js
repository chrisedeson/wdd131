const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page URL
  const navLinks = document.querySelectorAll('.navbar-links li a'); // Select all navigation links
  
  // Loop through each navigation link
  navLinks.forEach(link => {
    // Get the href attribute of the link
    const linkHref = link.getAttribute('href').split('/').pop();
    
    // Check if the current page matches the link href
    if (currentPage === linkHref) {
      // Add the 'active' class to the link
      link.classList.add('active');
    } else {
      // Remove the 'active' class from all other links
      link.classList.remove('active');
    }
  });

  // Lazy load images and background images
  let lazyElements = document.querySelectorAll('img.lazy, .lazy-background');
  lazyElements.forEach(element => {
    if (element.tagName === 'IMG') {
      element.src = element.dataset.src;
      element.onload = () => {
        element.classList.remove('lazy');
      };
    } else {
      let imgUrl = element.getAttribute('data-src');
      element.style.backgroundImage = `url(${imgUrl})`;
    }
  });
});



const food = [
  {
    foodName: "Amala & Ewedu",
    tribe: "Yoruba",
    time: 45,
    imageUrl: "https://themedivoiceoau.com/wp-content/uploads/2022/11/images-93.jpeg"
  },
  {
    foodName: "Afang Soup",
    tribe: "Efik",
    time: 50,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoVG_5Q6fnKyW7wGLRSCT7J3_1HZDSy3BaQ&s"
  },
  {
    foodName: "Abacha",
    tribe: "Ibo",
    time: 60,
    imageUrl: "https://miro.medium.com/v2/resize:fit:640/1*Xl0PR_7NyvOkDtcFPj2wlQ.jpeg"
  },
  {
    foodName: "Jollof Rice",
    tribe: "Nigerian",
    time: 80,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GcBsSPk2GYi0OSeIxXg7sJ6it1IOvTS3CA&s"
  },
  {
    foodName: "Soaked Garri",
    tribe: "Everyone",
    time: 5,
    imageUrl: "https://assets.bonappetit.com/photos/60ef61ea1cd5ffae42c1d614/1:1/w_1687,h_1687,c_limit/Garri.jpg"
  },
  {
    foodName: "Akara",
    tribe: "Everyone",
    time: 90,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJUsepBnCEmv93Jh3nRkArIy3fDt-fcL2Hw&s"
  },
  {
    foodName: "Groundnut Soup",
    tribe: "Calabar",
    time: 100,
    imageUrl: "https://www.maggi.ng/sites/default/files/srh_recipes/72ec2e4fed345633bd67ce02f665fdab.jpg"
  },
  {
    foodName: "Egusi Soup",
    tribe: "Ibo",
    time: 50,
    imageUrl: "https://lh3.googleusercontent.com/-8ELx0ug0NUQ/Xilhw02lG2I/AAAAAAAAYMU/gTHK-FY2NuE6BbYMmguEglTrcQrk9BcQQCLcBGAsYHQ/s1600/1579770182566517-0.png"
  },
  {
    foodName: "Banga",
    tribe: "Benin",
    time: 120,
    imageUrl: "https://allnigerianfoods.com/wp-content/uploads/banga-stew-ofe-akwu.jpg"
  },
  {
    foodName: "Ogbono Soup",
    tribe: "Kogi",
    time: 36,
    imageUrl: "https://img-global.cpcdn.com/recipes/6d39ece86f8b6d6a/680x482cq70/ogbono-soup-recipe-main-photo.jpg"
  },
  {
    foodName: "Okro Soup",
    tribe: "Nassarawa",
    time: 43,
    imageUrl: "https://i.pinimg.com/564x/d6/d2/25/d6d2259aaf88409eba1f8287d7682fdb.jpg"
  },
  {
    foodName: "Tuwo Shinkafa",
    tribe: "Bayelsa",
    time: 74,
    imageUrl: "https://miro.medium.com/v2/resize:fit:500/1*SNn5PRgsMJHse1dVUVmjLw.jpeg"
  }
];


// Initial load with all food
createFoodCard(food);

const foodHome = document.querySelector("#home");

foodHome.addEventListener("click", () => {
  createFoodCard(food);
});

function createFoodCard(filteredFood) {
  const foodCardsContainer = document.querySelector(".food-cards");
  foodCardsContainer.innerHTML = "";
  
  filteredFood.forEach(foodItem => {
    let card = document.createElement("section");
    card.classList.add("food-card");
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let img = document.createElement("img");
    img.setAttribute("src", foodItem.imageUrl);
    img.setAttribute("alt", `${foodItem.foodName} Food`);
    img.setAttribute("loading", "lazy");

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    let name = document.createElement("h3");
    name.classList.add("food-name");
    name.textContent = foodItem.foodName;
    card.appendChild(name);

    let tribe = document.createElement("p");
    tribe.classList.add("food-detail");
    tribe.innerHTML = `<span class="label">Tribe:</span> ${foodItem.tribe}`;

    let time = document.createElement("p");
    time.classList.add("food-detail");
    time.innerHTML = `<span class="label">Time:</span> ${foodItem.time} min`;

    card.appendChild(tribe);
    card.appendChild(time);

    foodCardsContainer.appendChild(card);
  });
}
