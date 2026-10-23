# Plateforme standard pour coopératives

Modules : `flotte/` (camions), `boutique/` (caisse et stock), `compta/` (comptabilité), `admin/` (espace administrateur), `index.html` (portail d'une coopérative).

## Mode 1 : une seule plateforme pour toutes les coopératives (`mode:"multi"`)
1. Un projet Firebase dédié. Règles : `regles/regles-plateforme.rules`.
2. `admin/` : créer l'administrateur (1re ouverture), puis chaque coopérative (nom, logo, couleur, modules, prix, échéance).
3. Donner au PCA le lien `…/standard/?org=identifiant` et le code d'activation.
4. Abonnement : « Paiement / prolonger ». À l'échéance, l'accès se bloque automatiquement (contrôle dans les règles Firestore).

## Mode 2 : une copie par coopérative (`mode:"solo"`)
1. Copier tout le dossier `standard/` (ex. `coops/nom-coop/`).
2. Créer un projet Firebase pour la coopérative ; règles : `regles/regles-<module>-copie.rules` (un module par projet, ou un projet par module).
3. Dans `config.js` : coller sa configuration Firebase et mettre `mode:"solo"`.
4. Le PCA personnalise nom, logo et couleur dans Outils → Personnaliser.
