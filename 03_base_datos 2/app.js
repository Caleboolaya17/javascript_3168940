import { comic } from "./bd.js";

const personajes = document.querySelector('#lista-personajes');


comic.personajes.forEach(char => {
  //crear elementos didacticamente con java script
  const section = document.createElement("section");
  section.classList.add("per-section");
  section.innerHTML = `
  
      <h2 class="per">${char.nombre}</h2>
                        <a href="./personajes.html?id=${char.id}" ><img src="${char.imagen}" alt="${char.nombre}" width="300" height="400" style="border-radius: 100px; "></a>
                        <div>
                            <p>${char.descripcion}</p>
                        </div>

 
  `;
  personajes.appendChild(section);
});


const capitulos = document.querySelector('#capitulos');

comic.capitulos.forEach(capitulo => {
  const div = document.createElement("div");
  div.classList.add("capitulo");
  div.innerHTML = `
  
     <section class="section" id="capitulo1">
                    <h2 class="cap-h">${capitulo.id}</h2>
                    <img src="${capitulo.portada}" alt="imagen" height="400" width="300" style="border-radius: 10px;">
                    <div>
                        <h3>${capitulo.nombre}</h3>
                        <p>${capitulo.descripcion}.
                        </p>
                    </div>

                <a href="./capitulos.html?id=${capitulo.id}"><button class="ver-capitulo">${capitulo.boton}</button></a>
                
                </section>
                
  `;
  capitulos.appendChild(div);
});