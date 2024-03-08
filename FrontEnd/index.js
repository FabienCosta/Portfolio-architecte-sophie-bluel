// ? API Call and Token
const response = await fetch("http://localhost:5678/api/works");
const data = await response.json();
const fetchCategory = await fetch("http://localhost:5678/api/categories");
const categoryData = await fetchCategory.json();
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

// ? Functions homepage
// ! 2- Gestion de la connexion
function loginMamagement() {
  try {
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
  
} catch (error) {
  console.log(error);
}
}
// ! 1- Création de la galerie et des filtres 
function galeryCreation() {
  try {
    // boucle sur les data pour afficher les images
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
    
  } catch (error) {
    console.log(error);
  }
}

function filterAll() {
  try {
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
    
  } catch (error) {
    console.log(error);
  }
}

function filterObjects() {
  try {
    // filtre sur les categories sur chaque element de data qui possede la categorie "Objets"
    let dataObjects = data.filter((data) => data.category.name === "Objets");
    const buttonObjects = document.createElement("button");
    buttonObjects.classList.add("button_filter");
    buttonObjects.textContent = "Objets";
    buttonObjects.addEventListener("click", function () {
      //  au click sur le bouton, on vide la galerie et on affiche les images correspondantes
      galleryItem.innerHTML = "";
      // boucle sur les data pour afficher les images
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
    
  } catch (error) {
   console.log(error); 
  }
}

function filterApartment() {
  try {
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
    
  } catch (error) {
    console.log(error); 
  }
}

function filterHotel() {
  try {
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
    
  } catch (error) {
    console.log(error); 
  }
}

// ? functions Modal

function displayModal() {
  try {
    modify.addEventListener("click", function () {
      modal.style.display = "flex";
    });
    
  } catch (error) {
    console.log(error); 
  }
}

function removeModal() {
  try {
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
    
  } catch (error) {
    console.log(error); 
  }
}

async function displayModalWorks() {
  try {
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
    
  } catch (error) {
    console.log(error); 
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

// ? Global Variables
const modalFigure = document.querySelectorAll(".modal_figure");
const figure = document.querySelectorAll(".gallery_figure");
const deleteButton = document.querySelectorAll(".modal_delete");

async function deleteWork() {
  try {
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
    
  } catch (error) {
    console.log(error); 
  }
}
deleteWork();

function addworks() {
  try {
    const modalSubmit = document.querySelector(".modal_submit");
    modalSubmit.addEventListener("click", async function () {
      worksTitle.innerHTML = "Ajout photo";
      modalWorks.innerHTML = "";
      modalWorks.classList.remove("modal_works");
      modalWorks.classList.add("modal_upload");
      modalWorks.innerHTML = `
      <form class="modal-form" action="" enctype="multipart/form-data" >
                <div class='modal-form-photo'>
                  <i class="fa-regular fa-image modal-form-photo-icon"></i>
                  <label for="image" class="modal-form-photo-label">+ Ajouter photo</label>
                  <input type="file" name="image" id="image" class="modal-form-photo-input">
                  <p class="modal-form-photo-text">jpg, png : 4mo max</p>
                  <img class="modal-form-photo-previewImg" src="#" alt="Image du projet" style="display: none">
                </div>
    
                <div class='modal-form-title'>
                  <label for="titre" class='modal-form-title-text'>Titre</label>
                  <input type="text" name="titre" id="titre" class="modal-form-title-input">
                </div>
    
                <div class='modal-form-category'>
                  <label for="categorie">Catégorie</label>
                  <select name="categorie" id="categorie" class="modal-form-category-select">
                    
                  </select>
                </div>
                <button class="modal-form-button" >Valider</button>
              </form>
      `;
      const modalSubmitBtn = document.querySelector(".modal_submit");
      modalSubmitBtn.style.display = "none";
      uploadWork();
      addCategory();
      displayImgModal();
      formCompletedError();
    });
    
  } catch (error) {
    console.log(error); 
  }
}
addworks();

function addCategory() {
  try {
    const formAddCategory = document.querySelector(".modal-form-category-select");
    for (let i = 0; i < categoryData.length; i++) {
      let option = document.createElement("option");
      option.value = categoryData[i].id;
      option.textContent = categoryData[i].name;
      formAddCategory.appendChild(option);
      formAddCategory.value = categoryData[i].id;
    }
    
  } catch (error) {
    console.log(error); 
  }
}

function returnToModalGalery() {
  try {
    const modalSubmitBtn = document.querySelector(".modal_submit");
    modalSubmitBtn.addEventListener("click", () => {
      const returnArrow = document.createElement("i");
      returnArrow.classList.add("fa-solid", "fa-arrow-left");
      modalBox.appendChild(returnArrow);
      returnArrow.addEventListener("click", () => {
        modalWorks.classList.remove("modal_upload");
        modalWorks.classList.add("modal_works");
        displayModalWorks();
        modalSubmitBtn.style.display = "block";
        modalSubmitBtn.innerHTML = "Ajouter photo";
        modalSubmitBtn.style.backgroundColor = "#1d6154";
        returnArrow.style.display = "none";
      });
    });
    
  } catch (error) {
    console.log(error); 
  }
}
returnToModalGalery();

function displayImgModal() {
  try {
    const previewImg = document.querySelector(".modal-form-photo-previewImg");
    const iconImg = document.querySelector(".modal-form-photo-icon");
    const labelImg = document.querySelector(".modal-form-photo-label");
    const inputImg = document.querySelector(".modal-form-photo-input");
    const textImg = document.querySelector(".modal-form-photo-text");
    inputImg.addEventListener("change", () => {
      const file = inputImg.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result;
          previewImg.style.display = "block";
          labelImg.style.display = "none";
          iconImg.style.display = "none";
          textImg.style.display = "none";
          previewImg.setAttribute("src", e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
    
  } catch (error) {
    console.log(error); 
  }
}
// ! 3- Ajout d'un projet
function uploadWork() {
  try {
    const form = document.querySelector(".modal-form");
    const button = document.querySelector(".modal-form-button");
    // evenement sur le formulaire de soumission de nouveau projet
    form.addEventListener("submit", async (e) => {
      // empeche le rechargement de la page
      e.preventDefault();
      const image = document.getElementById("image").files[0];
      const title = document.querySelector(".modal-form-title-input");
      const category = document.querySelector(".modal-form-category-select");
      const formDatas = new FormData();
      formDatas.append("image", image);
      formDatas.append("title", title.value);
      formDatas.append("category", category.value);
      // fetch pour envoyer les données du formulaire en methode POST
      const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDatas,
      })
        
      DisplayNewGaleryModal();
      displayNewGalery();
      
    });
  } catch (error) {
    console.log(error);
  }
}

async function DisplayNewGaleryModal() {
  try {
    modalWorks.classList.remove("modal_upload");
    modalWorks.classList.add("modal_works");
    const arrowLeft = document.querySelector(".fa-arrow-left");
    // fetch pour recuperer les données de la base de données
    const works = await fetch("http://localhost:5678/api/works");
    // stockage des données dans une variable
    const data = await works.json();
  
    worksTitle.innerHTML = "Galerie photo";
    modalWorks.innerHTML = "";
    // boucle sur les data pour afficher les images mise a jour 
    for (let i = 0; i < data.length; i++) {
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
      const modalSubmitBtn = document.querySelector(".modal_submit");
      modalSubmitBtn.style.display = "flex";
      modalSubmitBtn.classList.add("modal_submit_return");
      arrowLeft.style.display = "none";
      deleteWork();
    }
    
  } catch (error) {
    console.log(error); 
  }
}

async function displayNewGalery () {
  try {
    galleryItem.innerHTML = "";
    const works = await fetch("http://localhost:5678/api/works");
    const data = await works.json();
    for (let i = 0; i < data.length; i++) {
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
    
  } catch (error) {
    console.log(error); 
  }
}

function formCompletedError() {
  try {
    const form = document.querySelector(".modal-form");
    const image = document.getElementById("image");
    const title = document.querySelector(".modal-form-title-input");
    const category = document.querySelector(".modal-form-category-select");
    const button = document.querySelector(".modal-form-button");
    const alert = document.createElement("p");
    alert.classList.add("modal-form-alert");
  
    form.addEventListener("input", () => {
      if (title.value !== "" && category.value !== "" && image.value !== "") {
        button.style.backgroundColor = "#1d6154";
        alert.textContent = "";
      } else {
        alert.textContent = "Veuillez remplir tous les champs";
        form.appendChild(alert);
      }
    });
    
  } catch (error) {
    console.log(error); 
  }
}