import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TapList(props){
  return(
    <React.Fragment>
      {props.tapList.map((tap) => 
      <Tap
      whenTapClicked = {props.onTapSelection}
      name={tap.name}
      brand={tap.brand}
      price={tap.price}
      flavor={tap.flavor}
      pints={tap.pints}/>
      )}
    </React.Fragment>
  );
}

TapList.PropTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};

export default TapList;