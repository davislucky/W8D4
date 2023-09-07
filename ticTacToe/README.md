# Tic-Tac-Toe

Let's write a Tic-Tac-Toe game!

## Learning goals

By the end of this project, you should be able to

* Write object-oriented JavaScript programs
* Use `readline` in Node with ease
* Think through how to approach creating an AI

## TTT in JS

* Write a `Board` class in __ttt/board.js__.
  * There should be no UI in your `Board`, except maybe to
    `console.log` a representation of the grid.
  * The board should have functions like `Board.won()`, `Board.winner()`,
    `Board.empty(pos)`, `Board.place_mark(pos, mark)`, etc.
* Write a `Game` class in __ttt/game.js__. You'll want to require your
  __ttt/board.js__ file.
* Write the `Game` constructor such that it takes a reader interface as an
  argument. As in the previous exercise, write a `run` method that takes in both
  this reader and a completion callback (`Game.prototype.run(reader,
  completionCallback)`).
* Copy your `playScript.js` from Hanoi Node. It should work for
  Tic-Tac-Toe as well.
* Build a `HumanPlayer` and `ComputerPlayer` that have the same API, i.e., they
  should have the same set of public methods. This means they should be
  interchangeable.
  * Your `Game` class should be passed two player objects on instantiation;
    because both player classes have the same API, the game should neither know
    nor care what kind of players it is given.

## Bonus

* Build an AI for your game. Try to make it unbeatable.
