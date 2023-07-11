import { dadosDosVideos } from './dados.js';
const setupEmbeddedVideos = (array) => {
  let html = '';
  array.forEach(({ titulo, url }) => {
    const embed = `
      <h3>${titulo}</h3>
      <iframe width="560" height="315" src="${url}" style="margin-top: 5rem;"
        title="YouTube video player" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    `;
    html += embed;
  });
  html = `<div id="teste">${html}</div>`;
  let template = document.getElementById('videos');
  template.innerHTML = html;
}
setupEmbeddedVideos(dadosDosVideos);