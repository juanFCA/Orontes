function criarLevel1(){

	game.load.image('imgMusgoForte', 'assets/img/paredes/wall_vines6.png');
	game.load.image('imgMusgoFraco', 'assets/img/paredes/wall_vines3.png');
	game.load.image('imgPedra', 'assets/img/paredes/wall_vines0.png');
	game.load.image('imgPedraDestrutiva', 'assets/img/paredes/wall_vines1.png');
	game.load.image('imgPortaFechada', 'assets/img/portas/dngn_enter_labyrinth.png');
	game.load.image('imgPortaAberta', 'assets/img/portas/dngn_entrance.png');
	game.load.image('imgFundol1', 'assets/img/paredes/rect_gray0.png');

	var level1 = [

	[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
	[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3],
	[7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 3],
	[2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 2],
	[2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 2],
	[2, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2],
	[2, 3, 0, 0, 3, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2],
	[2, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[2, 0, 0, 3, 3, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 2],
	[2, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[2, 3, 3, 4, 3, 0, 0, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 2],
	[1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

	];

	var walls = game.add.group();
	var doors = game.add.group();

	for (var i = 0; i < level1.length; i++) {
		for (var j = 0; j < level1[i].length; j++) {
			if (level1[i][j] == 1) {
			    var wall = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgMusgoForte');
				this.walls.add(wall);
				wall.body.immovable = true; 
			} 

			else if(level1[i][j] == 2){
				var wall = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgMusgoFraco');
				this.walls.add(wall);
				wall.body.immovable = true;
			} 

			else if(level1[i][j] == 3){
				var wall = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgPedra');
				this.walls.add(wall);
				wall.body.immovable = true;
			} 

			else if(level1[i][j] == 4){
				var wall = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgPedraDestrutiva');
				this.walls.add(wall);
				wall.body.immovable = false;
			} 

			else if(level1[i][j] == 5){
				var door = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgPortaFechada');
				this.doors.add(door);
				wall.body.immovable = true;
			} 

			else if(level1[i][j] == 6){
				var door = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgPortaAberta');
				this.doors.add(door);
				wall.body.immovable = true;
			} 

			else if(level1[i][j] == 0){
				var wall = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgFundol1');
				this.walls.add(wall);
				wall.body.immovable = true;
			} 

			else if(level1[i][j] == 7){
				var door = game.add.sprite(((l+c)%3)*32,5*32, 32, 32, c*32,l*32, 32,32, 'imgPortaAberta');
				this.doors.add(door);
				wall.body.immovable = true;
			}
		}

	}
}

