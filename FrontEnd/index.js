// Description: This file is used to display the gallery of the projects and to filter them by category
const response = await fetch("http://localhost:5678/api/works");
const data = await response.json();
console.log(data);
// await fetch("http://localhost:5678/api/works")
//   .then((response) => response.json())
//   .then((data) => {
//     let dataArray = Object.keys(data).map((key) => data[key]);
//     let galleryItem = document.querySelector(".gallery");
//     for (let i = 0; i < dataArray.length; i++) {
//       let figure = document.createElement("figure"); // Create a new figure element
//       let image = document.createElement("img");
//       let title = document.createElement("figcaption");
//       image.src = dataArray[i].imageUrl;
//       image.alt = dataArray[i].title;
//       title.textContent = dataArray[i].title;
//       figure.appendChild(image); // Append the img and figcaption to the figure
//       figure.appendChild(title);
//       galleryItem.appendChild(figure); // Append the figure to the galleryItem
//     }
//   })
//   .catch((error) => console.error("Erreur:", error));

// let sectionId = document.getElementById("projects");
// const filter = document.createElement("div");
// filter.classList.add("filter");
// sectionId.appendChild(filter);
// const buttonAll = document.createElement("button");
// buttonAll.classList.add("button_filter");
// buttonAll.textContent = "Tous";
// const buttonObjects = document.createElement("button");
// buttonObjects.classList.add("button_filter");
// buttonObjects.textContent = "Objets";
// const buttonAppartment = document.createElement("button");
// buttonAppartment.classList.add("button_filter");
// buttonAppartment.textContent = "Appartements";
// const buttonHotel = document.createElement("button");
// buttonHotel.classList.add("button_filter");
// buttonHotel.textContent = "Hotel & Restaurants";
// filter.appendChild(buttonAll);
// filter.appendChild(buttonObjects);
// filter.appendChild(buttonAppartment);
// filter.appendChild(buttonHotel);

// buttonObjects.addEventListener("click", function () {
//   console.log("click");
// });

