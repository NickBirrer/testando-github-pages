const template = document.createElement('template');

// local server
// template.innerHTML = `
//   <link rel="stylesheet" type="text/css" href="nav-styles.css" />
//   <nav role="navigation">
//     <div id="menuToggle">
//       <input type="checkbox" />
      
//       <span></span>
//       <span></span>
//       <span></span>
      
//       <ul id="menu">
//       <li><a href="/home.html" onClick="route()">Home</a></li>
//       <li><a href="/videos.html" onClick="route()">Videos</a></li>
//       <li><a href="/imagens.html" onClick="route()">Imagens</a></li>
//       <li><a href="/contato.html" onClick="route()">Contato</a></li>
//       </ul>
//     </div>
//   </nav>
// `;
// github pages
template.innerHTML = `
  <link rel="stylesheet" type="text/css" href="nav-styles.css" />
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      
      <span></span>
      <span></span>
      <span></span>
      
      <ul id="menu">
      <li><a href="/testando-github-pages/home.html" onClick="route()">Home</a></li>
      <li><a href="/testando-github-pages/videos.html" onClick="route()">Videos</a></li>
      <li><a href="/testando-github-pages/imagens.html" onClick="route()">Imagens</a></li>
      <li><a href="/testando-github-pages/contato.html" onClick="route()">Contato</a></li>
      </ul>
    </div>
  </nav>
`;

class NavComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('nav-component', NavComponent);