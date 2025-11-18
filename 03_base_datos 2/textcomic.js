const personaje = document.getElementById('.card-personajes');

console.log(personaje);

infopersonajes = () => {
  let personajeHTML = '';
  comic.personajes.forEach(personaje => {
    personajeHTML += `
      <div class="card-personajes">
        <img src="${personaje.imagen}" alt="${personaje.nombre}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${personaje.nombre}</h5>
          <p class="card-text">${personaje.descripcion}</p>
        </div>
      </div>
    `;
  });
  personajes.innerHTML = personajeHTML;
};

comic.personajes.forEach(char => {
    //crear elementos didacticamente con java script
    const div = document.createElement("div");
    div.classList.add("personajes");

  console.log(char.nombre);
  document.body.innerHTML +=  `<img src="${char.imagen}" alt="${char.nombre}" width="200px">`;
});
    