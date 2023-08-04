import { dadosDosVideos, dadosDasImagens } from './dados.js';

const setupEmbeddedVideos = (array) => {
  array = array.slice(array.length - 3, array.length); // pegando somente os 3 ultimos elementos
  let html = '';
  array.forEach(({ titulo, url }) => {
    const embed = `
      <h3 class="video-title">${titulo}</h3>
      <iframe class="embedded-video"  src="${url}" style="margin-top: 5rem;"
        title="YouTube video player" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    `;
    html += embed;
  });
  html = `<div class="video-container">${html}</div>`;
  let template = document.getElementById('home-videos-component');
  template.innerHTML = html;
}

const setupImages = (array) => {
  array = array.slice(array.length - 3, array.length); // pegando somente os 3 ultimos elementos
  let html = '';
  array.forEach(({ titulo, url, description }) => {
    const embed = `
      <h3 class="image-title">${titulo}</h3>
      <img style="width: 24rem; height:auto" src="${url}" alt="${description}">
    `;
    html += embed;
  });
  html = `<div class="image-container">${html}</div>`;
  let template = document.getElementById('home-images-component');
  template.innerHTML = html;
}

setupEmbeddedVideos(dadosDosVideos);
setupImages(dadosDasImagens);