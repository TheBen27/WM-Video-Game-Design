ig.module( 'game.levels.CombatTest' )
.requires( 'impact.image','game.entities.player','game.entities.target')
.defines(function(){
LevelCombatTest=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 20,
			"y": 292
		},
		{
			"type": "EntityTarget",
			"x": 308,
			"y": 268
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 15,
			"height": 15,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 32,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "sky",
			"width": 1,
			"height": 1,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles_spritesheet.png",
			"repeat": true,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[101]
			]
		},
		{
			"name": "ground",
			"width": 15,
			"height": 15,
			"linkWithCollision": true,
			"visible": 1,
			"tilesetName": "media/tiles_spritesheet.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
				[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45],
				[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45],
				[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45]
			]
		}
	]
}/*]JSON*/;
LevelCombatTestResources=[new ig.Image('media/tiles_spritesheet.png'), new ig.Image('media/tiles_spritesheet.png')];
});