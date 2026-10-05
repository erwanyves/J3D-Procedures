---
procedure: Mise en œuvre imprimante béton J3D
version: 0.1
date: 2026-10-04
statut: ébauche
---

<!--
CONVENTIONS (lues par l'appli)
  #  Phase : <nom>        → une phase (écran de section)
  ## <n°> <intitulé>      → une étape (un écran)
  Lignes-clés sous une étape ou une phase :
    Type: action | contrôle | valeur | avertissement | minuterie | checklist | info
    Plage: <min>..<max> <unité>     (Type: valeur)
    Durée: <n> min                   (Type: minuterie, ou durée indicative de phase)
    Si non: <conduite à tenir>       (Type: contrôle)
    Si hors plage: <conduite>        (Type: valeur)
    Opérateurs: <n>
    Rôle: <machine | pompe | IHM | chariot | topo>
    Note: <texte affiché en encadré>
    Répéter: oui                     (Type: minuterie → alerte périodique)
  - [ ] élément                      → case à cocher (Type: checklist)
  ![légende](images/xxx.jpg)         → photo / schéma
  Texte libre                        → consigne affichée
  Les commentaires HTML comme celui-ci sont ignorés par l'appli :
  ils servent aux remarques de travail (« À VÉRIFIER »).
-->


# Phase : Logistique de transport jusqu'au chantier

## 1.1 Matériel à acheminer
Type: checklist
<!-- À COMPLÉTER : listing complet -->
- [ ] Container machine (sur Ampliroll) : pompe
- [ ] Container machine : trémie
- [ ] Container machine : imprimante
- [ ] Container machine : compresseur
- [ ] Container machine : box IHM, câbles
- [ ] Chariot élévateur frontal à fourches (2 t, hauteur sous fourche 5,5 m)
- [ ] Matériau (big bags)
- [ ] Groupe électrogène (20 kVA, sorties 16 A et 32 A)
- [ ] Tonne à eau (pas d'eau de pluie)
- [ ] Station totale
- [ ] 4 plaques sous patin
- [ ] Big bag + support pour purges de démarrage et de fin

## 1.2 Accessoires et outillage
Type: checklist
<!-- À COMPLÉTER : liste outillage -->
- [ ] Tuyau d'eau 25 m
- [ ] Masse
- [ ] Brosse de nettoyage
- [ ] EPI : casque à visière (ou casque + lunettes)
- [ ] EPI : gants
- [ ] EPI : chaussures de sécurité
Note: prévoir des outillages dédiés avec emplacements prévus.


# Phase : Cartographie
Rôle: topo

## 2.1 Définir le set de points de repérage
Type: action
À l'aide de la station totale, définir un set de points pour les repérages ultérieurs (multi-positionnements).

## 2.2 Identifier les positions de l'imprimante
Type: action
Identifier les différentes positions de l'imprimante.


# Phase : Implantation

## 3.1 Positionner l'imprimante
Type: action
Sortir l'imprimante du container et la positionner à son emplacement de travail (repère prédéfini).

## 3.2 Positionner pompe et trémie
Type: action
Sortir la pompe et la trémie du container et les positionner à proximité de l'imprimante.
Note: prévoir un accès protégé pour le chariot élévateur vers la trémie (chargement).

## 3.3 Positionner le groupe électrogène
Type: action

## 3.4 Positionner le big bag de purge
Type: action

## 3.5 Positionner l'IHM
Type: action
Choisir un emplacement avec vue sur la zone de travail.


# Phase : Réglage initial imprimante
Rôle: machine

## 4.1 Connecter l'imprimante
Type: action

## 4.2 Attendre le voyant orange clignotant
Type: contrôle
Le voyant orange clignote-t-il ?
Si non: ne pas poursuivre

## 4.3 Activer le déplacement
Type: action
Appuyer deux fois en haut à gauche de l'écran de contrôle.
Note: minimum 10 s entre les deux appuis.
<!-- À VÉRIFIER : les notes du 04/10 indiquaient 5 s entre appuis -->

## 4.4 Prépositionner les bras
Type: checklist
- [ ] Clavette de rotation sur bâti
- [ ] Clavette de bras
- [ ] Clavette de pied

## 4.5 Déployer les bras de l'imprimante
Type: action
Placer les plaques de répartition sous les patins.
![Plaques sous patin](images/station_05_plaques_patin.jpg)

## 4.6 Nivelage
Type: valeur
Plage: 0..13 cm
Si hors plage: repositionner la machine

## 4.7 Lever l'imprimante
Type: valeur
Chenilles à 48 cm du sol.
Plage: 48..48 cm

## 4.8 Mise à niveau de la machine
Type: contrôle
La machine est-elle de niveau ?
Si non: reprendre le réglage des patins


# Phase : Déploiement du bras
Rôle: machine
Durée: 15 min

## 5.1 Passer en mode crane
Type: action

## 5.2 Pousser le levier du milieu
Type: avertissement
Replier complètement le bras avant toute autre manœuvre.
![Levier du milieu](images/bras_02_levier_milieu.jpg)

## 5.3 Tirer le levier droit
Type: contrôle
Le bras décolle-t-il bien du patin ?
Si non: ARRÊT – ne pas poursuivre
![Levier droit](images/bras_03_levier_droit.jpg)

## 5.4 Monter à 45° minimum
Type: valeur
Plage: 45..90 °

## 5.5 Déplier
Type: action
Tirer le levier central.

## 5.6 Baisser l'ensemble
Type: action

## 5.7 Déclipser la tête
Type: action

## 5.8 Placer le tuyau
Type: action
Opérateurs: 2
Descendre la structure et placer le tuyau : un opérateur sur escabeau, un qui maintient le tuyau.

## 5.9 Rotation
Type: action
Rotation au levier rouge – toujours en dernier.

## 5.10 Éteindre le moteur
Type: action
<!-- À VÉRIFIER : dans l'ébauche, « Éteindre le moteur » précède la note sur la rotation ; ordre supposé ici : rotation puis arrêt moteur -->


# Phase : Configuration IHM
Rôle: IHM

## 6.1 Connecter l'IHM
Type: avertissement
Attention particulière au cordon de liaison.

## 6.2 Mode JIB – Boom
Type: valeur
Plage: 4995..5005

## 6.3 Mode JIB – JIB
Type: valeur
Plage: 3095..3105

## 6.4 Fermer les vannes et couper le moteur
Type: action
Fermer les 4 valves (1/4 de tour), puis couper le moteur.
<!-- À VÉRIFIER : les notes mentionnaient ensuite « Réactiver moteur » -->

## 6.5 Vérifier la verticalité de la tête
Type: contrôle
Offset moteur 4.
Si non: corriger l'offset


# Phase : Calage des points (Theodolite Positioning Assistant)
Rôle: topo
Durée: 20 min

## 7.1 Principe
Type: info
Le fichier source (CSV ou dxf) donne les coordonnées des points du plan. Il faut les caler avec les points relevés sur le terrain.

## 7.2 Choisir les points
Type: checklist
- [ ] Entre 3 et 10 points (5 en général)
- [ ] Points situés entre la machine et la zone d'impression
- [ ] Pas de figure symétrique
- [ ] 3 points connus + 2 points au hasard
- [ ] Au moins 3 m entre deux points

## 7.3 Relever le fichier Target
Type: avertissement
Digitalisation des points : ne pas changer d'altitude entre les mesures et ne pas modifier Z pendant une mesure.

## 7.4 Cohérence source / target
Type: contrôle
Le fichier source et le fichier target ont-ils le même nombre de points ? (1 point = 1 hauteur)
Si non: reprendre le relevé

## 7.5 Matérialiser les points
Type: checklist
- [ ] Sur bitume : clous de charpentier
- [ ] Sur béton : mires à coller (Leica) ou croix sur scotch
- [ ] 2 mires placées hors de portée (pas au sol)


# Phase : Air print
Rôle: IHM
Durée: 10 min

## 8.1 Transférer le G-code
Type: action
Upload du fichier.

## 8.2 Lancer l'Air print
Type: action
Activer le moteur, passer en mode Air print, puis lancer l'impression : positionnement, offset.

## 8.3 Surveillance
Type: avertissement
Approche lente – rester attentif aux collisions.

## 8.4 Tête sur big bag
Type: action
Positionner la tête sur le big bag pour la purge initiale.
<!-- À VÉRIFIER : 8.4 et 8.5 relèvent plutôt de la préparation impression que de l'Air print -->

## 8.5 Compresseur
Type: action
Connecter le compresseur à l'imprimante et le mettre en route.


# Phase : Préparation pompe
Rôle: pompe
Durée: 20 min

## 9.1 Montage
Type: action
Monter le malaxeur, puis la vis, puis la jaquette.
<!-- À VÉRIFIER : doublon partiel avec 13.2 à 13.4 (démarrage pompe) -->

## 9.2 Choisir la jaquette
Type: info
Violette (lilas) : petites pièces, petits mouvements, ~85 mm/s.
Verte : grandes pièces, grands mouvements, ~120 mm/s.
Note: le débit se règle en resserrant la jaquette (usure).

## 9.3 Vérifier les robinets de purge
Type: contrôle
Les robinets de purge sont-ils en bon état et en position ?
Si non: corriger avant de poursuivre


# Phase : Raccordement eau
Rôle: pompe

## 10.1 Brancher l'eau
Type: avertissement
Prise d'eau ou tonne à eau. Eau potable uniquement, pas d'eau de pluie. Compter ~150 L par tonne de matériau.

## 10.2 Test de pression réseau
Type: contrôle
Écran et débitmètre OK ?
Si non: vérifier l'alimentation en eau


# Phase : Préparation du tuyau
Rôle: pompe

## 11.1 Poser le tuyau
Type: action

## 11.2 Lubrifier le tuyau
Type: valeur
Barbotine.
Plage: 7..10 L


# Phase : Chargement trémie
Rôle: chariot
Opérateurs: 2

## 12.1 Amener le big bag
Type: action
Big bag avec chaussette, amené au chariot.

## 12.2 Ouvrir le big bag
Type: avertissement
2 personnes : une sur l'échelle, une sur le Fenwick. Dénouer la chaussette de préférence ; si cutter, il doit être attaché à l'utilisateur.

## 12.3 Joint de trémie
Type: contrôle
Après versement, le joint de trémie est-il toujours en place ?
Si non: ARRÊT – récupérer le joint avant de démarrer

## 12.4 Refermer le couvercle
Type: action


# Phase : Démarrage pompe
Rôle: pompe
Note: tête positionnée sur le big bag.

## 13.1 Enlever le bouchon
Type: action

## 13.2 Malaxeur horizontal
Type: action
Placer le malaxeur en position horizontale.

## 13.3 Vérifier la rotation de la vis
Type: contrôle
La vis tourne-t-elle librement en actionnant le malaxeur ?
Si non: ne pas démarrer

## 13.4 Placer jaquette et vis
Type: action
Placer la jaquette, puis la vis dans la jaquette (à fond).

## 13.5 Lancer la pompe
Type: action
Start pump, en contrôlant la viscosité.
Opérateurs: 2
Note: un opérateur à la pompe (écoulement), un à l'IHM (correction du débit).

## 13.6 Pression de pompage
Type: valeur
Plage: 7..9 bar
Si hors plage: corriger le débit à l'IHM

## 13.7 Remplissage
Type: minuterie
Durée: 8 min
Remplissage avec jaquette violette.
<!-- À VÉRIFIER : 350 l/min noté sur l'IHM – incohérent avec 5–15 l/min de la jaquette -->

## 13.8 Slug test
Type: valeur
Longueur de boudin visée 28 cm. Une fois atteinte, l'impression peut commencer.
Plage: 28..28 cm


# Phase : Contrôles pendant la marche
Type: info
<!-- Phase de référence consultable pendant l'impression, plus alertes périodiques -->

## 14.1 Écran
Type: checklist
- [ ] Débit (L/h)
- [ ] Voyant rouge
- [ ] Sonde laser OK

## 14.2 Manomètre et tuyau
Type: info
Contrôler le manomètre. Marcher sur le tuyau permet de vérifier s'il est vide ou plein.

## 14.3 Anomalies
Type: info
Moteur en zone rouge : pas assez ventilé.
Sonde humide déclenchée : bouchon ou laser encrassé.

## 14.4 Remplissage silo
Type: minuterie
Durée: 60 min
Répéter: oui
La pompe consomme ~1 t/h (1 big bag). Silo à remplir toutes les heures – accès à maintenir.
<!-- ALERTE à prévoir dans l'appli -->


# Phase : Purge tuyau
Rôle: pompe

## 15.1 Tête sur big bag
Type: action
Placer la tête d'impression sur le big bag et faire fonctionner.

## 15.2 Ajouter de l'eau
Type: avertissement
Ajouter de l'eau en entrée de pompe, modérément, pour ne pas créer de bouchon de sable.

## 15.3 Attendre la sortie liquide
Type: contrôle
La sortie de tête est-elle liquide et la pression inférieure à la pression réseau ?
Si non: continuer à attendre

## 15.4 Rétropompage
Type: action
Rétropompage sur la pompe : baisser la pression dans le tuyau jusqu'à pression négative.

## 15.5 Passage de la balle
Type: avertissement
Démonter le tuyau en sortie de pompe, le connecter au raccord d'eau avec la balle. Lunettes obligatoires.

## 15.6 Mise en pression d'eau
Type: contrôle
Bruit dans le tuyau (la balle avance) ?
Si non: voir note bouchon

## 15.7 Second passage
Type: action
Une fois la balle sortie, renouveler l'opération.
Note: si bouchon (la balle ne sort pas), introduire le tuyau sans embout pour débloquer. Cas critique : sauver la tête (déconnexion et nettoyage).


# Phase : Nettoyage pompe
Rôle: pompe

## 16.1 Démontage
Type: action
Démonter jaquette et vis, puis le malaxeur.

## 16.2 Bouchon
Type: action
Placer le bouchon pour éviter les remontées d'humidité dans la trémie.

## 16.3 Nettoyage des composants
Type: avertissement
Nettoyer tous les composants à la brosse. Pas de nettoyage sous pression.

## 16.4 Sortie de vidange
Type: contrôle
La sortie de vidange est-elle purgée ?
Si non: purger


# Phase : Démontage tuyau
Rôle: machine
Opérateurs: 2

## 17.1 Démonter le tuyau
Type: action
Bras en position basse, démonter le tuyau de la machine.

## 17.2 Anneaux de guidage
Type: action
Replier les anneaux de guidage.


# Phase : Repli machine
Rôle: machine

## 18.1 Replier la tête
Type: action

## 18.2 Remonter le bras
Type: action

## 18.3 Aligner avec la structure
Type: action
Levier rouge : aligner avec la structure de la machine (repère visuel sur bâti).

## 18.4 Remonter à 45° ou plus
Type: valeur
Levier droit.
Plage: 45..90 °

## 18.5 Replier
Type: action
Levier central.

## 18.6 Descendre
Type: action
Levier droit.

## 18.7 Anneaux de passage
Type: contrôle
Les anneaux de passage sont-ils bien repliés ?
Si non: les replier avant de descendre

## 18.8 Descendre les bras
Type: action
Au maximum – contrôle sur les bras arrière.

## 18.9 Replier les pattes
Type: action
Sens inverse du montage.


# Phase : Rangement

## 19.1 IHM
Type: action
Placer l'IHM dans le container.

## 19.2 Trémie
Type: action
Placer la trémie dans le container.

## 19.3 Machine
Type: avertissement
Amener la machine dans le container en mode thermique – attention aux émissions de gaz.

## 19.4 Inventaire
Type: checklist
- [ ] Présence de tous les éléments (voir 1.1 et 1.2)
- [ ] Matériel consigné (mis en sécurité) si zone non surveillée
