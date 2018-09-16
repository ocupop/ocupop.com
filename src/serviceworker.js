// // Static Cache Version Control
// const version = 'V7.0';
// // Static Cache Name
// const staticCacheName = version + 'staticfiles';
// const imageCacheName = 'images';
// const pagesCacheName = 'pages';

// const cacheList = [
//   staticCacheName,
//   imageCacheName,
//   pagesCacheName
// ];


// // Cache your files...

// addEventListener('install', installEvent => {
//   // Install-handling code goes here
//   installEvent.waitUntil(
//     caches.open(staticCacheName)
//     .then( staticCache => {
//       // These files don't block installation
//       staticCache.addAll([
//         '/assets/fonts/open-sans.css'
//       ]); // end addAll
//       // These files must be cached for installation
//       return staticCache.addAll([
//         '/assets/css/main.css',
//         '/assets/js/main.js',
//         '/offline/index.html',
//         '/contact/index.html',
//         'favicon.png',
//         'https://webfonts.fontstand.com/WF-031559-2b8cdb5c18c2686f822711d4a431fccf.css',
//         'https://use.typekit.net/wzw6yzl.css'
//       ]); // end return addAll
//     }) // end open then
//   ); // end waitUntil
// }); // end addEventListener 

// // When the browser requests a file...

// addEventListener ('fetch', fetchEvent => {
//   const request = fetchEvent.request;
//   // When the user requests an HTML file

//   if (request.headers.get('Accept').includes('text/html')) {
//     fetchEvent.respondWith(
//       // Fetch that page from network
//       fetch(request)
//       .then( responseFromFetch => {
//         // Put a copy in the cache
//         const copy = responseFromFetch.clone();
//         fetchEvent.waitUntil(
//           caches.open(pagesCacheName)
//           .then( pagesCache => {
//             return pagesCache.put(request, copy);
//           }) // End open then
//         ); // End waitUntil
//         return responseFromFetch;
//       }) // End fetch then
//       .catch( error => {
//         //otherwise look for a cached version of the page
//         return caches.match(request)
//         .then( responseFromCache => {
//           if (responseFromCache) {
//             return responseFromCache;
//           } // End if
//           // Otherwise show the fallback page
//           return caches.match('/offline/index.html');
//         }); // End match and then return
//       }) // End fetch catch
//     ); // end respondWith
//     return; // Go no further
//   } // End if


//   // When the user requests an image file
//   if (request.headers.get('Accept').includes('image')) {
//     fetchEvent.respondWith(
//       // Look for a cached version of the image
//       caches.match(request)
//       .then( responseFromCache => {
//         if (responseFromCache) {
//           // Fresh a fetch version from the network
//           fetchEvent.waitUntil(
//             fetch(request)
//             .then (responseFromFetch => {
//               // Update the cache
//               caches.open(imageCacheName)
//               .then( imageCache => {
//                 return imageCache.put(request, responseFromFetch);
//               }); // end open then
//             }) // end fetch then
//           ); // end waitUntil
//           return responseFromCache;
//         } // end if
//         // Otherwise fetch images from network
//         return fetch(request)
//         .then( responseFromFetch => {
//           // Put a copy in the cache
//           const copy = responseFromFetch.clone();
//           fetchEvent.waitUntil(
//             caches.open(imageCacheName)
//             .then( imageCache => {
//               return imageCache.put(request, copy);
//             }) // end open then
//           ); // end waitUntil
//           return responseFromFetch;
//         }); // end fetch and then return
//       }) // end match then
//     ); // end respondWith
//     return; // Go no further  
//   } // end if



  
//   // For everything else...
//   fetchEvent.respondWith(
//     // Look for a cached version of the file
//     caches.match(request)
//     .then( responseFromCache => {
//       if (responseFromCache) {
//         return responseFromCache;
//       } // end if
//       // Otherwise fetch the file from the network
//       return fetch(request);
//     }) // end match then
//   ); // end respondWith
// }); // end addEventListener


// // Delete old version of cache

// addEventListener ('activate', activateEvent => {
//   activateEvent.waitUntil(
//     caches.keys()
//     .then( cacheNames => {
//       return Promise.all(
//         cacheNames.map( cacheName => {
//           if (!cacheList.includes(cacheName)) {
//             return caches.delete(cacheName);
//           } //end if
//         }) // end map
//       ); // end return Promise.all
//     }) //end keys then
//     .then( () => {
//       return clients.claim();
//     }) // end then
//   ); // end waitUntil
// }); // end addEventListener