self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
});

self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
      body: data.body,
      icon: 'checked.png', // You can provide your custom icon
      badge: 'checked.png', // You can provide a badge image
  };

  event.waitUntil(
      self.registration.showNotification(data.title, options)
  );
});
