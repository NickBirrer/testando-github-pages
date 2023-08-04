const socialsTemplate = document.createElement('template');

// local server
socialsTemplate.innerHTML = `
  <link rel="stylesheet" type="text/css" href="socials-styles.css" />
  <div id="socials-component">
    <a href="https://www.instagram.com/ba._.r/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
    <a href="https://twitter.com/" target="_blank">
      <img style="width:3rem; height:3rem" src="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" alt="teste">
    </a>
  </div>
`;

class SocialsComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(socialsTemplate.content.cloneNode(true));
  }
}

window.customElements.define('socials-component', SocialsComponent);