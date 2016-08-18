import React from "react";

var Squares = React.createClass({
  render: function(){
    var inner = this.props.inner;
    var classN = ""
    if (inner == 9) {
      classN = "black"
    }
    return (
      <div className={"square " + classN}> {inner} </div>
    )
  }
})
export default Squares;
