// See this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/main/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDr4ULo8OXkHCsP6CH4Sapop21xBrLWb4s",
    authDomain: "nossas-intencoes.firebaseapp.com",
    projectId: "nossas-intencoes",
    storageBucket: "nossas-intencoes.firebasestorage.app",
    messagingSenderId: "611737635408",
    appId: "1:611737635408:web:a9fc64f1043768b7891f55",
    measurementId: "G-NTMYQ76NG5"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});