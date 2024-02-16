await fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    // En supposant que les données sont un objet, convertissez-le en tableau
    const dataArray = Object.keys(data).map(key => data[key]);
    const galleryItem = document.querySelector('.gallery');
    for (let i = 0; i < dataArray.length; i++) {

        const image = document.createElement('img');
        const title = document.createElement('figcaption');
        image.src = dataArray[i].imageUrl;
        image.alt = dataArray[i].title;
        title.textContent = dataArray[i].title;
        galleryItem.appendChild(image);
        galleryItem.appendChild(title);
    }
  })
  .catch(error => console.error('Erreur:', error));

