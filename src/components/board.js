import React from "react";
import Squares from "./squares"
var Board = React.createClass({
  render: function() {
    var createBoard = function (number) {
      return (<Squares key={number} inner={number} />)
    }
    var arry = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var cool = function(arry) {
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
    cool(arry);
    var list = arry;
    var squares = list.map(createBoard, this)
    return (
      <div id="board">
        {squares}
      </div>
    )
  }
})
export default Board;
