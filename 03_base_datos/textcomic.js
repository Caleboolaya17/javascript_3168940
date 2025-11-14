const infoComic = document.querySelector('.info-comic');

console.log(infoComic);

infoComic.innerHTML = `
            <small>${comic.year} </small>
            <h1>${comic.nombreComic}</h1>
            <p>${comic.sipnosis}</p>
            <p>${comic.genero}</p>
            `