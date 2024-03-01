// ? API Call
const response = await fetch("http://localhost:5678/api/works");
const data = await response.json();
const token = sessionStorage.getItem("token");

// ? Global Variables
let galleryItem = document.querySelector(".gallery");
let sectionId = document.getElementById("projects");
const filter = document.createElement("div");
const modal = document.getElementById("modal");
const modalBox = document.querySelector(".modal_box");
const closeModal = document.querySelector(".modal_close");
const modalWorks = document.querySelector(".modal_works");
const worksTitle = document.querySelector(".modal_title");
const modify = document.querySelector(".modal_button");
const loginButton = document.querySelector(".login");
filter.classList.add("filter");
sectionId.appendChild(filter);
worksTitle.classList.add("modal_title");

// ? Functions
function loginMamagement() {
  if (token) {
    filter.style.display = "none";
    loginButton.innerHTML = "logout";
    loginButton.addEventListener("click", function () {
      sessionStorage.removeItem("token");
      window.location.href = "index.html";
    });
  }
  if (!token) {
    modify.style.display = "none";
    loginButton.innerHTML = "login";
    loginButton.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }
}

function galeryCreation() {
  for (let i = 0; i < data.length; i++) {
    modalWorks.innerHTML = "";
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let title = document.createElement("figcaption");
    figure.classList.add("gallery_figure");
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

// ? Modal

function displayModal() {
  modify.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}

function removeModal() {
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
  modal.addEventListener("click", function (event) {
    if (
      event.target == modal ||
      (event.target != modalBox && !modalBox.contains(event.target))
    ) {
      modal.style.display = "none";
    }
  });
}

async function displayModalWorks() {
  modalWorks.innerHTML = "";
  const works = data;
  worksTitle.innerHTML = "Galerie photo";
  for (let i = 0; i < works.length; i++) {
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let deleteButton = document.createElement("div");
    figure.classList.add("modal_figure");
    image.src = data[i].imageUrl;
    image.alt = data[i].title;
    image.id = data[i].id;
    figure.appendChild(image);
    modalWorks.appendChild(figure);
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("modal_delete");
    figure.appendChild(deleteButton);
  }
}

// ? function call
loginMamagement();
galeryCreation();
filterAll();
filterObjects();
filterApartment();
filterHotel();
removeModal();
displayModal();
displayModalWorks();


const modalFigure = document.querySelectorAll(".modal_figure");
const figure = document.querySelectorAll(".gallery_figure");
const deleteButton = document.querySelectorAll(".modal_delete");

async function deleteWork() {
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", async function () {
      await fetch(`http://localhost:5678/api/works/${data[i].id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (modalFigure[i].remove()) {
        displayModalWorks();
      }
      if (figure[i].remove()) {
        galeryCreation();
      }
    });
  }
}
deleteWork(); 

// ? factoriser le code
// ? commenter le code

const modalSubmit = document.querySelector(".modal_submit");
modalSubmit.addEventListener("click", async function () {
  worksTitle.innerHTML = "Ajout photo";
  modalWorks.innerHTML = "";
  modalWorks.classList.remove("modal_works");
  modalWorks.classList.add("modal_upload");
  const form =document.createElement("form");
  modalWorks.appendChild(form);
  const input = document.createElement("input");
  input.type = "file";
  input.name = "image";
  input.id = "image";
  form.appendChild(input);
  const labelTitle = document.createElement("label");
  labelTitle.for = "title";
  labelTitle.textContent = "Titre";
  form.appendChild(labelTitle);
  const inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.name = "title";
  inputTitle.id = "title";
  form.appendChild(inputTitle);
  
});
console.log(modalSubmit);