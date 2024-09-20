# Étapes pour créer un environnement de base

1. **Créer un projet de base** :
    - Configurez un projet avec toutes les dépendances et configurations de base que vous utilisez fréquemment.

2. **Initialiser un dépôt Git** :
    - Dans le dossier de votre projet de base, initialisez un dépôt Git :
        ```bash
        git init
        git add .
        git commit -m "Initial commit with base environment"
        ```

3. **Héberger le projet de base sur une plateforme Git** :
    - Poussez votre projet de base vers un service d'hébergement de code comme GitHub, GitLab, ou Bitbucket.

# Étapes pour cloner et démarrer un nouveau projet

1. **Cloner le projet de base** :
    - Clonez le dépôt de votre projet de base dans un nouveau dossier :
      ```bash
      git clone https://github.com/votre-utilisateur/projet-de-base.git nouveau-projet
      cd nouveau-projet
      ```

2. **Renommer le projet** :
    - Mettez à jour les informations spécifiques au nouveau projet, comme le nom du projet dans `composer.json` ou `package.json`.

3. **Installer les dépendances** :
    - Installez les dépendances Node.js :
      ```bash
      npm install
      ```
    - Installez les dépendances PHP avec Composer :
      ```bash
      composer install
      ```

4. **Configurer l'environnement** :
    - Copiez le fichier `.env.example` en `.env` et ajustez les variables d'environnement selon vos besoins.

5. **Initialiser un nouveau dépôt Git** :
    - Supprimez le dossier `.git` existant et initialisez un nouveau dépôt Git :
      ```bash
      rm -rf .git
      git init
      git add .
      git commit -m "Initial commit for new project"
      ```

# Exemple de script pour automatiser le clonage et la configuration

Vous pouvez créer un script Bash pour automatiser ces étapes :

```bash
#!/bin/bash

# Vérifier si le nom du nouveau projet est fourni
if [ -z "$1" ]; then
  echo "Usage: $0 <nom-du-nouveau-projet>"
  exit 1
fi

NOM_PROJET=$1
URL_REPO_BASE="https://github.com/votre-utilisateur/projet-de-base.git"

# Cloner le projet de base
git clone $URL_REPO_BASE $NOM_PROJET
cd $NOM_PROJET

# Supprimer l'historique Git existant
rm -rf .git

# Initialiser un nouveau dépôt Git
git init
git add .
git commit -m "Initial commit for $NOM_PROJET"

# Installer les dépendances
npm install
composer install

# Copier et configurer le fichier .env
cp .env.example .env
echo "N'oubliez pas de configurer le fichier .env selon vos besoins."

echo "Le projet $NOM_PROJET a été configuré avec succès."