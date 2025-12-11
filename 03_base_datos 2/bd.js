export let comic = {
 
  "carrusel": [
    "fondo1.png",
    "fondo2.png",
    "fondo3.png"
  ],

  "inicio":
  [
    {
      "nombreComic": "La Princesa Ronca de Oro",
      "numeroCapitulos": 3,
      "genero": "Fantasía",
      "sipnosis": "Este cómic narra la historia de Helena, una joven princesa con <br> una voz excepcional que busca lograr su sueño de ser una gran <br> cantante superando todos los obstáculos del camino",
      "autores": ["Caleb Olaya", "Juan José Quintero", "Geraldinne Ramírez"],
      "portadaComic": "imagen/portada.jpg",
      "portada2": "fondo2.png",
      "portada3": "fondo3.png",
      "vercomic":"Ver Cómic",
      "year": "Año de lanzamiento: 2025"
    }
  ],

  "personajes":
  [      
    {
      "nombre": "Princesa Helena",
      "descripcion": "Princesa con una voz única que lucha <br> por su lugar en el mundo musical.",
      "imagen": "./helena.png",
      "id": 1,
      "edad": 18,
      "ocupacion": "Princesa",
      "habilidades": ["Canto", "Composición Musical"]
    },
    {
      "nombre": "Conde Melódico",
      "descripcion": "Interés amoroso de Helena, un noble <br> con pasión por la música.",
      "imagen": "./conde.png",
      "id": 2,
      "edad": 28,
      "ocupacion": "Conde",
      "habilidades": ["Composición Musical", "Piano"]
    },
    {
      "nombre": "Trovador",
      "descripcion": "Amigo leal de Helena que la apoya en su viaje musical.",
      "imagen": "./trovador.png",
      "id": 3,
      "edad": 40,
      "ocupacion": "Trovador",
      "habilidades": ["Canto", "Tocar la Lira"]
    }
  ],  

  "capitulos": [

    {
      "id": 1,
      "nombre": "El Surgimiento <br> De La Gran Voz",
      "personajes": ["Doncellas", "Princesa Helena", "Conde Melódico"],
      "portada": "capitulo_1.png",
      "descripcion": "Helena descubre su voz interior <br> y emprende un camino para llegar <br> a la fama musical.",
      "video": "video.mp4",
      "boton": "Ver Capítulo",
      "titulo": "El Surgimiento De La Gran Voz"
    },
    {
      "id": 2,
      "nombre": "Romance, Rebelión <br> Y Traición",
      "personajes": [],
      "portada": "capitulo_2.png",
      "descripcion": "En un giro inesperado, Helena se encuentra <br> atrapada en un triángulo amoroso entre el <br> Conde Melódico y un misterioso forastero.",
      "boton": "Ver Capítulo",
      "video": "video.mp4",
      "titulo": "Romance, Rebelión Y Traición"
    },
    {
      "id": 3,
      "nombre": "El Legado Del <br> Eco Dorado",
      "personajes": [],
      "portada": "capitulo_3.png",
      "descripcion": "El final de su vida se acerca y su legado <br> musical inspira a futuras generaciones, <br> llegando a ser una leyenda musical.",
      "boton": "Ver Capítulo",
      "video": "video.mp4",
      "titulo": "El Legado Del Eco Dorado"
    }
  ]
};
