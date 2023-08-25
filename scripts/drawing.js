import { dadosDosContatos } from '../dados.js';

const setupContato = (array) => {
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
  let template = document.getElementById('contato-component');
  template.innerHTML = html;
}

setupContato(dadosDosContatos);