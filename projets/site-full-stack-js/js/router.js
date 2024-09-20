export function createRouter() {
    const routes = {
        '/': 'Bienvenue sur la page d\'accueil',
        '/about': 'À propos de nous',
        '/contact': 'Contactez-nous'
    };

    function init() {
        window.addEventListener('hashchange', () => {
            const path = window.location.hash.substring(1);
            document.getElementById('content').innerText = routes[path] || 'Page non trouvée';
        });
    }

    return {
        init
    };
}