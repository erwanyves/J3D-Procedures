---
procedure: Mise en œuvre imprimante béton J3D
version: 0.5
date: 2026-11-13
statut: ébauche – à relire
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
    Plage: <min>..<max> <unité>     (Type: valeur ; aussi « ≥ 2,5 bar », « 13 cm max »)
    Durée: <n> min                   (Type: minuterie, ou durée indicative de phase)
    Si non: <conduite à tenir>       (Type: contrôle)
    Si hors plage: <conduite>        (Type: valeur)
    Criticité: sécurité | machine | qualité
                                     sécurité = risque pour les personnes (contrôle bloquant)
                                     machine  = risque de casse ou de basculement
                                     qualité  = risque sur l'impression
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
  ils servent aux remarques de travail (« À VÉRIFIER ») et aux sources.

SOURCES (abréviations utilisées dans les commentaires)
  MAN = Manuel C3D V1.6 · FI = Formation Initiale 2026 · MEMO = Fiche MEMO · BD = Before delivery MXP
  MT1/MT2 = mode d'emploi pompe m-tec 1/2 · PS = Piccolo Silo · EC = Error Codes V3 · MAINT = plan de maintenance
  N = notes de formation de Yves · RF = rapport de formation

PHASAGE v0.4 (niveaux)
  1 Préparation du chantier (avant départ)
  2 Sécurité du site · Sortie du container · Cartographie
  3 Implantation
  4 Réglage initial imprimante · Mise en place du silo · Raccordement électrique · Montage pompe
  5 Raccordement eau · Déploiement du bras
  6 Configuration IHM
  7 Calage des points · Chargement silo (7 → 9)
  8 Air print
  9 Préparation impression
  10 Démarrage pompe
  11 Impression · Contrôles pendant la marche
  12 Purge et rétropompage
  13 Passages de balle · Nettoyage pompe
  14 Démontage tuyau et nettoyage tête
  15 Repli machine
  16 Rangement et consignation
-->


# Phase : Préparation du chantier
Note: à faire avant le départ, au bureau ou lors de la visite préalable.

