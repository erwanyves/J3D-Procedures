# Appli J3D Procédures – mode d'emploi

## Contenu du dossier
| Fichier | Rôle |
|---|---|
| `procedure_J3D.md` | **La procédure.** Seul fichier à modifier au quotidien. |
| `images/` | Photos et schémas appelés dans le MD (`![légende](images/xxx.jpg)`). |
| `index.html` | L'appli (écrans, parseur du MD, journal). |
| `sw.js` | Service worker : fonctionnement hors ligne. |
| `manifest.webmanifest`, `icons/` | Installation sur l'écran d'accueil. |
| `build.py` | Facultatif : met à jour la copie de secours du MD intégrée à `index.html`. |

## Mise en ligne (une seule fois) – GitHub Pages, gratuit
1. Créer un compte GitHub, puis un dépôt (ex. `j3d-procedures`).
2. *Add file → Upload files* : déposer tout le contenu de ce dossier (sans le dossier lui-même).
3. *Settings → Pages* : Source = *Deploy from a branch*, branche `main`, dossier `/ (root)`.
4. Après 1 à 2 minutes, l'appli est disponible à `https://<compte>.github.io/j3d-procedures/`.

Autres possibilités : Netlify (glisser-déposer le dossier), ou le NAS Synology (Web Station) **en HTTPS**.

## Installation sur le téléphone
1. Ouvrir l'adresse dans Chrome (Android), **avec réseau**.
2. Menu ⋮ → *Installer l'application* (ou bouton « Installer » sur l'accueil de l'appli).
3. Ouvrir une fois l'appli et parcourir la procédure en mode *Consulter* pour charger les images dans le cache.
4. Ensuite, tout fonctionne hors ligne.

## Modifier la procédure
1. Éditer `procedure_J3D.md` (sur GitHub : ouvrir le fichier → crayon ✎ → *Commit changes*).
2. Changer `version:` et `date:` dans l'en-tête.
3. Déposer les nouvelles images dans `images/`.
4. À la prochaine ouverture avec réseau, le téléphone récupère la nouvelle version.
   Une intervention déjà commencée reste sur la version avec laquelle elle a démarré.

Pour tester une modification **avant** publication : accueil → *Charger un fichier .md*.
L'accueil affiche les éventuelles erreurs de format avec leur numéro de ligne.

Si vous modifiez `index.html` ou `sw.js` : incrémenter `VERSION` en tête de `sw.js` (`j3d-v2`, …).

## Conventions du fichier MD
Rappelées en commentaire en tête de `procedure_J3D.md`. En résumé :
- `# Phase : nom` → phase ; `## n° intitulé` → étape
- `Type:` action | contrôle | valeur | avertissement | minuterie | checklist | info
- `Plage: 7..9 bar` (valeur) · `Durée: 8 min` (minuterie) · `Répéter: oui` (alerte périodique)
- `Si non:` / `Si hors plage:` → conduite à tenir affichée en rouge
- `Rôle:` · `Opérateurs:` · `Note:` · `- [ ] case` · `![légende](images/x.jpg)`
- `<!-- commentaire -->` → ignoré par l'appli

## Journal
- Chaque validation est horodatée (valeur, commentaire, anomalies forcées).
- Export **CSV** (partage Android ou téléchargement) et **Rapport PDF** (Imprimer → Enregistrer en PDF).
- Le journal est stocké dans le navigateur du téléphone : **exporter à chaque clôture**.
