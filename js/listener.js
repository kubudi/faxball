$(document).ready(function() {
	var canvas = $('#canvas');
   console.log(canvas);

	canvas.keydown( function(event) {
		var pressedKey = event.which
		//console.log(pressedKey);
		switch(pressedKey) {
			case KEY_W: 
				Mover.MoveUp(Player);
				break;
			case KEY_S:
				Mover.MoveDown(Player);
				break;
			case KEY_A:
				Mover.MoveLeft(Player);
				break;
			case KEY_D:
				Mover.MoveRight(Player);
				break;
			case KEY_SPACE:
				Mover.Shoot(Player);
				break;
			case KEY_ESCAPE:
				console.log("Unfocus");
				Canvas.blur();

		}
	});
})

 var KEY_W = 87;
 var KEY_S = 83;
 var KEY_A = 65;
 var KEY_D = 68;
 var KEY_SPACE = 32;
 var KEY_ESCAPE = 27;
