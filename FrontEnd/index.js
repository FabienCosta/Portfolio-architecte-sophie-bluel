// Description: This file is used to display the gallery of the projects and to filter them by category
const response = await fetch("http://localhost:5678/api/works");
const data = await response.json();

// ? Global Variables
let galleryItem = document.querySelector(".gallery");
let sectionId = document.getElementById("projects");
const filter = document.createElement("div");
filter.classList.add("filter");
sectionId.appendChild(filter);

// ? Functions
function galeryCreation() {
  for (let i = 0; i < data.length; i++) {
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let title = document.createElement("figcaption");
    image.src = data[i].imageUrl;
    image.alt = data[i].title;
    title.textContent = data[i].title;
    figure.appendChild(image);
    figure.appendChild(title);
    galleryItem.appendChild(figure);
  }
}

function filterAll() {
  let dataAll = data;
  const buttonAll = document.createElement("button");
  buttonAll.classList.add("button_filter");
  buttonAll.textContent = "Tous";
  buttonAll.addEventListener("click", function () {
    galleryItem.innerHTML = "";
    for (let i = 0; i < dataAll.length; i++) {
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      let title = document.createElement("figcaption");
      image.src = dataAll[i].imageUrl;
      image.alt = dataAll[i].title;
      title.textContent = dataAll[i].title;
      figure.appendChild(image);
      figure.appendChild(title);
      galleryItem.appendChild(figure);
    }
  });

  filter.appendChild(buttonAll);
}

function filterObjects() {
  let dataObjects = data.filter((data) => data.category.name === "Objets");
  const buttonObjects = document.createElement("button");
  buttonObjects.classList.add("button_filter");
  buttonObjects.textContent = "Objets";
  buttonObjects.addEventListener("click", function () {
    galleryItem.innerHTML = "";
    for (let i = 0; i < dataObjects.length; i++) {
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      let title = document.createElement("figcaption");
      image.src = dataObjects[i].imageUrl;
      image.alt = dataObjects[i].title;
      title.textContent = dataObjects[i].title;
      figure.appendChild(image);
      figure.appendChild(title);
      galleryItem.appendChild(figure);
    }
  });
  filter.appendChild(buttonObjects);
}

function filterApartment() {
  let dataApartment = data.filter(
    (data) => data.category.name === "Appartements"
  );
  const buttonApartment = document.createElement("button");
  buttonApartment.classList.add("button_filter");
  buttonApartment.textContent = "Appartements";
  buttonApartment.addEventListener("click", function () {
    galleryItem.innerHTML = "";
    for (let i = 0; i < dataApartment.length; i++) {
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      let title = document.createElement("figcaption");
      image.src = dataApartment[i].imageUrl;
      image.alt = dataApartment[i].title;
      title.textContent = dataApartment[i].title;
      figure.appendChild(image);
      figure.appendChild(title);
      galleryItem.appendChild(figure);
    }
  });
  filter.appendChild(buttonApartment);
}

function filterHotel() {
  let dataHotel = data.filter(
    (data) => data.category.name === "Hotels & restaurants"
  );
  const buttonHotel = document.createElement("button");
  buttonHotel.classList.add("button_filter");
  buttonHotel.textContent = "Hotel & Restaurants";
  buttonHotel.addEventListener("click", function () {
    galleryItem.innerHTML = "";
    for (let i = 0; i < dataHotel.length; i++) {
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      let title = document.createElement("figcaption");
      image.src = dataHotel[i].imageUrl;
      image.alt = dataHotel[i].title;
      title.textContent = dataHotel[i].title;
      figure.appendChild(image);
      figure.appendChild(title);
      galleryItem.appendChild(figure);
    }
  });
  filter.appendChild(buttonHotel);
}

// ? function call
galeryCreation();
filterAll();
filterObjects();
filterApartment();
filterHotel();


// ? Modal
const modal = document.getElementById("modal");
const modalBox = document.querySelector('.modal_box');
const closeModal = document.querySelector(".modal_close");
const modalWorks = document.querySelector(".modal_works");
const worksTitle = document.querySelector(".modal_title");
worksTitle.classList.add("modal_title");

function removeModal() {
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  }); 
modal.addEventListener('click', function(event) {
    if (event.target == modal || event.target != modalBox && !modalBox.contains(event.target)) {
        modal.style.display = "none";
    }
});
}


function displayModal (){
  const modify = document.querySelector(".modal_button");
  modify.addEventListener("click", function () {
    modal.style.display = "flex";
  });
  console.log(modify);
}

function deleteWorks() {
  const works = data;
  worksTitle.innerHTML = "Galerie photo";
  
  for (let i = 0; i < works.length; i++) {
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    figure.classList.add("modal_figure");
    image.src = data[i].imageUrl;
    image.alt = data[i].title;
    figure.appendChild(image);
    modalWorks.appendChild(figure);
}
}

// ? function call Modal
removeModal();
displayModal();
deleteWorks();

