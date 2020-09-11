import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const {tap} = props;

  return(
    <React.Fragment>
      <h1>Kombucha Detail</h1>
      <h3>{tap.name}</h3>
      <h4>{tap.brand}<br/>
      {tap.price}<br/>
      {tap.flavor}<br/>
      {tap.pints}</h4>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
}

export default TapDetail;