import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const {tap, onClickingSellPint} = props;

  return(
    <React.Fragment>
      <h1>Kombucha Detail</h1>
      <h3>{tap.name}</h3>
      <h4>{tap.brand}<br/>
      {tap.price}<br/>
      {tap.flavor}<br/>
      {tap.pints}</h4>
      <button onClick={()=> onClickingSellPint(ticket.id)}>Did you sell some Kombucha?</button>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingSellPint: PropTypes.func
}

export default TapDetail;