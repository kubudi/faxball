#FAXBALL

##What

A simple javascript game basically works like soccer, but players are slightly rounded.
Probably will be multiplayer online in the future.

Still working on a good name.

Please don't ask "why no node.js". It's in the agenda.

And please feel free to contribute

##Why

Becuse world needs more online js games.

##How

####Moving
  
  Every keystroke creates a Force(F), 
  this force cause an acceleration(a), 
  player gains a momentum(P), and wanders around,
  when close enough to the ball, player can shoot,
  shoot creates a force on ball and so on,
  
  Basic physics.

####Network

  Connection will be over ajax or some sort of socket technology. Probably(hopefully) socket.io will suffice.


##With

* [matter.js](https://github.com/liabru/matter-js)
* [socket.io](http://socket.io/)
* [jquery](http://jquery.com/)


##What-To-Do
I will create a public trello board soon. But roughly:

* A trello board
* A basic class hierarchy
* Defining models
* Defining services(in detail)
* Defining communication protocol
* A network service that uses socket.io
* A movement service that uses matter.js(currently has a template)
* A management module that checks rules and gameplay
* A graphics module helps to create, move etc object. (this will moslty be handled by matter.js)
