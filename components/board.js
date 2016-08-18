import React from "react";
import Squares from "./squares";
var Board = React.createClass({
  render: function() {
    var keys = {};

    window.addEventListener('keydown',function(e) {
      keys [e.which] = true;
      }, true);
    window.addEventListener('keyup',function(e) {
      keys [e.which] = false;
      }, true);

    var createBoard = function (number) {
      return (<Squares key={number} inner={number} />)
    }

    var arry = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var mix = function(arry) {
      var currentIndex = arry.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arry[currentIndex];
        arry[currentIndex] = arry[randomIndex];
        arry[randomIndex] = temporaryValue
      }
      return(arry);
    }
    mix(arry);
    var list = arry;
    var squares = list.map(createBoard, this)

    var test = function() {
      //Key code 37 is left arrow
      if(keys[37]) {
        console.log("left");
      }
      //Key code 38 is up arrow
       if(keys[38]) {
        console.log("up");
      }
      //Key code 39 is right arrow
       if(keys[39]) {
        console.log("right");
      }
      //Key code 40 is down arrow
       if(keys[40]) {
        console.log("down");
      }
      setTimeout(test, 10);
    }
    test();

    return (
      <div id="board">
        {squares}
      </div>
    )
  }
})
export default Board;
