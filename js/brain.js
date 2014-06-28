var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

var Brain = {

  engine : {},

  world : {},

  init: function(container) {
    this.engine = Engine.create(container)
    this.world = this.engine.world
    this.world.gravity.y = 0
    this.world.gravity.x = 0
    Engine.run(this.engine)
    var offset = 5;
    World.add(this.world, [
      Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
      Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
    ]);
  },

  create: function(x, y, radius, opts) {
    return Bodies.circle(x, y, radius, opts)
  },

  add: function(elem) {
    World.add(this.world, elem)
  },

  move: function(body, direction) {
    Body.applyForce(body, { x: 0, y: 0 }, direction)
  }
}