## Prérequis du site
Début: 1
Fin: 1
Type: checklist
Criticité: sécurité
<!-- BD p.3-5 ; PS p.8, p.17 ; MAN p.49, p.78, p.84 ; MT1 p.22, p.25 ; RF p.1 -->
- [ ] Zone d'impression 14 × 14 m, 8 m de haut, sans obstacle, + périmètre sécurisé de 2 m
- [ ] Sol : portance vérifiée sous les patins (pas d'enrobé mince, pavés, remblai, bord de tranchée)
- [ ] Emplacement silo : sol plat ≥ 250 kN/m², à 4 m mini de tout talus ou tranchée
- [ ] Lignes électriques aériennes : tension connue, distance mini respectée
- [ ] Électricité : 380 V 16 A (3P+N+PE) machine, 380 V 32 A pompe, 230 V compresseur, différentiel type B 30 mA
- [ ] Eau potable : ≥ 4 bar, ≥ 1 000 L/h, raccord GEKA 3/4", température 5 à 30 °C
- [ ] Accès camion Ampliroll (8 m de hauteur libre pour poser le container) et chariot élévateur
- [ ] Matériau choisi selon la saison (Albert l'hiver, Marie à partir de mars)
- [ ] Prévisions météo : vent, orage, gel
<!-- À VÉRIFIER : groupe 20 kVA ≈ total des consommations (8 + 12 kVA) – aucune marge -->

## Matériel à acheminer
Début: 1
Fin: 1
Type: checklist
<!-- BD p.6, p.10 ; MAN p.33 ; MEMO p.8 ; PS p.17, p.19 ; RF p.1 -->
- [ ] Container : imprimante
- [ ] Container : pompe et silo Piccolo
- [ ] Container : compresseur
- [ ] Container : box IHM, câbles, arrêts d'urgence sans fil (verts)
- [ ] Chariot élévateur frontal à fourches (2 t, hauteur sous fourche 5,5 m)
- [ ] Transpalette
- [ ] Matériau (big bags sur palette, non ouverts)
- [ ] Dispositif de sécurité pour vidange de big bag dans le silo
- [ ] Groupe électrogène (sorties triphasées 16 A et 32 A + 230 V)
- [ ] Tonne à eau (pas d'eau de pluie)
- [ ] Station totale
- [ ] 4 plaques sous patin
- [ ] Poutres bois sous le silo (250–300 × 30 × 8 cm mini)
- [ ] Big bag + support pour purges de démarrage et de fin
- [ ] Zone de nettoyage : caillebotis, bac de décantation ou big bag filtrant, pistolet d'arrosage
- [ ] Protège-câbles au sol, cônes et rubalise
- [ ] Bac de rétention, bâche, housse de protection
- [ ] Extincteur et trousse de secours
- [ ] Armatures, coffrages, etc.

## Accessoires et outillage
Début: 1
Fin: 1
Type: checklist
<!-- À COMPLÉTER : liste outillage -->
- [ ] Tuyau d'eau 25 m (raccord GEKA)
- [ ] Masse
- [ ] Brosse de nettoyage (pompe, vis, raccords) (2)
- [ ] Balles de nettoyage (2)
- [ ] Table (IHM)
- [ ] Chaises pliantes (3)
- [ ] Tonnelle (en cas de pluie pour IHM)
- [ ] EPI : casque à visière (ou casque + lunettes)
- [ ] EPI : gants (et gants épais pour les pattes)
- [ ] EPI : chaussures de sécurité, vêtements de chantier, gilet haute visibilité
- [ ] EPI : protection auditive, masque anti-poussière (chargement)
Note: prévoir des outillages dédiés avec emplacements prévus.


# Phase : Sécurité du site
Début: 2
Fin: 2
<!-- MAN p.32-34, p.38, p.49-53 -->

## Météo
Type: contrôle
Criticité: sécurité
Vent inférieur à 10 m/s (rafales comprises), pas d'orage ni de brouillard ?
Si non: ARRÊT – ne pas déployer. En cours de travail : replier la machine.

## Lignes aériennes
Type: contrôle
Criticité: sécurité
Aucune ligne électrique aérienne dans le rayon d'action, ou distance mini respectée ?
Si non: ARRÊT – ne pas déployer

## Balisage
Type: action
Criticité: sécurité
Baliser la zone d'impression et le périmètre de 2 m (cônes, rubalise). Interdire l'accès.

## Secours et communication
Type: checklist
- [ ] Extincteur et trousse de secours accessibles
- [ ] Numéros d'urgence affichés
- [ ] Superviseur désigné, signaux de communication convenus
- [ ] Opérateurs formés, attestations sur soi


# Phase : Sortie du container
Début: 2
Fin: 2
Rôle: machine
Opérateurs: 2
<!-- FI p.20-21, p.25 ; MAN p.40, p.69-70 ; MEMO p.3, p.11-12 -->

## Sortir le silo
Type: action
Sortir le silo au chariot élévateur, en premier.

## Préparer la sortie
Type: checklist
- [ ] Rampes posées et goupillées
- [ ] 4 points d'ancrage de la machine retirés
- [ ] Passage dégagé

## Sortir la machine
Type: avertissement
Criticité: sécurité
Sortie en mode thermique (diesel) : gaz d'échappement, ventiler. Un pilote, un guide. Coup de klaxon, vitesse réduite, bras et pattes repliés. Jamais sur la voie publique.

## Repasser en mode électrique
Type: action
Une fois la machine sortie, remettre le sélecteur à l'arrière sur « motor » (électrique).

## Grutage (si nécessaire)
Type: avertissement
Criticité: sécurité
Contacter le SAV avant tout levage. Machine repliée, pattes en position « Levage » goupillées, levage par les 4 points ensemble, élingues de plus de 1,5 m (angle 30°), crochets orientés de l'intérieur vers l'extérieur. Personne sous la charge.


# Phase : Cartographie
Début: 2
Fin: 2
Rôle: topo

## Définir le set de points de repérage
Type: action
À l'aide de la station totale, définir un set de points pour les repérages ultérieurs (multi-positionnements).

## Identifier les positions de l'imprimante
Type: action
Identifier les différentes positions de l'imprimante.

## Matérialiser les points
Type: checklist
- [ ] Sur bitume : clous de charpentier
- [ ] Sur béton : mires à coller (Leica) ou croix sur scotch
- [ ] 2 mires placées hors de portée (pas au sol)
- [ ] Au moins 3 points atteignables par le bras depuis chaque position


# Phase : Implantation
Début: 3
Fin: 3

## Positionner l'imprimante
Type: action
Criticité: machine
Amener l'imprimante à son emplacement de travail (repère prédéfini), sur sol stable.

## Positionner pompe et silo
Type: action
Positionner la pompe et le silo Piccolo à proximité de l'imprimante.
Note: prévoir un accès protégé pour le chariot élévateur vers le silo (chargement).

## Positionner le groupe électrogène
Type: action
À l'écart de la zone d'impression, échappement orienté hors des postes de travail.

## Zone de purge et de nettoyage
Type: action
Positionner le big bag de purge, le caillebotis et le bac de décantation.

## Positionner l'IHM
Type: action
Choisir un emplacement avec vue sur la zone de travail, à l'abri du soleil direct (écran : −10 à 55 °C).

## Protéger les câbles
Type: action
Protège-câbles sur les passages (câbles IHM et puissance).


# Phase : Réglage initial imprimante
Début: 4
Fin: 4
Rôle: machine
<!-- MAN p.25, p.38-39, p.77-85, p.129-133 ; FI p.21 ; MEMO p.3, p.6, p.14-15 -->

## Inspection avant démarrage
Type: checklist
Criticité: machine
- [ ] Pas de fuite de gazole ni d'huile
- [ ] Niveaux : carburant, liquide de refroidissement, huile hydraulique
- [ ] Filtre à air, câblage, flexibles en bon état
- [ ] Leviers au neutre
- [ ] Clé de sécurité retirée, arrêts d'urgence réarmés

## Prépositionner les pattes
Type: checklist
Criticité: sécurité
Moteur arrêté, pour chacune des 4 pattes :
- [ ] Goupille de rotation sur bâti
- [ ] Goupille de patte (caisson sorti jusqu'à l'autocollant « MaxiPrinter »)
- [ ] Goupille de pied et snap pin
Note: gants épais. Personne sous les pattes.

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
<!-- Arbitré par Yves le 2026-11-09 : 10 s (les notes du 04/10 indiquaient 5 s) -->

## Plaques sous patins
Type: action
Placer les plaques de répartition sous les patins.
![Plaques sous patin](images/station_05_plaques_patin.jpg)

## Nivelage
Type: valeur
Criticité: machine
Dénivelé du terrain sous la machine.
Plage: 0..13 cm
Si hors plage: repositionner la machine

## Descendre les pattes
Type: action
Moteur au ralenti : bouton « ALL » jusqu'au premier contact, puis réglage patte par patte jusqu'à ce que les 4 patins touchent, puis « Home ».
Note: personne dans la trajectoire des pattes. Commandes simultanées autorisées : pattes 2+3 ou 1+4 uniquement.

## Lever l'imprimante
Type: contrôle
Criticité: machine
Bouton « ALL » : chenilles à environ 48 cm (480 mm) du sol ?
Si non: reprendre la levée

## Mise à niveau de la machine
Type: contrôle
Criticité: machine
Bulle centrée, inclinaison inférieure à 3° (pas de buzzer) ?
Si non: reprendre le réglage des patins. Toujours régler en remontant (flèche vers le bas), jamais en descendant.

## Test des sécurités
Type: checklist
Criticité: sécurité
- [ ] Arrêt d'urgence : le moteur s'arrête
- [ ] Klaxon
- [ ] Leviers testés à vide, retour au neutre
- [ ] Tension des chenilles (jeu de 5 à 10 mm)

## Activer l'autolevel
Type: action
Bras complètement replié.
<!-- À VÉRIFIER : MAN p.29 « bras replié, avant de déployer le bras » ; MEMO p.6 « avant l'Air print » -->


# Phase : Mise en place du silo
Début: 4
Fin: 4
Rôle: chariot
Opérateurs: 2
<!-- PS p.8-10, p.14-21 ; FI p.29-32 -->

## Inspection du silo
Type: contrôle
Criticité: sécurité
Pieds, entretoises, fourreaux sans bosse, fissure, déformation ni corrosion ?
Si non: ARRÊT – ne pas lever ni charger le silo

## Assise
Type: checklist
Criticité: sécurité
- [ ] Poutres bois sous les pieds, sol plat ≥ 250 kN/m²
- [ ] À 4 m mini de tout talus, poutres non parallèles au bord
- [ ] Pieds en position de travail, goupilles verrouillées

## Levage du silo
Type: avertissement
Criticité: sécurité
Engin de 3 000 kg mini, silo vertical, uniquement par les points prévus. Personne dans la zone.

## Raccorder silo et pompe
Type: checklist
- [ ] Couvercle de transfert en place
- [ ] Prise électrique, anneau et câble capteur branchés
- [ ] Clapet du silo fermé, condensation vidangée
- [ ] Bouchon d'évent libre


# Phase : Raccordement électrique
Début: 4
Fin: 4
Rôle: pompe
<!-- BD p.3 ; MT1 p.22, p.42, p.57, p.77 ; MT2 p.115 ; MEMO p.19 -->

## État des câbles
Type: contrôle
Criticité: sécurité
Câbles, fiches et accouplements en bon état ?
Si non: remplacer avant de brancher

## Brancher
Type: checklist
- [ ] Commutateur principal de la pompe sur « 0 » avant de brancher
- [ ] Machine : 380 V 16 A
- [ ] Pompe : 380 V 32 A, différentiel type B 30 mA
- [ ] Compresseur : 230 V
- [ ] 3 phases présentes (sinon erreur 000140)

## Mise sous tension pompe
Type: contrôle
L'écran de la pompe affiche « ---- » environ 15 s, puis « 0 » ?
Si non: contrôler fusibles, câble et raccords


# Phase : Montage pompe
Début: 4
Fin: 4
Rôle: pompe
Durée: 20 min
<!-- MT1 p.43, p.50, p.65-66, p.78 ; MT2 p.122, p.139 ; FI p.28 -->

## Choisir la jaquette
Type: info
Grise (0/3 mm) : 2 à 6 L/min.
Violette (lilas, 0/4 mm) : 4 à 11 L/min – petites pièces, petits mouvements, ~85 mm/s.
Verte (0/4 mm) : 6 à 15 L/min – grandes pièces, grands mouvements, ~120 mm/s.
Note: le débit se règle en resserrant la jaquette (usure).

## Enlever le bouchon
Type: action

## Malaxeur
Type: action
Monter le malaxeur et le placer en position horizontale.

## Jaquette et vis
Type: action
Placer la jaquette, puis la vis dans la jaquette (à fond), sans inclinaison. Serrer barres et coins.

## Tourillon
Type: contrôle
Criticité: machine
Tourillon conique et manchon propres et secs (jamais graissés) ?
Si non: nettoyer et sécher

## Robinets de purge
Type: contrôle
Criticité: machine
Robinets de purge de la pompe à eau refermés ?
Si non: les fermer avant de poursuivre

## Sonde humide
Type: action
Sonde propre, placée dans le support droit.

## Vérifier la rotation de la vis
Type: contrôle
Criticité: machine
La vis tourne-t-elle librement en actionnant le malaxeur ?
Si non: ne pas démarrer


# Phase : Raccordement eau
Début: 5
Fin: 5
Rôle: pompe
<!-- BD p.3 ; MT1 p.25-27, p.51 ; MT2 p.112-114 -->

## Brancher l'eau
Type: avertissement
Criticité: qualité
Prise d'eau ou tonne à eau. Eau potable uniquement, pas d'eau de pluie. Tuyau purgé d'air.

## Pression d'eau
Type: valeur
Criticité: machine
Plage: ≥ 2,5 bar
Si hors plage: vérifier l'alimentation en eau et le tamis d'arrivée (écran pompe « 1 » = pression d'eau insuffisante)

## Régler le débit d'eau
Type: action
Criticité: qualité
Mode bimanuel, tube de malaxage écarté, bac de récupération dessous : régler à la vanne de précision.
Note: consigne : 350 L/h (affichée à l'IHM en L/h).


# Phase : Déploiement du bras
Début: 5
Fin: 5
Rôle: machine
Opérateurs: 2
Durée: 15 min
<!-- MAN p.53-54, p.86-92, p.102 ; FI p.23-24 ; MEMO p.3, p.6 -->

## Avant toute manœuvre
Type: checklist
Criticité: sécurité
- [ ] Clé de sécurité sur OFF
- [ ] Pattes déployées et goupillées
- [ ] Personne dans le rayon du bras, pas d'obstacle
- [ ] Un opérateur aux commandes, un qui surveille la trajectoire

## Passer en mode crane
Type: action
Bouton « Crane » vert, puis démarrer le moteur. Mode MAIN sélectionné.
![Pupitre de commande – leviers](images/pupitre_leviers.jpg)

## Pousser le levier du milieu
Type: avertissement
Criticité: machine
Replier complètement le bras (mise en pression du vérin) avant toute autre manœuvre.
![Levier du milieu](images/bras_02_levier_milieu.jpg)
<!-- À VÉRIFIER : correspond à la « mise en pression du vérin de jib » du manuel (MAN p.87, MEMO p.6) -->

## Tirer le levier droit
Type: contrôle
Criticité: machine
Le bras décolle-t-il bien du patin ?
Si non: ARRÊT – ne pas poursuivre
![Levier droit](images/bras_03_levier_droit.jpg)

## Monter à 45° minimum
Type: valeur
Criticité: machine
Plage: 45..90 °
Note: jamais de mouvement du jib ni de rotation sous 40°.

## Déplier
Type: action
Tirer le levier central. Mouvements lents : la tête et le jib ne doivent pas toucher la machine.

## Baisser l'ensemble
Type: action

## Déclipser la tête
Type: avertissement
Criticité: sécurité
Appuyer sur le verrou de l'axe 4 et soutenir le poids de la tête à deux. Gants.

## Placer le tuyau
Type: action
Opérateurs: 2
Descendre la structure et placer le tuyau dans chaque guide : un opérateur sur plateforme stable (tuyau à hauteur d'épaule), un qui maintient le tuyau. Gants.
Note: guides de tuyau ouverts (tige, position verticale, tige reverrouillée).

## Rotation
Type: action
Rotation au levier rouge – toujours en dernier.


# Phase : Configuration IHM
Début: 6
Fin: 6
Rôle: IHM
<!-- MAN p.27, p.29, p.91-92 ; FI p.24, p.45-46 ; MEMO p.6, p.15 -->

## Connecter l'IHM
Type: avertissement
Attention particulière au cordon de liaison. Réarmer au démarrage de l'IHM.

## Télescopique Boom
Type: valeur
Moteur en marche, mode JIB : déployer au levier en lisant la longueur à l'IHM.
Plage: 4995..5005 mm
Note: si le buzzer sonne : levier au neutre et arrêt.

## Télescopique JIB
Type: valeur
Plage: 3095..3105 mm

## Vannes du mât et moteur
Type: action
Fermer les 4 valves (1/4 de tour), puis couper le moteur.
<!-- EN ATTENTE D'ARBITRAGE (Yves) : FI p.24 fait OUVRIR les vannes en mode JIB ; MEMO p.15 : OPEN replié / CLOSE déployé ; MAN p.92 : fermer juste après le télescopage -->

## Vérifier la verticalité de la tête
Type: contrôle
Criticité: qualité
Offset moteur 4.
Si non: corriger l'offset

## Paramètres d'impression
Type: checklist
Criticité: qualité
- [ ] Accélération : 3
- [ ] Corner radius : 80 mm
- [ ] Pump pre-run : 2,0 s
- [ ] Move post-run : 2,0 s
- [ ] Inclinomètre de tête actif

## Compteur horaire
Type: valeur
Relever le compteur horaire affiché à l'IHM (suivi de la maintenance).
Plage: ≥ 0 h


# Phase : Calage des points (Theodolite Positioning Assistant)
Début: 7
Fin: 7
Rôle: topo
Durée: 20 min
<!-- MAN p.98 ; MEMO p.6 -->

## Principe
Type: info
Le fichier source (CSV ou dxf) donne les coordonnées des points du plan. Il faut les caler avec les points relevés sur le terrain, machine en position d'impression (télescopes à 5000 / 3100).

## Choisir les points
Type: checklist
- [ ] Entre 3 et 10 points (5 en général)
- [ ] Points situés entre la machine et la zone d'impression, atteignables par le bras
- [ ] Pas de figure symétrique
- [ ] 3 points connus + 2 points au hasard
- [ ] Au moins 3 m entre deux points

## Relever le fichier Target
Type: avertissement
Digitalisation des points : ne pas changer d'altitude entre les mesures et ne pas modifier Z pendant une mesure.

## Cohérence source / target
Type: contrôle
Criticité: qualité
Le fichier source et le fichier target ont-ils le même nombre de points ? (1 point = 1 hauteur)
Si non: reprendre le relevé

## Z offset
Type: action
Criticité: qualité
Approcher la tête du sol, relever Z et le saisir dans le menu Offset (« Set Z offset »).


# Phase : Chargement silo
Début: 7
Fin: 9
Rôle: chariot
Opérateurs: 2
<!-- PS p.18-21 ; BD p.6 ; MT2 p.121 -->

## Amener le big bag
Type: action
Big bag avec chaussette, amené au chariot. Masque anti-poussière.

## Préparer le silo
Type: checklist
- [ ] Clapet fermé, condensation vidangée
- [ ] Bouchon d'évent retiré, évent libre
- [ ] Couvercle ouvert

## Vider le big bag
Type: avertissement
Criticité: sécurité
Big bag suspendu au dispositif de sécurité pendant toute la vidange. Personne sous la charge. Dénouer la chaussette de préférence ; si cutter, il doit être attaché à l'utilisateur.
<!-- MODIFIÉ : la v0.3 prévoyait une personne sur l'échelle et une sur le Fenwick, contraire à PS p.19 -->

## Joint du couvercle
Type: contrôle
Criticité: machine
Après versement, le joint du couvercle est-il toujours en place ?
Si non: ARRÊT – récupérer le joint avant de démarrer

## Refermer le couvercle
Type: action
Refermer le couvercle et remettre le bouchon d'évent.


# Phase : Air print
Début: 8
Fin: 8
Rôle: IHM
Durée: 10 min
<!-- MAN p.99-100 ; MEMO p.6-7, p.24 -->

## Pompe déconnectée
Type: contrôle
Criticité: machine
Icône pompe rouge et message « Air Print » affiché ?
Si non: déconnecter la pompe avant de poursuivre

## Zone dégagée
Type: contrôle
Criticité: sécurité
Personne dans la zone, chemin du tuyau libre, une main sur l'arrêt d'urgence ?
Si non: ARRÊT – dégager la zone

## Transférer le G-code
Type: action
Upload du fichier.

## Lancer l'Air print
Type: action
Activer le moteur, passer en mode Air print, puis lancer : positionnement, offset.

## Surveillance
Type: checklist
Criticité: qualité
- [ ] Approche lente, pas de collision
- [ ] Z offset constant sur toute la première couche
- [ ] Pas d'erreur de portée (sinon erreur 00006X)
- [ ] Fichier bien placé par rapport au chantier
- [ ] 5e axe orienté dans le sens du déplacement
- [ ] Tuyau sans contact


# Phase : Préparation impression
Début: 9
Fin: 9
Opérateurs: 2
<!-- BD p.6 ; MT2 p.111 ; N -->

## Tête sur big bag
Type: action
Positionner la tête sur le big bag pour la purge initiale.

## Compresseur
Type: action
Connecter le compresseur à l'imprimante et le mettre en route.

## Tuyau propre
Type: contrôle
Criticité: qualité
Le tuyau est-il propre ?
Si non: passer une balle poussée à l'eau claire avant le matériau

## Lubrifier le tuyau
Type: valeur
Barbotine versée dans la pompe montée (local, marche avant).
Plage: 7..10 L


# Phase : Démarrage pompe
Début: 10
Fin: 10
Rôle: pompe
Note: tête positionnée sur le big bag.
<!-- FI p.30-31 ; MT1 p.42, p.44 ; MT2 p.115 ; PS p.21 -->

## Ouvrir le clapet du silo
Type: action
Note: ne jamais mettre le vibreur en marche avec un silo vide ou presque vide.

## Passer en commande à distance
Type: contrôle
Sélecteur « REMOTE », puis « BAS », puis « CONVOYER » : l'afficheur indique-t-il « 6 » ?
Si non: voir le code affiché (☰ → Dépannage)

## Tester le différentiel
Type: contrôle
Criticité: sécurité
Moteur en marche, le différentiel déclenche-t-il au test ?
Si non: ARRÊT – ne pas travailler sans protection différentielle

## Lancer la pompe
Type: action
Start pump, en contrôlant la viscosité. Lunettes ou visière.
Opérateurs: 2
Note: un opérateur à la pompe (écoulement), un à l'IHM (correction du débit).

## Pression de pompage
Type: valeur
Criticité: qualité
Plage: 7..9 bar
Si hors plage: corriger le débit à l'IHM

## Débit d'eau
Type: contrôle
Criticité: qualité
Le débit d'eau affiché à l'IHM est-il d'environ 350 L/h ?
Si non: régler le débit d'eau

## Remplissage
Type: minuterie
Durée: 8 min
Remplissage avec jaquette violette.

## Slug test
Type: contrôle
Criticité: qualité
Le boudin atteint-il environ 28 cm ? Une fois atteint, l'impression peut commencer.
Si non: ajuster le débit d'eau et recommencer


# Phase : Impression
Début: 11
Fin: 11
Rôle: IHM
<!-- MAN p.104 ; N ; FI p.14 -->

## Avant de lancer
Type: checklist
Criticité: sécurité
- [ ] Une personne en permanence devant l'IHM
- [ ] Opérateur près de la machine derrière la tête
- [ ] Personne dans la zone d'impression
- [ ] Tête repositionnée au-dessus de la zone de travail

## Lancer l'impression
Type: action
Sélectionner le fichier, réduire la vitesse au départ, lancer (Play).

## Premières couches
Type: action
Criticité: qualité
Première couche à 2 cm. Ajuster pre-run et post-run pendant les 3 premières couches.

## Repères de vitesse
Type: info
Courant : 70 à 100 mm/s. Ligne droite : 150 mm/s. Tracé sinueux : 50 mm/s. Maximum : 250 mm/s.
Couche : largeur 40 à 80 mm, hauteur 15 à 30 mm. Débord 10 % maxi.
Sens d'impression : horaire.

## Interventions dans la zone
Type: avertissement
Criticité: sécurité
Armatures, agrafes, échafaudage : uniquement machine en pause.


# Phase : Contrôles pendant la marche
Début: 11
Fin: 11
Type: info
<!-- Phase de référence consultable pendant l'impression, plus alertes périodiques. MAN p.29, p.51-53, p.96, p.104 ; MT1 p.42 ; MT2 p.119-120 ; N -->

## Écran
Type: checklist
- [ ] Débit d'eau (L/h)
- [ ] Voyant rouge
- [ ] Sonde laser OK
- [ ] Pression, température et consistance du matériau (aspect du cordon)

## Alertes IHM
Type: info
Matériau > 50 °C (pompe ou tête). Huile hydraulique > 75 °C (> 80 °C : ralenti puis arrêt). Pression d'huile < 120 bar. Filtre à huile colmaté (000150). Pompe > 90 % pendant plus de 5 min.

## Manomètre et tuyau
Type: info
Contrôler le manomètre. Marcher sur le tuyau permet de vérifier s'il est vide ou plein.

## Anomalies
Type: info
Moteur en zone rouge : pas assez ventilé.
Sonde humide déclenchée : bouchon ou laser encrassé.
Codes d'erreur : ☰ → Dépannage.

## Vent
Type: avertissement
Criticité: sécurité
Rafales ≥ 10 m/s ou orage : arrêter et replier.

## Pauses
Type: avertissement
Criticité: machine
Plus de 10 min : pompe sur « O ». Plus de 30 min (ou forte chaleur) : vider le tuyau, commutateur principal sur « 0 ». Arrêt matériau : 50 min maximum. Au redémarrage, vérifier que le bras n'a pas dérivé.

## Remplissage silo
Type: minuterie
Durée: 60 min
Répéter: oui
La pompe consomme ~1 t/h (1 big bag). Silo à remplir toutes les heures – accès à maintenir.

## Sonde humide
Type: minuterie
Durée: 150 min
Répéter: oui
Nettoyer la sonde humide toutes les 2 à 3 h, sans abîmer l'isolant de la pointe.


# Phase : Purge et rétropompage
Début: 12
Fin: 12
Rôle: pompe
Opérateurs: 2
<!-- MAN p.105-108 ; FI p.47 ; MT2 p.124-125 -->

## Tête sur big bag
Type: action
Placer la tête d'impression sur le big bag et faire fonctionner.

## Vider le silo
Type: action
Pomper sans malaxer pour vider le matériau restant.

## Ajouter de l'eau
Type: avertissement
Ajouter de l'eau en entrée de pompe, modérément, pour ne pas créer de bouchon de sable.
<!-- À VÉRIFIER : MT2 p.138 – la partie dosage se nettoie uniquement à sec : préciser où l'eau est ajoutée -->

## Attendre la sortie liquide
Type: contrôle
La sortie de tête est-elle liquide et la pression inférieure à la pression réseau ?
Si non: continuer à attendre

## Rétropompage
Type: valeur
Criticité: sécurité
Rétropompage sur la pompe jusqu'à pression quasi nulle dans le tuyau.
Plage: 0..0,1 bar
Si hors plage: ARRÊT – ne pas ouvrir le tuyau sous pression

## Pompe à l'arrêt
Type: contrôle
Criticité: sécurité
Pompe sur « O », commutateur principal sur « 0 », pression nulle au manomètre ?
Si non: ne pas désaccoupler


# Phase : Passages de balle
Début: 13
Fin: 13
Rôle: pompe
Opérateurs: 2
<!-- MAN p.107-111 ; MT2 p.124, p.136 -->

## Ouvrir le manchon pneumatique
Type: action
Via l'IHM.

## Passage de la balle
Type: avertissement
Criticité: sécurité
Démonter le tuyau en sortie de pompe (sous une bâche, visage détourné), le connecter au raccord d'eau avec la balle. Lunettes obligatoires. Extrémité du tuyau jamais dirigée vers quelqu'un.

## Mise en pression d'eau
Type: contrôle
Bruit dans le tuyau (la balle avance) ?
Si non: voir note bouchon

## Second passage
Type: action
Une fois la balle sortie, arrêter le surpresseur et fermer l'eau, puis renouveler l'opération.
Criticité: sécurité
Note: si bouchon (la balle ne sort pas), introduire le tuyau sans embout pour débloquer. Cas critique : sauver la tête (déconnexion et nettoyage).

## Vider le tuyau
Type: action
Purger l'eau du tuyau.


# Phase : Nettoyage pompe
Début: 13
Fin: 13
Rôle: pompe
<!-- MT1 p.35, p.42 ; MT2 p.109, p.123, p.133, p.136-138 ; MAINT -->

## Consignation
Type: contrôle
Criticité: sécurité
Commutateur principal sur « 0 » et câble débranché ?
Si non: ARRÊT – ne pas ouvrir la pompe

## Démontage
Type: action
Démonter jaquette et vis, puis le malaxeur.

## Nettoyage des composants
Type: avertissement
Criticité: machine
Nettoyer tous les composants à la brosse. Pas de nettoyage haute pression. Partie dosage uniquement à sec. Pièce interne : capuchon fermé, eau à basse pression.
Note: pompe à eau : jamais plus d'1 min robinet fermé (risque de brûlure).

## Sonde et capteurs
Type: action
Nettoyer la sonde humide (capteur de trémie) et l'optique de la caméra.

## Bouchon
Type: action
Placer le bouchon pour éviter les remontées d'humidité dans le silo.

## Sortie de vidange
Type: contrôle
La sortie de vidange est-elle purgée ?
Si non: purger


# Phase : Démontage tuyau et nettoyage tête
Début: 14
Fin: 14
Rôle: machine
Opérateurs: 2
<!-- MAN p.111, p.115 ; FI p.46 -->

## Démonter le tuyau
Type: action
Bras en position basse, démonter le tuyau de la machine.

## Nettoyer la tête
Type: action

## Cleaning cycle
Type: minuterie
Durée: 5 min
Cycle de nettoyage du joint tournant du 5e axe, lancé depuis l'IHM.

## Guides de tuyau
Type: contrôle
Criticité: machine
Guides de tuyau repliés ?
Si non: les replier avant tout repli du bras


# Phase : Repli machine
Début: 15
Fin: 15
Rôle: machine
Opérateurs: 2
<!-- MAN p.114-119 ; MEMO p.5, p.7, p.18 -->

## Avant le repli
Type: checklist
Criticité: sécurité
- [ ] Clé de sécurité sur OFF
- [ ] Personne dans le rayon du bras
- [ ] Guides de tuyau repliés

## Rétracter les télescopiques
Type: action
Rétracter le télescopique du boom, puis celui du jib.
![Pupitre de commande – leviers](images/pupitre_leviers.jpg)
<!-- EN ATTENTE D'ARBITRAGE (Yves) : réouverture des vannes du mât avant le télescopage -->

## Replier la tête
Type: action
Moteur arrêté : bouton « Fold » de l'IHM, en accompagnant le mouvement.

## Remonter le bras
Type: action

## Aligner avec la structure
Type: action
Levier rouge : aligner avec la structure de la machine (repère visuel sur bâti).

## Remonter à 45° ou plus
Type: valeur
Criticité: machine
Levier droit.
Plage: 45..90 °

## Replier
Type: action
Levier central.

## Descendre
Type: action
Levier droit.

## Remonter les pattes
Type: action
Bouton « ALL », au maximum – contrôle sur les pattes arrière.

## Replier les pattes
Type: checklist
Criticité: sécurité
Moteur arrêté, pour chacune des 4 pattes, en sens inverse du montage :
- [ ] Goupille de caisson intérieur
- [ ] Snap pin
- [ ] Goupille principale
- [ ] Goupille de rotation


# Phase : Rangement et consignation
Début: 16
Fin: 16
<!-- MAN p.21, p.33, p.40, p.120, p.156 ; MT1 p.35, p.43 ; MT2 p.122 ; BD p.6-9 ; FI p.20 -->

## IHM
Type: action
Placer l'IHM, le câblage et les arrêts d'urgence sans fil dans la boîte aluminium, puis dans le container.

## Silo
Type: action
Placer le silo dans le container.

## Machine
Type: avertissement
Criticité: sécurité
Amener la machine dans le container en mode thermique – attention aux émissions de gaz. Remettre les 4 ancrages et les rampes.
Note: jamais de déplacement machine dépliée ou avec du matériau.

## Consignation
Type: checklist
Criticité: sécurité
- [ ] Machine : clé de contact retirée, starter sur OFF
- [ ] Pompe : commutateur principal sur « 0 », câble débranché
- [ ] Plein de carburant fait moteur arrêté

## Gel
Type: checklist
Criticité: machine
Si risque de gel :
- [ ] Eau coupée, tuyaux vidés
- [ ] Robinets purgeurs de la pompe à eau ouverts (à refermer au redémarrage)
- [ ] Machine nettoyée et couverte

## Déchets et matériau
Type: checklist
- [ ] Purges et eaux de nettoyage dans le big bag de décantation, eau claire vidangée le lendemain
- [ ] Big bags non utilisés fermés, sur palette, jamais au sol
- [ ] Pompe et tuyaux stockés au sec

## Inventaire
Type: checklist
- [ ] Présence de tous les éléments (voir « Matériel à acheminer » et « Accessoires et outillage »)
- [ ] Matériel consigné (mis en sécurité) si zone non surveillée
