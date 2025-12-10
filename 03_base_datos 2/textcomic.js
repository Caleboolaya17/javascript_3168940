const personaje = document.getElementById('.card-personajes');

console.log(personaje);



comic.personajes.forEach(char => {
    //crear elementos didacticamente con java script
    const div = document.createElement("div");
    div.classList.add("personajes");
    div.innerHTML = `
      <img src="${char.imagen}" alt="${char.nombre}" width="200px">
      <p>${char.nombre}</p>
      <p>${char.descripcion}</p>
    `;
    

});
    