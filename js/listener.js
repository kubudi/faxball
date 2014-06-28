$(document).ready(function() {
	var Canvas = $('#canvas');

	Canvas.keydown( function(event) {
		var pressedKey = event.which
		//console.log(pressedKey);
		switch(pressedKey) {
			case KEY_W: 
				Mover.MoveUp();
				break;
			case KEY_S:
				Mover.MoveDown();
				break;
			case KEY_A:
				Mover.MoveLeft();
				break;
			case KEY_D:
				Mover.MoveRight();
				break;
			case KEY_SPACE:
				Mover.Shoot();
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
