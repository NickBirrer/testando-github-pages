import { dadosDosVideos } from './dados.js';

const setupEmbeddedVideos = (array) => {
  let html = '';
  array.forEach(({ titulo, url }) => {
    const embed = `
      <h3 class="video-title">${titulo}</h3>
      <iframe class="embedded-video" width="560" height="315" src="${url}" style="margin-top: 5rem;"
        title="YouTube video player" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    `;
    html += embed;
  });
  html = `<div class="video-container">${html}</div>`;
  let template = document.getElementById('video-component');
  template.innerHTML = html;
}
setupEmbeddedVideos(dadosDosVideos);