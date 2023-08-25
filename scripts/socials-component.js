const socialsTemplate = document.createElement('template');

// local server
socialsTemplate.innerHTML = `
  <link rel="stylesheet" type="text/css" href="./styles/socials-styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="socials-component">
    <a href="https://www.instagram.com/blue_lightfoot/" target="_blank" class="fa fa-facebook fa-lg"></a>
    <a href="https://www.instagram.com/blue_lightfoot/" target="_blank" class="fa fa-instagram fa-lg"></a>
    <a href="https://www.instagram.com/blue_lightfoot/" target="_blank" class="fa fa-square fa-lg"></a>
  </div>
`;


// twitter, instagram, bluesky, tumblr, artstation
class SocialsComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(socialsTemplate.content.cloneNode(true));
  }
}

window.customElements.define('socials-component', SocialsComponent);