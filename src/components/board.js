import React from "react";
import Squares from "./squares"
var Board = React.createClass({
  render: function() {
    var createBoard = function (number) {
      return (<Squares key={number} inner={number} />)
    }
    var list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var squares = list.map(createBoard, this)
    return (
      <div id="board">
        {squares}
      </div>
    )
  }
})
export default Board;
