var MYPATH = 'castv2-client';

var Client                = require(MYPATH).Client;
var LoopingMediaReceiver  = require('../../build/lib/cast/LoopingMediaReceiver').default;
var DefaultMediaReceiver  = require(MYPATH).DefaultMediaReceiver;
var scanner               = require('chromecast-scanner');


function ondeviceup(host, callback) {

  var client = new Client();

  client.connect(host, function() {
    console.log('connected, launching app ...');

    console.log('-----LOOPINGMEDIARECEIVER', LoopingMediaReceiver)
    console.log('-----DEFAULTMEDIARECEIVER', DefaultMediaReceiver)

    client.launch(LoopingMediaReceiver, function(err, player) {
      console.log('-----ERROR', err)
      var media = {

        // Here you can plug an URL to any mp4, webm, mp3 or jpg file with the proper contentType.
        contentId: 'http://192.168.101.55:3000/media/audubon_sample_h264_baseline_dashinit.mp4',
        contentType: 'video/mp4',
        streamType: 'BUFFERED', // or LIVE

        // Title and cover displayed while buffering
        metadata: {
          type: 0,
          metadataType: 0,
          title: "Big Buck Bunny",
          images: [
            { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg' }
          ]
        }
      };

      player.on('status', function(status) {
        console.log('status broadcast playerState=%s', status.playerState);
      });

      console.log('app "%s" launched, loading media %s',
        player.session.displayName,
        media.contentId
      );

      player.load(media, { autoplay: true }, function(err, status) {
        console.log('media loaded playerState=%s', status.playerState);
      });

    });

  });

  client.on('error', function(err) {
    console.log('Error: %s', err.message);
    client.close();
    callback(err); //Error
  });

}

function findAndConnect(callback) {
  scanner(function(err, service){
    if (service) {
      ondeviceup(service.data, callback);
    }
  });
}

//module for testcase
module.exports = findAndConnect;

//main
var main = function () {
  findAndConnect(function(rc){
    process.exit(rc);
  });
}
if (require.main === module) {
    main();
}
