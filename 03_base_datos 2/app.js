const personajes = document.querySelector('#lista-personajes');

comic.personajes.forEach(char => {
  //crear elementos didacticamente con java script
  const section = document.createElement("section");
  section.classList.add("per-section");
  section.innerHTML = `
      <h2 class="per">${char.nombre}</h2>
                        <img src="${char.imagen}" alt="${char.nombre}" width="300" height="400" style="border-radius: 100px;">
                        <div>
                            <p>${char.descripcion}</p>
                        </div>
  `;
  personajes.appendChild(section);
});
