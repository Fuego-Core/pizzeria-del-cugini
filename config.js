/* ============================================================
   CONFIGURATION DU SITE — Pizzeria Del Cugini
   ------------------------------------------------------------
   👉 Le plus simple : ouvre  admin.html  dans ton navigateur
      pour tout modifier visuellement (sans toucher au code),
      puis "Exporter" remplace ce fichier.

   👉 Édition à la main possible aussi : change les valeurs
      entre guillemets. ⚠️ Ne supprime pas les virgules ni les
      accolades { } — une erreur ici peut casser l'affichage.
   ============================================================ */
window.SITE_CONFIG = {

  /* ---------- COULEURS (palette du site) ---------- */
  couleurs: {
    "green":      "#1c6e3f",  // vert principal (boutons, titres)
    "green-deep": "#0e4a28",  // vert foncé (footer, dégradés)
    "green-soft": "#2f8a52",  // vert clair
    "red":        "#b81e2c",  // rouge (accents, prix, CTA)
    "red-deep":   "#88121d",  // rouge foncé
    "cream":      "#f7efe0",  // fond crème
    "cream-2":    "#efe2c9",  // crème plus soutenu
    "paper":      "#fffdf7",  // fond des cartes (presque blanc)
    "ink":        "#241a12",  // texte principal (brun foncé)
    "ink-soft":   "#5f4f40",  // texte secondaire
    "gold":       "#c79a45",  // or
    "gold-soft":  "#e6cd8c"   // or clair
  },

  /* ---------- INFOS PRATIQUES (appliquées partout) ---------- */
  infos: {
    nom:             "Pizzeria Del Cugini",
    telephone:       "+33361507933",          // pour les liens d'appel (sans espaces)
    telephoneAffiche:"+33 3 61 50 79 33",     // tel affiché à l'écran
    adresseLigne1:   "26 Place de la Liberté",
    adresseLigne2:   "59170 Croix, France",
    adresseComplete: "26 Place de la Liberté, 59170 Croix, France", // utilisée pour Google Maps
    services:        "Sur place · À emporter",
    facebook:        "https://www.facebook.com/p/Del-Cugini-100063675934988/",
    instagram:       "",  // laisser vide si aucun
    /* Horaires : un objet par ligne. ferme:true = jour fermé (en rouge). */
    horaires: [
      { jour: "Lundi",    valeur: "Fermé", ferme: true },
      { jour: "Mardi",    valeur: "11h30 – 13h45 · 18h30 – 21h15" },
      { jour: "Mercredi", valeur: "11h30 – 13h45 · 18h30 – 21h15" },
      { jour: "Jeudi",    valeur: "11h30 – 13h45 · 18h30 – 21h15" },
      { jour: "Vendredi", valeur: "11h30 – 13h45 · 18h30 – 21h15" },
      { jour: "Samedi",   valeur: "11h30 – 13h45 · 18h30 – 21h15" },
      { jour: "Dimanche", valeur: "Fermé", ferme: true }
    ],
    horairesResume: "Mar–Sam : 11h30–13h45 · 18h30–21h15"  // ligne courte du footer
  },

  /* ---------- AVIS GOOGLE ---------- */
  avis: {
    afficher: true,          // false pour masquer la section
    titre:    "Ils nous ont noté",
    note:     "4,8",         // note sur 5
    nombre:   "162",         // nombre d'avis
    texte:    "Merci à nos clients pour leur confiance.",
    lien:     "https://www.google.com/maps/search/?api=1&query=Pizzeria+Del+Cugini+26+Place+de+la+Libert%C3%A9+59170+Croix"  // votre fiche Google (avis)
  },

  /* ---------- TEXTES ---------- */
  textes: {
    promo:       "",   // bandeau d'annonce en haut du site (vide = masqué). Ex : "Fermeture exceptionnelle le 14/07"
    eyebrow:     "Pâte fraîche · Fait maison · Croix (59)",
    heroLigne1:  "Pizzeria",
    heroLigne2:  "Del Cugini",
    heroLead:    "La vraie pizza maison, pâte fraîche pétrie chaque jour.",
    heroSub:     "Plus de 30 pizzas, des pâtes, des salades de saison et des desserts gourmands. Une cuisine généreuse, des produits frais, l'esprit de famille dans chaque part.",
    heroBouton:  "Voir la carte",
    navTrouver:  "Nous trouver",
    navContact:  "Nous contacter",

    aboutKick:   "Bienvenue chez nous",
    aboutTitre:  "La maison Del Cugini",
    aboutTexte:  "« Del Cugini » — entre cousins. Ici on cuisine comme à la maison : la pâte est pétrie sur place chaque jour, les garnitures sont généreuses, et chaque pizza part du four avec le sourire. Pas de surgelé, pas de raccourci — juste de bons produits, du temps, et l'envie de vous régaler.",
    features: [
      { titre: "Pâte fraîche du jour", texte: "Pétrie maison chaque matin, légère et croustillante." },
      { titre: "Produits frais",       texte: "Garnitures généreuses et salades de saison de juin à septembre." },
      { titre: "Recettes maison",      texte: "Sauce bolognaise et créations signées de la maison." },
      { titre: "Deux tailles",         texte: "Petite (24 cm) ou Standard (29 cm) — pour toutes les faims." }
    ],

    specialitesKick:     "Les incontournables",
    specialitesTitre:    "Nos spécialités maison",
    specialitesSousTitre:"Les pizzas qui font la réputation de la maison.",

    carteKick:     "À table",
    carteTitre:    "Notre carte",
    carteSousTitre:"Toutes nos pizzas sont à base de pâte fraîche maison.",

    infosKick:     "Venez nous voir",
    infosTitre:    "Infos & accès",
    infosSousTitre:"Sur place ou à emporter — on vous attend.",

    footerTexte:  "La vraie pizza maison à pâte fraîche, faite avec générosité et esprit de famille, à Croix (59).",
    footerBas1:   "Tous droits réservés.",
    footerBas2:   "Pâte fraîche maison · Fait avec passion"
  },

  /* ---------- IMAGES (noms de fichiers dans le dossier image/) ---------- */
  images: {
    hero:  "image/hero-pizza.jpg",   // grande photo de fond du hero
    about: "image/about-pizza.jpg",  // photo de la section "La maison"
    /* Les 4 pizzas "spécialités" (photo + nom + description + prix affiché) */
    signatures: [
      { fichier: "image/sig-del-cugini.jpg",  nom: "La Del Cugini",  desc: "Tomate, jambon, champignons, oignons, poivrons, chorizo, œuf, mozzarella.", prix: "10,50 €", tag: "Signature" },
      { fichier: "image/sig-gargantua.jpg",   nom: "La Gargantua",   desc: "Crème, poulet, oignons, pommes de terre, œuf, mozzarella.",                 prix: "10,00 €", tag: "" },
      { fichier: "image/sig-savoyarde.jpg",   nom: "La Savoyarde",   desc: "Crème, oignons, lardons, pommes de terre, reblochon, mozzarella.",          prix: "11,00 €", tag: "" },
      { fichier: "image/sig-charcuterie.jpg", nom: "La Charcuterie", desc: "Tomate, jambon, lardons, chorizo, merguez, mozzarella.",                   prix: "11,00 €", tag: "" }
    ]
  },

  /* ---------- MENU ----------
     Chaque plat = ["Nom", "ingrédients", prix1, prix2, "badge"]
     - Pizzas : prix1 = 24 cm, prix2 = 29 cm
     - Autres : seul prix1 est utilisé (prix2 absent)
     - "badge" (optionnel) : ex "Maison", "Signature"
     - prix à null = "voir détail" (le détail est mis dans les ingrédients) */
  menu: {
    pizzas:{
      note:'<b>Prix : Petite enfant 24 cm / Standard 29 cm.</b><div class="price-key"><span><i>24 cm</i> = petite</span><span><i>29 cm</i> = standard</span></div>',
      items:[
        ["Margherita","tomate, mozzarella",6.00,7.50],
        ["Jambon","tomate, jambon, mozzarella",6.50,8.00],
        ["Chorizo","tomate, chorizo, mozzarella",6.50,8.00],
        ["Thon","tomate, thon, mozzarella",6.50,8.00],
        ["Regina","tomate, jambon, champignons, mozzarella",7.00,8.50],
        ["Chèvre","tomate, chèvre, mozzarella",7.00,8.50],
        ["Gorgonzola","tomate, crème, gorgonzola, mozzarella",7.00,8.50],
        ["Napolitaine","tomate, anchois, olives, câpres, mozzarella",7.00,8.50],
        ["Bolognaise","sauce bolognaise maison, mozzarella",7.50,9.00],
        ["Végétarienne","tomate, champignons, oignons, poivrons, olives, mozzarella",7.50,9.00],
        ["Calabraise","tomate, thon, chorizo, olives, mozzarella",7.50,9.00],
        ["Exotic","tomate, jambon, ananas, mozzarella",7.50,9.00],
        ["4 Fromages","tomate, gruyère, chèvre, gorgonzola, mozzarella",8.00,9.50],
        ["Calzone","tomate, jambon, champignons, œuf, mozzarella",8.00,9.50],
        ["Fruits de mer","tomate, fruits de mer, mozzarella",8.00,9.50],
        ["Saumon","tomate, crème, saumon, mozzarella",8.00,9.50],
        ["Oriental","tomate, merguez, oignons, mozzarella",8.00,9.50],
        ["Burger","tomate, viande hachée de bœuf, cheddar, sauce burger ou barbecue, mozzarella, cornichons & oignons frits",8.50,10.00],
        ["4 Saisons","tomate, jambon, champignons, artichaut, olives, mozzarella",8.50,10.00],
        ["Marco","tomate, chorizo, chèvre, œuf, mozzarella",8.50,10.00],
        ["Gargantua","crème, poulet, oignons, pommes de terre, œuf, mozzarella",8.50,10.00,"Maison"],
        ["Campagnarde","tomate, lardons, oignons, pommes de terre, champignons, mozzarella",8.50,10.00],
        ["Toscana","tomate, crème, jambon, chorizo, champignons, mozzarella",8.50,10.00],
        ["Maroilles","tomate, lardons, maroilles, mozzarella",8.50,10.00],
        ["Miel Chèvre","crème, chèvre, miel, mozzarella",8.50,10.00],
        ["Camembert","tomate, crème, saucisse, camembert, mozzarella",8.50,10.00],
        ["Kebab","tomate, viande kebab, oignons, sauce pitta, mozzarella",8.50,10.00],
        ["Romaine","tomate, crème, saumon, chèvre, mozzarella",9.00,10.50],
        ["Indiana","tomate, crème, champignons, poulet, oignons, curry, mozzarella",9.00,10.50],
        ["Del Cugini","tomate, jambon, champignons, oignons, poivrons, chorizo, œuf, mozzarella",9.00,10.50,"Signature"],
        ["Charcuterie","tomate, jambon, lardons, chorizo, merguez, mozzarella",9.50,11.00],
        ["Savoyarde","crème, oignons, lardons, pommes de terre, reblochon, mozzarella",9.50,11.00]
      ],
      supp:'Ingrédient supplémentaire : <b>1,00 €</b>'
    },
    pates:{
      note:'Pennes ou spaghetti, au choix.',
      items:[
        ["Bolognaise","bolognaise maison",8.00],
        ["Carbonara","crème, lardons, parmesan, œuf",9.00],
        ["Toscana","tomate, crème, jambon, champignons",9.00],
        ["Au four","bolognaise maison, crème, mozzarella gratinée",9.00],
        ["Cocorico","crème, champignons, poulet, curry",9.00],
        ["Saumon","saumon, tomate, crème",9.00],
        ["4 Fromages","crème, chèvre, gorgonzola, emmental, parmesan",9.00]
      ],
      supp:'Supplément gratin : <b>1,00 €</b>'
    },
    salades:{
      note:'Salades de saison de juin à septembre — chaque mois, une nouvelle salade proposée.',
      items:[
        ["Du Chef","salade, tomates, thon, saumon, oignons, vinaigrette",9.00],
        ["Paysanne","salade, lardons, chèvre, oignons, gruyère, vinaigrette",9.50],
        ["Del Cugini","salade, poulet, oignons, pommes de terre, gruyère, lardons, vinaigrette",9.50]
      ],
      supp:''
    },
    desserts:{
      note:'Pour finir en douceur.',
      items:[
        ["Tiramisu maison","spéculos & cookie granola",3.00],
        ["Dame Blanche / Dame Noire","",4.50],
        ["Café Liégeois","",4.50],
        ["Colonel","",5.50],
        ["Glaces Rhum-Raisins","",4.50],
        ["Glaces","Magnum (amandes, blanc, noir, chocolat au lait), Snickers glacé, Mars glacé",3.00],
        ["Pizza dessert","la petite 5,00 € · la grande 6,50 €",null],
        ["Pizza Nutella (chausson)","la petite 4,50 € · la grande 6,00 €",null]
      ],
      supp:''
    },
    boissons:{
      note:'Softs, bières, vins & digestifs.',
      items:[
        ["Capri-Sun","",1.00],
        ["Soft (33 cl)","Coca, Cherry, Zéro, Ice Tea, Fuze Tea, Fanta, Sprite, Schweppes, Oasis…",1.50],
        ["Red Bull (25 cl)","",2.00],
        ["Eau plate (50 cl)","",1.50],
        ["Eau gazeuse (50 cl)","San Pellegrino",2.00],
        ["1664 (25 cl)","",2.50],
        ["Leffe (25 cl)","",3.00],
        ["Verre de vin","",3.00],
        ["1/4 pichet","rosé ou rouge",5.00],
        ["1/2 pichet","rosé ou rouge",8.00],
        ["Bouteille de rosé (75 cl)","Rosato de Venise",13.00],
        ["Bouteille de rouge (75 cl)","Bardolino",13.00],
        ["Bouteille Lambrusco","",10.00],
        ["Whisky","Clan Campbell",5.00],
        ["Whisky premium","Jack Daniel's, Chivas, Cardhu, Akashi",6.00],
        ["Vodka","",5.00],
        ["Rhum ambré","",6.00],
        ["Porto / Martini / Marsala","blanc, rouge…",4.00],
        ["Ricard","",4.00],
        ["Grappa / Limoncello","",5.00],
        ["Café","",1.00]
      ],
      supp:''
    }
  },

  /* ---------- PHOTOS DU MENU ----------
     photosMenu[catégorie]["Nom EXACT du plat"] = "image/menu/fichier.jpg"
     Sans photo → un joli placeholder s'affiche automatiquement. */
  photosMenu: {
    pizzas:{
      "Margherita":"image/menu/pz9.jpg",
      "Jambon":"image/menu/pz3.jpg",
      "Chorizo":"image/menu/pz5.jpg",
      "Thon":"image/menu/pz17.jpg",
      "Regina":"image/menu/pz8.jpg",
      "Chèvre":"image/menu/pz20.jpg",
      "Gorgonzola":"image/menu/pz36.jpg",
      "Napolitaine":"image/menu/pz49.jpg",
      "Bolognaise":"image/menu/pz1.jpg",
      "Végétarienne":"image/menu/pz4.jpg",
      "Calabraise":"image/menu/pz16.jpg",
      "Exotic":"image/menu/pz18.jpg",
      "4 Fromages":"image/menu/pz56.jpg",
      "Calzone":"image/menu/pz15.jpg",
      "Fruits de mer":"image/menu/pz11.jpg",
      "Saumon":"image/menu/pz53.jpg",
      "Oriental":"image/menu/pz45.jpg",
      "Burger":"image/menu/pz24.jpg",
      "4 Saisons":"image/menu/pz22.jpg",
      "Marco":"image/menu/pz54.jpg",
      "Gargantua":"image/sig-gargantua.jpg",
      "Campagnarde":"image/menu/pz23.jpg",
      "Toscana":"image/menu/pz40.jpg",
      "Maroilles":"image/menu/pz25.jpg",
      "Miel Chèvre":"image/menu/pz50.jpg",
      "Camembert":"image/menu/pz37.jpg",
      "Kebab":"image/menu/pz47.jpg",
      "Romaine":"image/menu/pz26.jpg",
      "Indiana":"image/menu/pz48.jpg",
      "Del Cugini":"image/sig-del-cugini.jpg",
      "Charcuterie":"image/sig-charcuterie.jpg",
      "Savoyarde":"image/sig-savoyarde.jpg"
    },
    pates:{
      "Bolognaise":"image/menu/pa25.jpg",
      "Carbonara":"image/menu/pa21.jpg",
      "Toscana":"image/menu/pa2.jpg",
      "Au four":"image/menu/pa10.jpg",
      "Cocorico":"image/menu/pa12.jpg",
      "Saumon":"image/menu/pa13.jpg",
      "4 Fromages":"image/menu/pa17.jpg"
    },
    desserts:{
      "Tiramisu maison":"image/menu/de18.jpg",
      "Dame Blanche / Dame Noire":"image/menu/de24.jpg",
      "Café Liégeois":"image/menu/de19.jpg",
      "Colonel":"image/menu/de25.jpg",
      "Glaces Rhum-Raisins":"image/menu/de16.jpg",
      "Glaces":"image/menu/de14.jpg",
      "Pizza dessert":"image/menu/de3.jpg",
      "Pizza Nutella (chausson)":"image/menu/de22.jpg"
    }
  }
};
