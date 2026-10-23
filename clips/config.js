/* ===== Configuration du site de vidéos ===== */
window.APP = { nom: "Kôrô" };                       // nom affiché du site (modifiable)
window.FIREBASE_CONFIG = {                           // configuration Firebase du projet koro-videos
  apiKey: "AIzaSyDyyOZZx2uh_clBWX4FfY5-65Ak5LOVIXM",
  authDomain: "koro-videos.firebaseapp.com",
  projectId: "koro-videos",
  storageBucket: "koro-videos.firebasestorage.app",
  messagingSenderId: "928366747501",
  appId: "1:928366747501:web:333e35aff6f5c51dc18464"
};
window.CLOUDINARY = { cloud: "ayckscgb", preset: "koro", dossier: "clips" };  // hébergement des vidéos
window.TARIFS = { pub7: 10000, boost7: 5000 };       // prix proposés par défaut (FCFA)
