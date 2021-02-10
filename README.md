# MySchtroumpf

Une application web developpe avec la MEAN stack, qui permet de creer un carnet de contact "Scftroumpf".

## Fonctionnalites

- (Inscription/Connexion/Déconnexion) du "Schtroumpf" par login/mot de passe 
- (Afficher/Modifier) ses informations (âge / famille / race / nourriture)
- (Ajouter/Supprimer) un ami "Schtroumpf"  à partir d'une liste de schtroumpfs déjà inscrits.

## Page Schtroumpf

A gauche de la page, il y a la liste des contacts "Schtroumpf" de l'utilisateur connecte et a gauche, il y a le detail des utilisateurs selectionnes.
Au dessus, les boutons permettent de `Ajouter`/`Supprimer` un "Schtroumpf" de sa liste de contact, editer son profile lorsque l'on se trouve dans sa propre page sinon
se rediriger directement sur sa page profile ou se deconnecter.

## Routes

### Cote serveur

L'adresse en local est : `http://localhost:8080/`
- '/auth' permet de se `connecter` ou se `deconnecter` en creant ou supprimant de la collection `authentifications`, le Schtroumpf.
- '/Schtroumpf' permet de creer un utilisateur, de consulter ses details, de les modifier.

### Cote client

L'adresse en local est : `http://localhost:4200/`
- '/' est la redirection vers page de connection
- '/inscription' est la redirection vers la page d'inscription
- '/Schtroumpf/:id' est la redirection vers le carnet de contact du Schtroumpf, ou `id` est l'id du Schtroumpf dont on consulte la page.


