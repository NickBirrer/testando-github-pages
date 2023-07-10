const template = document.createElement('template');
template.innerHTML = `
  <style>
    ul {
      background-color: blue;
    }
    li a {
      color: white;
    }
  </style>
  <ul>
    <li><a href="/testando-github-pages/home.html" onClick="route()">Home</a></li>
    <li><a href="/testando-github-pages/videos.html" onClick="route()">Videos</a></li>
    <li><a href="/testando-github-pages/imagens.html" onClick="route()">Imagens</a></li>
    <li><a href="/testando-github-pages/contato.html" onClick="route()">Contato</a></li>
  </ul>
`;

class NavComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('nav-component', NavComponent);