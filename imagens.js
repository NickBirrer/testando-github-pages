import { dadosDasImagens } from './dados.js';

const setupImages = (array) => {
  let html = '';
  array.forEach(({ titulo, url, description }) => {
    const embed = `
      <h3 class="image-title">${titulo}</h3>
      <img style="width:250px; height:auto" src="${url}" alt="${description}">
    `;
    html += embed;
  });
  html = `<div class="image-container">${html}</div>`;
  let template = document.getElementById('home-images-component');
  template.innerHTML = html;
}

setupImages(dadosDasImagens);