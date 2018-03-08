var scanner = require('chromecast-scanner')

scanner(function(err, service) {
  console.log('chromecast %s running on: %s',
    service.name,
    service.data)
})
