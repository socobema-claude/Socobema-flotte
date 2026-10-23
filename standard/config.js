/* ===== Configuration de cette installation =====
   mode "multi" : une seule plateforme pour toutes les coopératives (liens ?org=…, espace administrateur).
   mode "solo"  : copie pour UNE coopérative, avec sa propre base Firebase.
   Pour dupliquer : copiez le dossier, changez FIREBASE_CONFIG (projet Firebase de la coopérative) et mettez mode:"solo". */
window.FIREBASE_CONFIG = {
  apiKey: "COLLER_ICI",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
window.PLATEFORME = {
  mode: "multi",
  fournisseur: { nom: "Traoré Ibrahima", tel: "07 07 64 41 06" }
};
