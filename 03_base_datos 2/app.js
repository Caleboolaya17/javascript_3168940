import { comic } from "./bd.js";


const personajes = document.querySelector('#lista-personajes');




comic.personajes.forEach(char => {
  //crear elementos didacticamente con java script
  const section = document.createElement("section");
  section.classList.add("per-section");
  section.innerHTML = `
 
      <h2 class="per">${char.nombre}</h2>
                        <a href="./personajes.html?id=${char.id}" ><img src="${char.imagen}" alt="${char.nombre}" width="300" height="400"
                         style="border-radius: 100px; " ;      
  transition: all 0.3s ease;></a>
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
                    <h2 class="cap-h">${capitulo.titulo}</h2>
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










//banner


const inicio = document.querySelector('#inicio');


comic.inicio.forEach ( ini => {
const div = document.createElement("div");
div.classList.add("ini");
div.innerHTML =  `
<h2 class="p">${ini.nombreComic}</h2>
            <p class="inicio-p">${ini.sipnosis}</p>
             <a href="./capitulos.html?id=${ini.id}"><button class="ver-capitulo">${ini.vercomic}</button></a>
            <ul class="lista-ul">
                <li>${ini.genero}</li>
                <li>${ini.year}</li>
                <li><a href="#capitulos"></a>Capitulos</li>
            </ul>
             `
             inicio.appendChild(div);
});


 const imagenesInicio = [
    "princesa.png",
    "fondo2.png",
    "fondo3.png"
  ];


  let index = 0;


  function cambiarFondoInicio() {
    document.getElementById("inicio").style.backgroundImage =
      `url('${imagenesInicio[index]}')`;
    index = (index + 1) % imagenesInicio.length;
  }


  cambiarFondoInicio();               
  setInterval(cambiarFondoInicio, 4000); 
 






 


