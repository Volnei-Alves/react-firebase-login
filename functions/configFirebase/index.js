//const db = require("firebase-admin/lib/firestore")

const admin = require("firebase-admin")

var serviceAccount = require("BAIXAR ARQUIVO DE CONFIGURAÇÃO FIREBASE NA RAIZ DA FUNCTIONS")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:// URL_PROJETO ,
})

const db = admin.firestore()

const firebase = require("firebase/app")
require("firebase/auth")

var firebaseConfig = {
    apiKey: //APIKEY ],
    authDomain: //AUTHDDOMAIN,
    projectId: //PROJECTID,
    storageBucket: // STORAGE,
    messagingSenderId: //MESSAGINGSENDERID,
    appId: //APPID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)



module.exports = { db, firebase, admin }
