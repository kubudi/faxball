$(function() {

  var Player = {

    var defaultPosition = {x:50, y:50}

    var body = Bodies.circle(position.x, position.y, 15, {mass: 50})

    move: function(direction) {
      Brain.move(this.body, direction)
    }

    add: function() {
      Brain.add(this.body)
    }
  }
