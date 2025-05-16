'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8354e8cbb5717e384c1c7670daa34d14",
"assets/AssetManifest.bin.json": "c6336f4ba4287d0bf868873bb7abb391",
"assets/AssetManifest.json": "a9bc738eb53d1dd7baa89bbaa0cbcd4c",
"assets/assets/docs/terms.md": "f24a7c4501765421e8ab0ab58453d2d3",
"assets/assets/images/png/client_logo.png": "8978165932b54cd32ced02d2a334f1cb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "340ebba731cae45bf0c4210743427a7b",
"assets/NOTICES": "409dc0f4e99dbee855b0b6979ec5a9a3",
"assets/packages/livid_core/assets/images/png/cnh.png": "c900b91c631114663e14cf53bea6bd50",
"assets/packages/livid_core/assets/images/png/home_proof_of_life.png": "69593daeda2eee16b4705217e8e3d196",
"assets/packages/livid_core/assets/images/png/home_recad.png": "a158c23ceb2399e3f7cc9a07df4a86ab",
"assets/packages/livid_core/assets/images/png/inss_example.png": "011f1c760f42e0739c32f77ea08ff87f",
"assets/packages/livid_core/assets/images/png/launcher_icon.png": "c59f5725814fc4d8362df283e440212c",
"assets/packages/livid_core/assets/images/png/launcher_icon_ios.png": "c85e94fe80f6acaa49af506d5d7e6aad",
"assets/packages/livid_core/assets/images/png/proof_of_life_emoji.png": "6343d4bada55503d3a8e967dc7d290f0",
"assets/packages/livid_core/assets/images/png/rg.png": "59d2dbe643c19f8b0f0a5f881e89e456",
"assets/packages/livid_core/assets/images/png/rg_novo.png": "145919c0fe5c4f8adf10247660ad2236",
"assets/packages/livid_core/assets/images/png/rg_photo_side.png": "61e6ec5b1dd24231be5ef7441eb7cb7e",
"assets/packages/livid_core/assets/images/png/splash.png": "6a206448b0544cf06edc5d1d1dc32c59",
"assets/packages/livid_core/assets/images/svg/empty_history.svg": "e4c56466c77c23d09c8a4fc33d3b8a56",
"assets/packages/livid_core/assets/images/svg/empty_messages.svg": "7d7f435ee332d5e79f2c26c196c33725",
"assets/packages/livid_core/assets/images/svg/footer_decoration.svg": "2dccc1e70834482c4f142841df16b307",
"assets/packages/livid_core/assets/images/svg/lock_open.svg": "4ec2ebaf221fcf303d851fe98011314e",
"assets/packages/livid_core/assets/images/svg/logo.svg": "2c5fc505afe747d848810be1b88bec64",
"assets/packages/livid_core/assets/images/svg/logo_inverted.svg": "664967ca4ea7428867b850b222abd2b8",
"assets/packages/livid_core/assets/images/svg/megaphone.svg": "61956898656c5246389681b281417528",
"assets/packages/livid_core/assets/images/svg/profit.svg": "3d568e9cb21b8adba1dd08e317bb4adf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "dd007fa95d701f163c24b3556e3ef0af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a09024f144151118bd50f5eeeefab5a7",
"/": "a09024f144151118bd50f5eeeefab5a7",
"main.dart.js": "e57651126812cce41bd947b15a774f67",
"manifest.json": "cef73758cdd38422c4ccf57666d9efa5",
"version.json": "5701a99d5c7562d1217ed379b621fa69"};
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
