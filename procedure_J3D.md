---
procedure: Mise en œuvre imprimante béton J3D
version: 0.3
date: 2026-10-09
statut: ébauche
---

<!--
CONVENTIONS (lues par l'appli)
  #  Phase : <nom>        → une phase (écran de section)
  ## <intitulé>           → une étape (un écran)
  Pas de numéros : les phases sont numérotées automatiquement dans l'ordre du fichier,
  les étapes s'exécutent dans l'ordre où elles sont écrites.
  Ajouter une phase ou une étape = insérer son titre à l'endroit voulu.
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
    Début: <n>   Fin: <n>            (niveaux d'ouverture, mode multi-opérateurs)
                                     sur une phase : la phase est une tâche ;
                                     sur une étape : l'étape devient une tâche indépendante.
                                     Une tâche s'ouvre quand toutes les tâches de Fin < son Début sont validées.
    Commentaire: obligatoire         (commentaire exigé en cas d'anomalie)
  - [ ] élément                      → case à cocher (Type: checklist)
  ![légende](images/xxx.jpg)         → photo / schéma
  Texte libre                        → consigne affichée
  Les commentaires HTML comme celui-ci sont ignorés par l'appli :
  ils servent aux remarques de travail (« À VÉRIFIER »).
-->


# Phase : Logistique de transport jusqu'au chantier

## Matériel à acheminer
Début: 1
Fin: 1
Type: checklist
<!-- À COMPLÉTER : listing complet -->
- [ ] Container machine : pompe
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

## Point accessoires et outillage
Début: 1
Fin: 1
Type: checklist
<!-- À COMPLÉTER : liste outillage -->
- [ ] Tuyau d'eau 25 m
- [ ] Masse
- [ ] Brosse de nettoyage (pompe, vis, raccords)
- [ ] Table (IHM)
- [ ] EPI : casque à visière (ou casque + lunettes)
- [ ] EPI : gants
- [ ] EPI : chaussures de sécurité
Note: prévoir des outillages dédiés avec emplacements prévus.


# Phase : Cartographie
Début: 1
Fin: 1
Rôle: topo

## Définir le set de points de repérage
Type: action
À l'aide de la station totale, définir un set de points pour les repérages ultérieurs (multi-positionnements).

## Identifier les positions de l'imprimante
Type: action
Identifier les différentes positions de l'imprimante.


# Phase : Implantation
Début: 2
Fin: 2

## Positionner l'imprimante
Type: action
Sortir l'imprimante du container et la positionner à son emplacement de travail (repère prédéfini).

## Positionner pompe et trémie
Type: action
Sortir la pompe et la trémie du container et les positionner à proximité de l'imprimante.
Note: prévoir un accès protégé pour le chariot élévateur vers la trémie (chargement).

## Positionner le groupe électrogène
Type: action

## Positionner le big bag de purge
Type: action

## Positionner l'IHM
Type: action
Choisir un emplacement avec vue sur la zone de travail.


# Phase : Réglage initial imprimante
Début: 3
Fin: 3
Rôle: machine

## Connecter l'imprimante
Type: action

## Attendre le voyant orange clignotant
Type: contrôle
Le voyant orange clignote-t-il ?
Si non: ne pas poursuivre

## Activer le déplacement
Type: action
Appuyer deux fois en haut à gauche de l'écran de contrôle.
Note: minimum 10 s entre les deux appuis.
<!-- À VÉRIFIER : les notes du 04/10 indiquaient 5 s entre appuis -->

## Prépositionner les bras
Type: checklist
- [ ] Clavette de rotation sur bâti
- [ ] Clavette de bras
- [ ] Clavette de pied

## Déployer les bras de l'imprimante
Type: action
Placer les plaques de répartition sous les patins.
![Plaques sous patin](images/station_05_plaques_patin.jpg)

## Nivelage
Type: Action
Plage: de 0..13 cm
Si hors plage: repositionner la machine

## Lever l'imprimante
Type: Action
Chenilles à 48 cm du sol.
Plage: 48..48 cm

## Mise à niveau de la machine
Type: contrôle
La machine est-elle de niveau ?
Si non: reprendre le réglage des patins. Ne jamais régler en descente


# Phase : Déploiement du bras
Début: 4
Fin: 4
Rôle: machine
Durée: 15 min

## Passer en mode crane
Type: action

## Pousser le levier du milieu
Type: avertissement
Replier complètement le bras avant toute autre manœuvre.
![Levier du milieu](images/bras_02_levier_milieu.jpg)

## Tirer le levier droit
Type: contrôle
Le bras décolle-t-il bien du patin ?
Si non: ARRÊT – ne pas poursuivre
![Levier droit](images/bras_03_levier_droit.jpg)

## Monter à 45° minimum
Type: valeur
Plage: 45..90 °

## Déplier
Type: action
Tirer le levier central.

## Baisser l'ensemble
Type: action

## Déclipser la tête
Type: action

## Placer le tuyau
Type: action
Opérateurs: 2
Descendre la structure et placer le tuyau : un opérateur sur escabeau, un qui maintient le tuyau.

## Rotation
Type: action
Rotation au levier rouge – toujours en dernier.

## Éteindre le moteur
Type: action
<!-- À VÉRIFIER : dans l'ébauche, « Éteindre le moteur » précède la note sur la rotation ; ordre supposé ici : rotation puis arrêt moteur -->


# Phase : Configuration IHM
Début: 5
Fin: 6
Rôle: IHM

## Connecter l'IHM
Type: avertissement
Attention particulière au cordon de liaison.

## Mode JIB – Boom
Type: valeur
Plage: 4995..5005

## Mode JIB – JIB
Type: valeur
Plage: 3095..3105

## Fermer les vannes et couper le moteur
Type: action
Fermer les 4 valves (1/4 de tour), puis couper le moteur.
<!-- À VÉRIFIER : les notes mentionnaient ensuite « Réactiver moteur » -->

## Vérifier la verticalité de la tête
Type: contrôle
Offset moteur 4.
Si non: corriger l'offset


# Phase : Calage des points (Theodolite Positioning Assistant)
Début: 5
Fin: 6
Rôle: topo
Durée: 20 min

## Principe
Type: info
Le fichier source (CSV ou dxf) donne les coordonnées des points du plan. Il faut les caler avec les points relevés sur le terrain.

## Choisir les points
Type: checklist
- [ ] Entre 3 et 10 points (5 en général)
- [ ] Points situés entre la machine et la zone d'impression
- [ ] Pas de figure symétrique
- [ ] 3 points connus + 2 points au hasard
- [ ] Au moins 3 m entre deux points

## Relever le fichier Target
Type: avertissement
Digitalisation des points : ne pas changer d'altitude entre les mesures et ne pas modifier Z pendant une mesure.

## Cohérence source / target
Type: contrôle
Le fichier source et le fichier target ont-ils le même nombre de points ? (1 point = 1 hauteur)
Si non: reprendre le relevé

## Matérialiser les points
Type: checklist
- [ ] Sur bitume : clous de charpentier
- [ ] Sur béton : mires à coller (Leica) ou croix sur scotch
- [ ] 2 mires placées hors de portée (pas au sol)


# Phase : Air print
Début: 7
Fin: 7
Rôle: IHM
Durée: 10 min

## Transférer le G-code
Type: action
Upload du fichier.

## Lancer l'Air print
Type: action
Activer le moteur, passer en mode Air print, puis lancer l'impression : positionnement, offset.

## Surveillance
Type: avertissement
Approche lente – rester attentif aux collisions.

## Tête sur big bag
Type: action
Positionner la tête sur le big bag pour la purge initiale.
<!-- À VÉRIFIER : « Tête sur big bag » et « Compresseur » relèvent plutôt de la préparation impression que de l'Air print -->

## Compresseur
Type: action
Connecter le compresseur à l'imprimante et le mettre en route.


# Phase : Préparation pompe
Début: 3
Fin: 7
Rôle: pompe
Durée: 20 min

## Montage
Type: action
Monter le malaxeur, puis la vis, puis la jaquette.
<!-- À VÉRIFIER : doublon partiel avec « Malaxeur horizontal » à « Placer jaquette et vis » (démarrage pompe) -->

## Choisir la jaquette
Type: info
Violette (lilas) : petites pièces, petits mouvements, ~85 mm/s.
Verte : grandes pièces, grands mouvements, ~120 mm/s.
Note: le débit se règle en resserrant la jaquette (usure).

## Vérifier les robinets de purge
Type: contrôle
Les robinets de purge sont-ils en bon état et en position ?
Si non: corriger avant de poursuivre


# Phase : Raccordement eau
Début: 2
Fin: 2
Rôle: pompe

## Brancher l'eau
Type: avertissement
Prise d'eau ou tonne à eau. Eau potable uniquement, pas d'eau de pluie. Compter ~150 L par tonne de matériau.

## Test de pression réseau
Type: contrôle
Écran et débitmètre OK ?
Si non: vérifier l'alimentation en eau


# Phase : Préparation du tuyau
Début: 8
Fin: 8
Rôle: pompe

## Poser le tuyau
Type: action

## Lubrifier le tuyau
Type: valeur
Barbotine.
Plage: 7..10 L


# Phase : Chargement trémie
Début: 2
Fin: 8
Rôle: chariot
Opérateurs: 2

## Amener le big bag
Type: action
Big bag avec chaussette, amené au chariot.

## Ouvrir le big bag
Type: avertissement
2 personnes : une sur l'échelle, une sur le Fenwick. Dénouer la chaussette de préférence ; si cutter, il doit être attaché à l'utilisateur.

## Joint de trémie
Type: contrôle
Après versement, le joint de trémie est-il toujours en place ?
Si non: ARRÊT – récupérer le joint avant de démarrer

## Refermer le couvercle
Type: action


# Phase : Démarrage pompe
Début: 9
Fin: 9
Rôle: pompe
Note: tête positionnée sur le big bag.

## Enlever le bouchon
Type: action

## Malaxeur horizontal
Type: action
Placer le malaxeur en position horizontale.

## Vérifier la rotation de la vis
Type: contrôle
La vis tourne-t-elle librement en actionnant le malaxeur ?
Si non: ne pas démarrer

## Placer jaquette et vis
Type: action
Placer la jaquette, puis la vis dans la jaquette (à fond).

## Lancer la pompe
Type: action
Start pump, en contrôlant la viscosité.
Opérateurs: 2
Note: un opérateur à la pompe (écoulement), un à l'IHM (correction du débit).

## Pression de pompage
Type: valeur
Plage: 7..9 bar
Si hors plage: corriger le débit à l'IHM

## Remplissage
Type: minuterie
Durée: 8 min
Remplissage avec jaquette violette.
<!-- À VÉRIFIER : 350 l/min noté sur l'IHM – incohérent avec 5–15 l/min de la jaquette -->

## Slug test
Type: valeur
Longueur de boudin visée 28 cm. Une fois atteinte, l'impression peut commencer.
Plage: 28..28 cm


# Phase : Contrôles pendant la marche
Début: 10
Fin: 10
Type: info
<!-- Phase de référence consultable pendant l'impression, plus alertes périodiques -->

## Écran
Type: checklist
- [ ] Débit (L/h)
- [ ] Voyant rouge
- [ ] Sonde laser OK

## Manomètre et tuyau
Type: info
Contrôler le manomètre. Marcher sur le tuyau permet de vérifier s'il est vide ou plein.

## Anomalies
Type: info
Moteur en zone rouge : pas assez ventilé.
Sonde humide déclenchée : bouchon ou laser encrassé.

## Remplissage silo
Type: minuterie
Durée: 60 min
Répéter: oui
La pompe consomme ~1 t/h (1 big bag). Silo à remplir toutes les heures – accès à maintenir.
<!-- ALERTE à prévoir dans l'appli -->


# Phase : Purge tuyau
Début: 11
Fin: 11
Rôle: pompe

## Tête sur big bag
Type: action
Placer la tête d'impression sur le big bag et faire fonctionner.

## Ajouter de l'eau
Type: avertissement
Ajouter de l'eau en entrée de pompe, modérément, pour ne pas créer de bouchon de sable.

## Attendre la sortie liquide
Type: contrôle
La sortie de tête est-elle liquide et la pression inférieure à la pression réseau ?
Si non: continuer à attendre

## Rétropompage
Type: action
Rétropompage sur la pompe : baisser la pression dans le tuyau jusqu'à pression négative.

## Passage de la balle
Type: avertissement
Démonter le tuyau en sortie de pompe, le connecter au raccord d'eau avec la balle. Lunettes obligatoires.

## Mise en pression d'eau
Type: contrôle
Bruit dans le tuyau (la balle avance) ?
Si non: voir note bouchon

## Second passage
Type: action
Une fois la balle sortie, renouveler l'opération.
Note: si bouchon (la balle ne sort pas), introduire le tuyau sans embout pour débloquer. Cas critique : sauver la tête (déconnexion et nettoyage).


# Phase : Nettoyage pompe
Début: 12
Fin: 12
Rôle: pompe

## Démontage
Type: action
Démonter jaquette et vis, puis le malaxeur.

## Bouchon
Type: action
Placer le bouchon pour éviter les remontées d'humidité dans la trémie.

## Nettoyage des composants
Type: avertissement
Nettoyer tous les composants à la brosse. Pas de nettoyage sous pression.

## Sortie de vidange
Type: contrôle
La sortie de vidange est-elle purgée ?
Si non: purger


# Phase : Démontage tuyau
Début: 13
Fin: 13
Rôle: machine
Opérateurs: 2

## Démonter le tuyau
Type: action
Bras en position basse, démonter le tuyau de la machine.

## Anneaux de guidage
Type: action
Replier les anneaux de guidage.


# Phase : Repli machine
Début: 14
Fin: 14
Rôle: machine

## Replier la tête
Type: action

## Remonter le bras
Type: action

## Aligner avec la structure
Type: action
Levier rouge : aligner avec la structure de la machine (repère visuel sur bâti).

## Remonter à 45° ou plus
Type: valeur
Levier droit.
Plage: 45..90 °

## Replier
Type: action
Levier central.

## Descendre
Type: action
Levier droit.

## Anneaux de passage
Type: contrôle
Les anneaux de passage sont-ils bien repliés ?
Si non: les replier avant de descendre

## Descendre les bras
Type: action
Au maximum – contrôle sur les bras arrière.

## Replier les pattes
Type: action
Sens inverse du montage.


# Phase : Rangement
Début: 15
Fin: 15

## IHM
Type: action
Placer l'IHM dans le container.

## Trémie
Type: action
Placer la trémie dans le container.

## Machine
Type: avertissement
Amener la machine dans le container en mode thermique – attention aux émissions de gaz.

## Inventaire
Type: checklist
- [ ] Présence de tous les éléments (voir « Matériel à acheminer » et « Point accessoires et outillage »)
- [ ] Matériel consigné (mis en sécurité) si zone non surveillée
