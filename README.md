# Portfolio

Ce projet est un portfolio pour stocker et présenter vos créations.

## Prérequis

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- Extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) pour Visual Studio Code

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Désinstallez `live-server` si nécessaire :
   ```bash
   npm uninstall live-server
   npm audit fix
   npm audit
   ```

## Utilisation

### Démarrer le serveur localement

Pour démarrer le serveur localement, utilisez la commande suivante :
```bash
npm start
```
### Utiliser l'extension REST Client si 'live-server'  est désactivé


### Utilisation de l'extension REST Client

1. Installez l'extension REST Client dans Visual Studio Code :
   - Ouvrez Visual Studio Code.
   - Allez dans l'onglet des extensions (icône de carré avec quatre carrés plus petits).
   - Recherchez "REST Client" et installez l'extension développée par Huachao Mao.

2. Créez un fichier avec l'extension `.rest` ou `.http` dans votre projet. Par exemple, [`webclient.rest`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fepide%2FDesktop%2FPortFolio%2Fwebclient.rest%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\epide\Desktop\PortFolio\webclient.rest").

3. Ajoutez vos requêtes HTTP dans ce fichier. Voici un exemple de fichier [`webclient.rest`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fepide%2FDesktop%2FPortFolio%2Fwebclient.rest%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\epide\Desktop\PortFolio\webclient.rest") :

   ```http
   GET https://api.example.com/data
   Content-Type: application/json

   ###

   POST http://localhost:3000/data
   Content-Type: application/json

   {
       "key": "value"
   }
   ```

4. Cliquez sur "Send Request" au-dessus de chaque requête dans le fichier `.rest` pour les tester.

## Scripts disponibles

- `npm start` : Démarre le serveur localement.
- `npm build` : Construit le projet pour la production.

## Déploiement

Une fois que vous avez une URL de production, mettez à jour les requêtes dans votre fichier `.rest` pour pointer vers l'URL de production.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
```

Ce fichier `README.md` fournit des instructions claires sur la configuration et l'utilisation de votre projet, y compris l'utilisation de l'extension REST Client pour tester vos API.
