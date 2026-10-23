/* ===== Configuration de cette installation =====
   mode "multi" : une seule plateforme pour toutes les coopératives (liens ?org=…, espace administrateur).
   mode "solo"  : copie pour UNE coopérative, avec sa propre base Firebase.
   Pour dupliquer : copiez le dossier, changez FIREBASE_CONFIG (projet Firebase de la coopérative) et mettez mode:"solo". */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA0eWqX9fk7m6Dmavn-Gr_PUPPnv-w2MNY",
  authDomain: "plateforme-coop.firebaseapp.com",
  projectId: "plateforme-coop",
  storageBucket: "plateforme-coop.firebasestorage.app",
  messagingSenderId: "779354628843",
  appId: "1:779354628843:web:4f13d75df63867d85394ae"
};
window.PLATEFORME = {
  mode: "multi",
  fournisseur: { nom: "Traoré Ibrahima", tel: "07 07 64 41 06" }
};
