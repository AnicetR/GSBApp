# Descriptif de la situation professionnelle

## Contexte

Le laboratoire Galaxy Swiss Bourdin (GSB) est issu de la fusion entre le géant américain Galaxy (spécialisé dans le secteur des maladies virales dont le SIDA et les hépatites) et le conglomérat européen Swiss Bourdin (travaillant sur des médicaments plus conventionnels), lui-même déjà union de trois petits laboratoires. En 2009, les deux géants pharmaceutiques ont uni leurs forces pour créer un leader de ce secteur industriel. L'entité Galaxy Swiss Bourdin Europe a établi son siège administratif à Paris. Le siège social de la multinationale est situé à Philadelphie, Pennsylvanie, aux Etats-Unis.

## Besoins

Dans le contexte GSB, la saisie des frais est gérée par sur un site Web. Le développement d'une application multi plateformes a donc été demandé de façon à simplifier cette saisie lorsque le visiteur est en déplacement.

# Descriptif de l'environnement de réalisation

## Environnement XAMPP :

- Base de données MySQL
- Serveur Apache

## Développement grâce à l'IDE PHPStorm :

- Langages frontend : HTML5, CSS3, Javascript
- Langages backend : PHP, SQL
- Utilisation de Ionic Framework (AngularJS & Phonegapp)
- Utilisation du framework backend Fat Free Framework
- Utilisation d'une gestion de version GIT dans PHPStorm avec Github
- Utilisation de Bower
- Utilisation de Gulp
- Utilisation de Ionic CLI

## Productions réalisées

Développement d'une application mobile hybride permettant au visiteur médical de gérer ses frais sans utiliser le site web.

# Remarques préalables

Le développement de cette application a été fait sous forme hybride. C'est-à-dire que l'appli est en fait une WebApp disposant des API natives des smartphones. Cette WebApp est ensuite encapsulée dans le format correspondant à la plateforme sur laquelle elle va fonctionner. Pour des applications très simples et ne nécessitant pas de beaucoup de ressources, cette méthode est très intéressante : avec une seule phase de développement, il est possible de publier l'application sur Android, iOS et Windows Phone.

# Pourquoi Ionic Framework ?

## Tableau comparatif

L'indicateur de comparaison est une note sur 10 que j'ai donnée arbitrairement en fonction de la simplicité d'utilisation et de sa présence ou non.

| **Framework** | **Look native** | **Prérequis** | **Communauté** | **Documentation** | **Outils** | **Moyenne** |
| --- | --- | --- | --- | --- | --- | --- |
| **Ionic** | 7/10 | AngularJS | 9/10 | 8/10 | - Ionic CLI- Ionic SDK- Ionic Lab | 8/10 |
| **OnsenUI** | 6/10 | AngularJS | 4/10 | 9/10 | Monaca Cloud
 IDE | 6.33/10 |
| **Framework 7** | 8/10 | HTML/CSS/JS | 6/10 | 8/10 | - | 7.33/10 |
| **React Native** | 8/10 | React | 8/10 | 5/10 | React Developper Tools | 7/10 |
| **jQuery Mobile** | 3/10 | jQuery | 8/10 | 5/10 | - | 5.33/10 |
| **Native Script** | 8/10 | Javascript | 5/10 | 9/10 | CLI | 7.3/10 |

## Conclusion

Après avoir effectué ces comparaisons, et quelques essais, Ionic Framework m'a paru être la meilleure solution. D'autant que je l'avais déjà utilisé lors d'un stage de 6 semaines en première année où j'avais pour mission de développer une application hybride pour un cabinet médical.

## Fonctionnement de l'accès aux APIs natives

![alt tag](http://puu.sh/p1w7h/54ca0b49f6.png)

La WebApp fait donc des appels à travers Cordova.js, ces appels sont envoyés à la partie native de l'application, qui elle fait les appels à l'API du téléphone.

 Ce système a ses limites, dans le cas de fortes sollicitations, de gros ralentissements peuvent survenir.

# GSB APP

## Architecture et organisation des fichiers

![alt tag](http://puu.sh/p1w1e/81ab04d89c.png)

- **Platforms :** Contient les fichiers necessaires au build des applications pour chaque plateforme.
  - **Platforms.json :** Fichier permettant de référencer les plateformes que cordova doit générer
- **Plugins :** Les plugins de l'application, son contenu est géré par le config.xml
- **Scss :** Le sass de l'application, compilé à chaque modification, le contenu est automatiquement envoyé dans le www/css
- **www :** Contient les fichiers relatifs à la WebApp, c'est le dossier de travail de l'appli.
  - **Lib :** Toutes les libs du projet, son contenu est généré par bower en fonction du contenu du fichier bower.json
  - **Js :** Les fichiers javascript du projet
    - **App.js :** fichier « père » de l'appli, il référence la configuration générale et les routes, ainsi que les controleurs.
    - **Controllers :** Les contrôleurs de l'application.
    - **Services :** Les services d'accès aux données de l'application.
  - **Templates :** Les templates de l'application.
  - **Index.html :** Le fichier d'accès à l'application, il inclut toutes les dépendances et scripts.
- **Config.xml :** la configuration de l'application
- **Ionic.config.json :** la configuration Ionic de l'application
- **Package.json :** La configuration node.js du projet, incluant ses dépendances.
- **Gulp.js :** La liste des tâches gulp du projet.
- **Bower.json :** Configuration du gestionnaire de packets Bower. Il inclut les librairies necessaires au fonctionnement de l'application.

## Normes de développement

Aucune norme de développement n'a été suivie pour ce projet, cependant, j'ai fait en sorte que le projet soit le plus lisible possible.

## Fonctionnalités

GSBAPP est une application mobile complémentaire au site GSBMVC. Il permet aux Visiteurs médicaux de consulter et d'éditer leurs frais forfaitisés/hors forfait du mois en cours sans passer par le site Web.
 Une fois que le visiteur a ajouté son numéro de téléphone comme étant autorisé sur le site Web, il peut avec l'application se connecter (une clé d'API est générée et un mot de passe pour la session en cours lui est envoyé par SMS). Il peut à tout moment retirer l'accès du téléphone à l'application depuis l'espace dédié sur le site Web.

## Documentation

La documentation technique (API) est disponible sous forme de site web à l'adresse suivante :

 [http://docs.gsbapp.anicetreglat.me](http://docs.gsbapp.anicetreglat.me/)
