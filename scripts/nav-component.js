const navTemplate = document.createElement('template');

// local server
// navTemplate.innerHTML = `
//   <link rel="stylesheet" type="text/css" href="./styles/nav-styles.css" />
//   <nav class="nav-wrapper" role="navigation">
//     <div id="menuToggle">
//       <input type="checkbox" />
      
//       <span></span>
//       <span></span>
//       <span></span>
      
//       <ul id="menu">
//       <li><a href="/index.html" onClick="route()">Home</a></li>
//       <li><a href="/rigging.html" onClick="route()">Riggings</a></li>
//       <li><a href="/drawing.html" onClick="route()">Drawings</a></li>
//       <li><a href="/modelling.html" onClick="route()">Modellings</a></li>
//       </ul>
//     </div>
//   </nav>
// `;
// github pages
navTemplate.innerHTML = `
  <link rel="stylesheet" type="text/css" href="nav-styles.css" />
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      
      <span></span>
      <span></span>
      <span></span>
      
      <ul id="menu">
      <li><a href="/testando-github-pages/index.html" onClick="route()">Home</a></li>
      <li><a href="/testando-github-pages/rigging.html" onClick="route()">Riggings</a></li>
      <li><a href="/testando-github-pages/drawing.html" onClick="route()">Drawings</a></li>
      <li><a href="/testando-github-pages/modelling.html" onClick="route()">Modellings</a></li>
      </ul>
    </div>
  </nav>
`;

class NavComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
  }
}

window.customElements.define('nav-component', NavComponent);