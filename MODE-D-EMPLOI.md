# Modifier le site — mode d'emploi

Tout le contenu du site (textes, couleurs, prix, photos, infos) se règle à **un seul endroit** :
le fichier **`config.js`**. Deux façons de le modifier.

---

## 🟢 Méthode simple : le panneau visuel `admin.html`

1. Ouvre **`admin.html`** dans ton navigateur
   (en local : double-clic sur le fichier ; en ligne :
   `https://fuego-core.github.io/pizzeria-del-cugini/admin.html`).
2. Modifie ce que tu veux dans les sections :
   **Couleurs · Infos pratiques · Horaires · Textes · Images & spécialités · Menu & prix**.
3. À droite, clique **« 🔄 Prévisualiser »** pour voir le résultat en direct.
4. Quand c'est bon, clique **« ⬇ Exporter config.js »** → un fichier `config.js` se télécharge.
5. **Remplace** l'ancien `config.js` sur GitHub par celui-ci :
   - va sur le dépôt GitHub → fichier `config.js` → ✏️ (Edit) → colle le contenu, **ou**
   - glisse le nouveau `config.js` (Add file → Upload files) à la racine du dépôt.
6. Le site se met à jour tout seul en ~1 minute.

> 💡 Le panneau ne sauvegarde pas tout seul en ligne (le site est « statique »).
> C'est l'étape 5 (remplacer `config.js`) qui publie les changements.

---

## 🟠 Méthode manuelle : éditer `config.js`

Ouvre `config.js` avec un éditeur de texte et change les valeurs entre guillemets.

- **Couleurs** : `couleurs` (codes hexadécimaux, ex `"#1c6e3f"`).
- **Téléphone / adresse / horaires / réseaux** : `infos`.
- **Textes** (titres, accroches, paragraphes) : `textes`.
- **Photos hero / à-propos / spécialités** : `images`.
- **Plats et prix** : `menu` — chaque plat = `["Nom", "ingrédients", prix1, prix2]`
  (pizzas : prix1 = 24 cm, prix2 = 29 cm ; autres : seul prix1).
- **Photo d'un plat** : `photosMenu` — `"Nom EXACT du plat": "image/menu/fichier.jpg"`.

⚠️ Ne supprime pas les **virgules**, **guillemets** et **accolades `{ }`** :
une erreur peut casser l'affichage. En cas de doute, utilise le panneau (méthode simple),
qui génère un fichier toujours valide.

---

## 📷 Ajouter une nouvelle photo

1. Dépose le fichier image dans le dossier **`image/`** (ou `image/menu/` pour un plat) sur GitHub.
2. Indique son chemin dans le panneau (ou dans `config.js`), ex : `image/menu/ma-pizza.jpg`.

Si une photo est absente ou mal nommée, le site affiche automatiquement un **joli placeholder** —
jamais d'image cassée.
