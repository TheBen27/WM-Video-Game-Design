ig.module( 'game.levels.Transfer2' )
.requires( 'impact.image','game.entities.door','game.entities.player' )
.defines(function(){
LevelTransfer2=/*JSON[*/{
	"entities": [
		{
			"type": "EntityDoor",
			"x": 448,
			"y": 256,
			"settings": {
				"size": {
					"x": 64,
					"y": 96
				},
				"targetLevel": "LevelTransfer1"
			}
		},
		{
			"type": "EntityPlayer",
			"x": 220,
			"y": 448
		}
	],
	"layer": [
		{
			"name": "collision",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 32,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,12,12,12,12,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,24,0,0,0,0,0,0,1,1,1],
				[1,1,1,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
			]
		},
		{
			"name": "terrain",
			"width": 30,
			"height": 20,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/tiles_spritesheet.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 32,
			"foreground": false,
			"data": [
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,81,75,75,81,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,75,0,0,75,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,75,0,0,75,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,81,0,0,81,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,13,14,14,15,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,19,20,20,21,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,19,20,20,21,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,0,0,0,0,19,20,20,21,0,0,0,0,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,0,0,0,0,38,39,39,39,39,39,39,39,39,39,39,40,0,0,0,0,0,0,7,8,8],
				[8,8,9,0,0,38,39,39,39,44,45,45,45,45,45,45,45,45,45,45,46,39,39,39,40,0,0,7,8,8],
				[39,39,39,39,39,44,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,39,39,39,39,39],
				[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45],
				[45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45]
			]
		}
	]
}/*]JSON*/;
LevelTransfer2Resources=[new ig.Image('media/tiles_spritesheet.png')];
});