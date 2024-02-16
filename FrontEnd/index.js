const worksInfo =  fetch('http://localhost:5678/api/works').then(res => res.json());
console.log(worksInfo);
const lala = worksInfo.then(data => data[5].title);
console.log(lala);