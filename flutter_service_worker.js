'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa0287a6c0026c58e88dbaece41c4db7",
"assets/AssetManifest.bin.json": "3b33a7e7f53e11edd722410a31f6b584",
"assets/assets/config.json": "b81c6a7377888715ee1e6e1081e8ccbb",
"assets/assets/fonts/Cinzel-VariableFont_wght.ttf": "52def9533342f354f8e955871b0b80da",
"assets/assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf": "15cae5a44237e742e40414ed27e31b5d",
"assets/assets/fonts/EBGaramond-VariableFont_wght.ttf": "1c2afe8dc74de759021346faa382c2e8",
"assets/assets/images/background.png": "1cce19c55088ca672851761e4f9e9d22",
"assets/assets/images/background2.png": "f95c82128a8e23d2725a78cd2a7731fc",
"assets/assets/images/background3.png": "b08dcdd142a13a378e603f4b2e4498d4",
"assets/assets/images/error_cloud.png": "fe4ee78653f9524da9fd502a2eff7e33",
"assets/assets/images/icon.png": "f9603db42fbdbc74e0d82564a8c25855",
"assets/assets/images/loading_cloud.png": "1d0d58d63e478e232ed35e677a207fd5",
"assets/assets/images/logo.png": "1d0741e3c869fc867ac744f4864a2b98",
"assets/assets/images/nuvem.png": "4aeb6f6defc6f24a8d20b52c7e0e341a",
"assets/assets/images/nuvem_back.png": "bd9bb57af31ded3ff2a160b970c51362",
"assets/assets/images/nuvem_front.png": "1bce1fd92d4b89de5a13952f8cc288c1",
"assets/assets/images/splash.gif": "6952320e4d07d95bb986855baf78789d",
"assets/FontManifest.json": "87e3a07a15c88053970b4e6367e114f6",
"assets/fonts/MaterialIcons-Regular.otf": "d9a09e2a04f593747c77083f1cc9d78f",
"assets/NOTICES": "a730e6e8a557c259c1e0fdabaaed7e92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b09e044f4cd67bb43409e46aad64aeb5",
"assets/packages/serverpod_auth_idp_flutter/assets/images/apple.svg": "00587615733dd4954be85d8bf79f1d6f",
"assets/packages/serverpod_auth_idp_flutter/assets/images/google.svg": "edd0e34f60d7ca4a2f4ece79cff21ae3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "9b700348760f23816c661b0bdbcfb59a",
"firebase-messaging-sw.js": "2cfa7012858223c4e036a71a00218436",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "79a4a2a77a3565ef63b77a9e904e4cdc",
"icons/badge.png": "62c077d41bee34057e04b17a959f3447",
"icons/Icon-192.png": "f678f97641128c4184c76fd15174afe7",
"icons/Icon-512.png": "c848c79272ba151c17c2d86a17d9c27a",
"icons/Icon-maskable-192.png": "f678f97641128c4184c76fd15174afe7",
"icons/Icon-maskable-512.png": "c848c79272ba151c17c2d86a17d9c27a",
"index.html": "20ba238f6bfea0cbf9abc18e774fc60d",
"/": "20ba238f6bfea0cbf9abc18e774fc60d",
"main.dart.js": "822e3d918653e91663b6a252b92c5a65",
"manifest.json": "b73500a9eef5c24e743aad3ab87cc47a",
"splash/img/dark-1x.gif": "b1e648d13a88273d013860f492573e32",
"splash/img/dark-2x.gif": "2ddf0876d1085c3950c5177d37c0a5d8",
"splash/img/dark-3x.gif": "455abbeeacb7520c7ce677b5e2b8823a",
"splash/img/dark-4x.gif": "6515b020c206915ff741f6b54c2239b9",
"splash/img/light-1x.gif": "b1e648d13a88273d013860f492573e32",
"splash/img/light-2x.gif": "2ddf0876d1085c3950c5177d37c0a5d8",
"splash/img/light-3x.gif": "455abbeeacb7520c7ce677b5e2b8823a",
"splash/img/light-4x.gif": "6515b020c206915ff741f6b54c2239b9",
"version.json": "57cc94ac66e5cd947db1b72b677d6b10"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
