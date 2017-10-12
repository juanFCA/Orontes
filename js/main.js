var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game'), 

Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer;


Main.prototype = {
  preload: function () {
    game.load.image('stars',    'assets/img/stars.jpg');
    game.load.image('loading',  'assets/img/loading.png');
    game.load.image('brand',    'assets/img/logo.png');
    game.load.script('polyfill',   'lib/locals/polyfill.js');
    game.load.script('utils',   'lib/locals/utils.js');
    game.load.script('splash',  'js/states/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');