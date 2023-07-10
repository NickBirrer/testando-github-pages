const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
}

// const routes = { // github pages
//   // 404: 'lembrar de fazer uma landing page',
//   '/testando-github-pages/': 'testando-github-pages/home.html',
//   '/testando-github-pages/videos.html': 'testando-github-pages/videos.html',
//   '/testando-github-pages/imagens': 'testando-github-pages/imagens.html',
//   '/testando-github-pages/contato.html': 'testando-github-pages/contato.html',
// }
const routes = { // local server
  // 404: 'lembrar de fazer uma landing page',
  '/': 'home.html',
  '/videos.html': 'videos.html',
  '/imagens': 'imagens.html',
  '/contato.html': 'contato.html',
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then(data => data.text());
  document.getElementById('main-page').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();