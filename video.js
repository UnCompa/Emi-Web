const audio = new Plyr('audio', {
  accentColor: "#0af"
});
const player = new Plyr('#video', {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
  accentColor: '#ff0000'
});
const youtube = new Plyr('#player', {
  controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
  accentColor: '#ff0000'
});