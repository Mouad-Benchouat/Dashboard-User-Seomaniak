# Dashboard Utilisateurs — Seomaniak

Projet React  pour gérer une liste d'utilisateurs avec un formulaire d'ajout et de suppression.

---

## Stack technique

| Outil | Rôle |
|---|---|
| React 18 | UI et gestion d'état |
| Vite 4 | Bundler et serveur de développement |
| CSS pur | Styles sans framework |

---

## Structure du projet

```
dashboard-react/
│
├── index.html                  # Point d'entrée HTML + import Google Fonts
├── vite.config.js              # Config Vite + plugin React
├── package.json                # Dépendances du projet
│
└── src/
    ├── main.jsx                # Monte le composant App dans le DOM
    ├── App.jsx                 # Composant racine
    ├── index.css               # Tous les styles globaux
    │
    ├── assets/
    │   └── logo.png            # Logo Seomaniak
    │
    ├── components/
    │   ├── UserForm.jsx        # Formulaire d'ajout d'utilisateur
    │   └── UserList.jsx        # Tableau de la liste des utilisateurs
    │
    └── pages/
        └── Dashboard.jsx       # Page principale — gère l'état users[]
```

---

## Flux de données

```
Dashboard.jsx
│
│  state: users[]
│  addUser()  → ajoute un utilisateur
│  deleteUser() → supprime par index
│
├── UserForm.jsx
│      reçoit : addUser()
│      état local : name, email
│      action : soumet le formulaire → appelle addUser()
│
└── UserList.jsx
       reçoit : users[], deleteUser()
       affiche : tableau avec un bouton Supprimer par ligne
```

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le projet sera disponible sur **http://localhost:5173**



---

## Choix techniques

**Vite** plutôt que Create React App : démarrage quasi-instantané et build plus rapide.

---



**CSS pur** sans Tailwind ni CSS Modules : le projet est petit, un seul fichier `index.css` suffit. Les classes sont simples et lisibles .

**État local dans Dashboard** : pas besoin de Context ou Redux pour un projet de cette taille. Le state `users[]` vit dans le parent et descend aux enfants via props.
