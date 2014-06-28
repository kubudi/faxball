var Mover = {
	MoveUp : function(player) {
		console.log("Moved Up");
		player.move({x: 0, y: -1})
	},

	MoveDown: function(player) {
		console.log("Moved Down");
		player.move({x: 0, y: 1})
	},

	MoveRight: function(player) {
		console.log("Moved Right");
		player.move({x: 1, y: 0})
	},

	MoveLeft: function(player) {
		console.log("Moved Left");
		player.move({x: -1, y: 0})
	},

	Shoot: function(player) {
		console.log("Shoot");
		//player.move({x: 0, y: -1})
	}
}