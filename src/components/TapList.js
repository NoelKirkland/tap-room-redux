import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return(
    <React.Fragment>
      {Object.values(props.tapList).map((tap) => 
        <Tap
        whenTapClicked = {props.onTapSelection}
        name={tap.name}
        brand={tap.brand}
        price={tap.price}
        flavor={tap.flavor}
        pints={tap.pints}
        id={tap.id}
        key={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func
};

export default TapList;