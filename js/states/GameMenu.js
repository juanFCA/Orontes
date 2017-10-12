var GameMenu = function() {};

GameMenu.prototype = {

  menuConfig: {
    startY: 120,
    startX: "center"
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 70, "Orontes of Armenia", {
      font: 'bold 30pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText2 = game.make.text(game.world.centerX, 110, "Forgothen in the Shadowns", {
      font: 'bold 25pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.titleText2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText2.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    if (music.name !== "dangerous" && playMusic) {
      music.stop();
      music = game.add.audio('dangerous');
      music.loop = true;
      music.play();
    }
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);
    game.add.existing(this.titleText2);

    this.addMenuOption('Iniciar', function () {
      game.state.start("Game");
    });
    this.addMenuOption('Opções', function () {
      game.state.start("Options");
    });
    this.addMenuOption('Creditos', function () {
      game.state.start("Credits");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
