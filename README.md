# Cocktails

Application Angular de recettes de cocktails avec une interface premium et moderne.

![Angular](https://img.shields.io/badge/Angular-17.3-red)
![Angular Material](https://img.shields.io/badge/Material-17.3-blue)

## Fonctionnalités

- Liste des cocktails avec recherche
- Fiche détaillée par cocktail (image, description, tags)
- Design système : fond sombre, cartes blanches, accents dorés
- Composants Material : toolbar, sidenav, cards, chips, boutons

## Technologies

- **Angular 17**
- **Angular Material 17**
- **TypeScript 5.4**
- **SCSS**

## Démarrage

### Prérequis

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Lancer l'application

```bash
npm start
# ou
ng serve
```

Puis ouvrir [http://localhost:4200](http://localhost:4200).

### Build de production

```bash
ng build
```

Les fichiers sont générés dans `dist/cocktails/`.

## Structure du projet

```
src/
├── app/
│   ├── cocktail-container/      # Liste + détails
│   │   ├── cocktail-list/       # Liste avec recherche
│   │   └── cocktail-details/     # Fiche cocktail
│   ├── header/                  # Toolbar
│   └── interfaces/              # Cocktail interface
├── assets/
│   └── images/                 # Images des cocktails
├── theme.scss                  # Thème Material personnalisé
└── styles.scss                 # Variables & styles globaux
```

## Design system

| Variable | Valeur |
|---------|--------|
| Fond app | `#121417` |
| Cartes | `#FFFFFF` |
| Accent principal | `#D6B25E` (or) |
| Accent secondaire | `#2E7D6B` (vert bouteille) |
| Texte sur fond sombre | `#EDE7DD` |
| Texte sur cartes | `#1E1E1E` |

**Typographie :**
- Titres : Playfair Display
- Corps : Inter, Roboto

**Règles visuelles :**
- Coins arrondis : 16px
- Ombres légères
- Espacement : 24–32px

## Ajouter une image de cocktail

1. Placer l'image dans `src/assets/images/`
2. Mettre à jour l'URL dans `cocktail-container.component.ts` :

```typescript
{
  name: 'Mon Cocktail',
  img: 'assets/images/mon-cocktail.png',
  description: '...',
  tags: ['...']
}
```

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `ng serve` | Serveur de développement |
| `ng build` | Build de production |
| `ng test` | Tests unitaires (Karma) |

## À venir

- [ ] Ajouter un cocktail
- [ ] Modifier un cocktail
- [ ] Route Ingredients
- [ ] Route Recettes

---

*Projet généré avec [Angular CLI](https://angular.io/cli)*
