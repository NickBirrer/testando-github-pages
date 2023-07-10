import { dadosDosVideos } from './dados.js';

const setupEmbeddedVideos = (array) => {
const getEmbeddedElm = document.getElementById("embeddedVideos");
  let html = '';
  array.forEach(({ titulo, url }) => {
    const embed = `
      <label>${titulo}
        <iframe width="560" height="315" src="${url}" style="margin-top: 5rem;"
        title="YouTube video player" frameborder="0" allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </label>
    `;
    html += embed
  })
  getEmbeddedElm.innerHTML = html;
}

window.onload = () => setupEmbeddedVideos(dadosDosVideos);