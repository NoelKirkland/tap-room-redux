import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return (
    <div onClick = {() => props.whenTapClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>Kombucha brand: {props.brand}</h4>
      <hr/>
    </div>
  );
}

Tap.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
};

export default Tap;