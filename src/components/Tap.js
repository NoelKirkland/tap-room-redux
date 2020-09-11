import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  const floatPrice = parseFloat(props.price).toFixed(2)
  return (
    <div onClick = {() => props.whenTapClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>Kombucha brand: {props.brand}</h4>
      <h4>Price per pint: ${floatPrice}</h4>
      <h4>Flavor profile: {props.flavor}</h4>
      <h4>Pints left in the keg:{props.pints}</h4>
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