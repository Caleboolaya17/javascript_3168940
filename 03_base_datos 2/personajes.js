//configuracion Esmodules 2611

import { comic  } from "./bd.js"; 

const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"));

const miPersonaje = comic.personajes.find( p => p.id === id)

//console.log("El id del personaje es:", miPersonaje)
const containerPersonajes = document.querySelector(".padre");

if (!id || !miPersonaje) {
  window.location.href = "index.html";
  throw new Error("ID no válido");
}
console.log(miPersonaje)

containerPersonajes.innerHTML = `
<h2>Personajes</h2>
        <section class="per-section">
            <h2 class="per">${miPersonaje.nombre}</h2>
            <img src="${miPersonaje.imagen}" alt="${miPersonaje.nombre}" height="400" width="300" class="per-img">
            <div>
                <p class="p">${miPersonaje.descripcion}</p>

                <div class="info">
                    <ul>
                        <li>Edad: ${miPersonaje.edad}</li>
                        <li>Ocupación: ${miPersonaje.ocupacion}</li>
                        <li>Descripción: ${miPersonaje.descripcion}</li>
                        <li>Habilidades: ${miPersonaje.habilidades}</li>
                    </ul>
                </div>
            </div>
        </section>
    
`