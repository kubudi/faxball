$(function() {

  var container = document.getElementById('canvas');  

  var Engine = Matter.Engine,
      World = Matter.World,
      Body = Matter.Body;

  world.gravity.y = 0;
  world.gravity.x = 0;

  var Brain = {
    engine : Engine.create(container),

    world : engine.world,

    add: function(elem) {
      World.add(this.world, elem)
    }

    move: function(body, direction) {
      Body.applyForce(body, { x: 0, y: 0 }, direction)
    }

    run: function() {
      Engine.run(this.engine);
    }
  }

  Brain.run
});

});