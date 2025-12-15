# r301-js-invaders

Petit jeu "Space Invader" en JavaScript (template pédagogique).

## Résumé
- Jeu de type Space Invaders simple, implémenté avec JavaScript et servi via Vite.
- But : tirer sur des vagues d'ennemis, collecter des bonus et survivre le plus longtemps possible.

## Structure rapide
- `src/index.html` : page d'entrée.
- `src/index.js` : point d'initialisation du jeu.
- `src/config.js` : paramètres globaux (tailles, vitesses, etc.).
- `src/scene/Play.js` : boucle et logique principale de la scène de jeu.
- `src/object/` : classes des objets (Player.js, Laser.js, Enemys.js, Bonus.js, etc.).

## Tech / dépendances
- Outils : Vite (serveur de dev et bundling).
- Code : JavaScript ES modules, structure simple pour l'apprentissage.

## Lancer le projet (développement)
1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Ouvrir l'URL affichée dans le terminal (par défaut `http://localhost:5173`).

## Contrôles (par défaut)
- Déplacer : Q / D
- Tirer : `Espace`

## Remarques
- Pour créer une build de production : `npm run build` (si présent dans `package.json`).

---

Bon jeu !
