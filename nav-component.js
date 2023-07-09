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
    <li><a href="/" onClick="route()">Home</a></li>
    <li><a href="/videos.html" onClick="route()">Videos</a></li>
    <li><a href="/imagens.html" onClick="route()">Imagens</a></li>
    <li><a href="/contato.html" onClick="route()">Contato</a></li>
  </ul>
`;

class NavComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('nav-component', NavComponent);