import { comic  } from "./bd.js"; 

const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"));

const misCapitulos = comic.capitulos.find( c => c.id === id)

const containerCapitulos = document.querySelector(".capitulos");

if (!id || !misCapitulos) {
  window.location.href = "index.html";
  throw new Error("ID no válido");
}

containerCapitulos.innerHTML = `
   <section class="section" id="capitulo1">
        <h2 class="cap-h">${misCapitulos.nombre}</h2>
        <video controls class="cap-video">
            <source src="${misCapitulos.video}" type="video/mp4">
            <source src="${misCapitulos.video}" type="video/webm">
        </video>
        <div class="capitulo-text">
            <p>${misCapitulos.descripcion}
            </p>
        </div>

    </section>
`;
