var videoshow = require('videoshow')
let _dirname = "images";
var images = [
    {
      path: _dirname + '/img1.JPG',
      disableFadeOut: false,
      loop: 7
    }, {
      path: _dirname + '/img2.JPG',
      disableFadeIn: false,
      loop: 7
    }, {
      path: _dirname + '/img3.JPG',
      transitionColor: '0xFF66C7',
      loop: 7

    }
  ]
  var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }

  videoshow(images, videoOptions)
  .audio('audio/audio.mp3')
  .save('video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err, stdout, stderr) {
    console.error('Error:', err)
    console.error('ffmpeg stderr:', stderr)
  })
  .on('end', function (output) {
    console.error('Video created in:', output)
  })

