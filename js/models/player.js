var Player = {

  body: {},

  move: function(direction) {
    if(this.body.speed <= 015) {
      Brain.move(this.body, direction)
    }
  },

  create: function() {
    this.body = Brain.create(50, 50, 15, {mass: 500})
    Brain.add(this.body)
  }
}
