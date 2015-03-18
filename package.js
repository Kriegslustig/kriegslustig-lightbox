Package.describe({
  name: 'kriegslustig:lightbox',
  version: '0.0.3',
  summary: 'A simple Lightbox',
  git: 'https://github.com/Kriegslustig/kriegslustig-lightbox',
  documentation: 'README.md'
})

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0')
  api.use('templating', 'client')
  api.export('kriegslustigLightbox', 'client')
  api.addFiles([
    'kriegslustigLightbox.html'
  , 'kriegslustigLightbox.css'
  , 'kriegslustigLightbox.js'
  ], 'client')
})
