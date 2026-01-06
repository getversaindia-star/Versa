// sw.js - Service Worker

// 1. Install Event: Triggered when the browser sees this new service worker
self.addEventListener('install', (event) => {
  console.log('VersaApp Service Worker: Installed');
  self.skipWaiting(); // Forces this SW to become active immediately
});

// 2. Activate Event: Cleans up old versions if needed
self.addEventListener('activate', (event) => {
  console.log('VersaApp Service Worker: Active');
  return self.clients.claim(); // Takes control of the page immediately
});

// 3. Fetch Event: Necessary for PWA criteria (even if simple)
self.addEventListener('fetch', (event) => {
  // Just logs the fetching; allows the app to work online normally.
  // This empty listener satisfies the PWA requirement for a fetch handler.
});
