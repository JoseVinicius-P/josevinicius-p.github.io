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

// Recebe mensagens em background
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);

  const title = message.data?.title || 'Nossas Intenções';

    const options = {
      body: message.data?.body || '',
      icon: '/icons/Icon-192.png',
      badge: '/icons/Icon-192.png',
      data: {
        click_action: message.data?.click_action || '/'
      }
    };

  self.registration.showNotification(title, options);
});

// 🔴 ESSENCIAL: clique na notificação
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  const targetUrl =
    event.notification.data?.click_action || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(targetUrl) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});