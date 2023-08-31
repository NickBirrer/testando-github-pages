const socialsTemplate = document.createElement('template');

// local server
socialsTemplate.innerHTML = `
  <link rel="stylesheet" type="text/css" href="./styles/socials-styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="socials-component">
    <a href="https://twitter.com/bluethatsred?t=7To91GrJQUvOgF0zbBNuiA&s=09" target="_blank" class="fa fa-twitter fa-lg"></a>
    <a href="https://www.instagram.com/blue_lightfoot/" target="_blank" class="fa fa-instagram fa-lg"></a>
    <a href="https://bsky.app/profile/bluethatsred.bsky.social" target="_blank" class="custom-icon bluesky"></a>
    <a href="https://www.tumblr.com/bluelightfoot?source=share" target="_blank" class="fa fa-tumblr fa-lg"></a>
    <a href="https://www.artstation.com/barbararezei4" target="_blank" class="custom-icon artstation"></a>
  </div>
`;

class SocialsComponent extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(socialsTemplate.content.cloneNode(true));
  }
}

window.customElements.define('socials-component', SocialsComponent);