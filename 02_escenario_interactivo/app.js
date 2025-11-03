 //contador de monedas escenario1
 let puntuacion = 0;

    const monedas = document.querySelectorAll('.moneda');
    const contador = document.getElementById('contador');

    monedas.forEach(moneda => {
        moneda.addEventListener('click', () => {
          
            puntuacion += 1;

            contador.textContent = `Puntuación: ${puntuacion}`;

            moneda.style.display = 'none';
        });
    });

    //score y movimiento de competidor escenario2
 
  let score = 0;
  const marcador = document.getElementById('score2');
  const competidores = document.querySelectorAll('.competidor');
  const paso = 30;

  competidores.forEach(competidor => {
    let pos = 10;

    competidor.addEventListener('click', () => {
      score++;
      marcador.textContent = `Score: ${score}`;
      
      pos += paso;
      competidor.style.left = pos + 'px';
    });
  });


  //contador de monedas escenario3
  let scoreSpider = 0;
  let scoreVillano = 0;

  const marcadorSpider = document.getElementById('score3');
  const marcadorVillano = document.getElementById('score4');

  function sumarYDesaparecer(elemento, marcador, variable, tipo) {
    variable++;
    marcador.textContent = variable;
    elemento.style.opacity = '0';
    setTimeout(() => elemento.style.display = 'none', 300);
    return variable;
  }

  // Arañas (mon)
  const aranas = document.querySelectorAll('.mon');
  aranas.forEach(araña => {
    araña.addEventListener('click', () => {
      scoreSpider = sumarYDesaparecer(araña, marcadorSpider, scoreSpider, 'mon');
    });
  });

  // Villanos
  const villanos = document.querySelectorAll('.villano');
  villanos.forEach(villano => {
    villano.addEventListener('click', () => {
      scoreVillano = sumarYDesaparecer(villano, marcadorVillano, scoreVillano, 'villano');
    });
  });


  const escenas = document.querySelectorAll('.escena, .escena-activa');
const btnPrev = document.querySelector('.boton1');
const btnNext = document.querySelector('.boton2');

// Seleccionamos las miniaturas de la galería
const miniaturas = document.querySelectorAll('.miniatura');

let indice = 0; // índice de escena activa

// Función para mostrar la escena activa y actualizar miniaturas
function mostrarEscena(index) {
  escenas.forEach((escena, i) => {
    if (i === index) {
      escena.classList.add('escena-activa');
      escena.classList.remove('escena');
    } else {
      escena.classList.remove('escena-activa');
      escena.classList.add('escena');
    }
  });

  // Marcar miniatura activa
  miniaturas.forEach((mini, i) => {
    mini.classList.toggle('activa', i === index);
  });
}

// Botón siguiente
btnNext.addEventListener('click', () => {
  indice = (indice + 1) % escenas.length;
  mostrarEscena(indice);
});

// Botón anterior
btnPrev.addEventListener('click', () => {
  indice = (indice - 1 + escenas.length) % escenas.length;
  mostrarEscena(indice);
});

// Miniaturas: clic para cambiar escena
miniaturas.forEach((mini, i) => {
  mini.addEventListener('click', () => {
    indice = i;
    mostrarEscena(indice);
  });
});

// Mostrar la primera escena al cargar
mostrarEscena(indice);