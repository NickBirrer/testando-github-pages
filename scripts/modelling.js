import { dadosDasImagens } from '../dados.js';

const setupImages = (array) => {
  array = array.reverse();
  let html = '';
  array.forEach(({ titulo, url, description }) => {
    const embed = `
      <h3 class="image-title">${titulo}</h3>
      <img style="width:28rem; height:auto" src="${url}" alt="${description}">
    `;
    html += embed;
  });
  html = `<div class="image-container">${html}</div>`;
  let template = document.getElementById('images-component');
  template.innerHTML = html;
}

setupImages(dadosDasImagens);