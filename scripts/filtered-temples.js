const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  toggleButton.classList.toggle('open');

})


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Sapporo Japan",
    location: "Atsubetsu-ku Sapporo, Hokkaido, Japan",
    dedicated: "2016. August, 16",
    area: 48480,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/1280x800/sapporo-japan-exterior-night-1945721.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, Seoul-teukbyeolsi, South Korea",
    dedicated: "1985, December, 14",
    area: 28057,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/1280x800/seoul-korea-temple-lds-424784-wallpaper.jpg"
  },
  {
    templeName: "Tegucigalpa Honduras Temple",
    location: "Comayagüela, Francisco Morazán, Honduras",
    dedicated: "2013, March, 17",
    area: 28254,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tegucigalpa-honduras/1280x800/tegucigalpa-honduras-temple-lds-1075426-wallpaper.jpg"
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 59130,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/1280x800/logan-temple-760446-wallpaper.jpg"
  },
  {
    templeName: "Frankfurt Germany Mexico",
    location: "Friedrichsdorf, Hessen, Germany",
    dedicated: "1987, August, 28",
    area: 24170,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/1280x800/frankfurt-germany-temple-lds-82734-wallpaper.jpg"
  }
];

createTempleCard(temples);

const currentyear = new Date().getFullYear();

const templesOldLink = document.querySelector("#templesOld");
const templesNewLink = document.querySelector("#templesNew");
const templesLargeLink = document.querySelector("#templesLarge");
const templesSmallLink = document.querySelector("#templesSmall");
const templesHome = document.querySelector("#home");


templesOldLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple =>  parseInt(temple.dedicated.split(',')[0]) < 1900));
});

templesNewLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000));
});

templesLargeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
})

templesSmallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
})

templesHome.addEventListener("click", () => {
  createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
  // document.querySelector(".features").innerHTML = "";
  const featuresContainer = document.querySelector(".features");
  featuresContainer.innerHTML = "";
  
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let imgContainer = document.createElement("div"); // Creating an image container
    let img = document.createElement("img");
    

    // Set attributes and content for each element
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    // Adding the image-container class to the imgContainer div
    card.classList.add("image-container");

    // Append elements to their respective containers
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    imgContainer.appendChild(img); // Append the image to the image container
    card.appendChild(imgContainer); // Append the image container to the card

    document.querySelector(".features").appendChild(card);
  })
}

// Initial load with all temples
createTempleCard(temples);