import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <h4>{props.price}</h4>
        <h4>{props.flavor}</h4>
        <h4>{props.pints}</h4>
      </div>
    </React.Fragment>
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