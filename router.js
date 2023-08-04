const route = () => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
}

const routes = { 
  '/videos.html': 'videos.html',
  '/imagens': 'imagens.html',
  '/contato.html': 'contato.html',
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  if (route) {
    const html = await fetch(route).then(data => data.text());
    document.getElementById('main-page').innerHTML = html;
  }
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();