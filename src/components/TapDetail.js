import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props){
  const {tap } = props;
  const floatPrice = parseFloat(tap.price).toFixed(2)

  return(
    <React.Fragment>
      <h1>Kombucha Details</h1>
      <h3>{tap.name}</h3>
      <h4>Kombucha brand: {tap.brand}</h4>
      <h4>Price per pint: ${floatPrice}</h4>
      <h4>Flavor profile: {tap.flavor}</h4>
      <h4>Pints left in the keg: {tap.pints}</h4>
      <button onClick={() => props.onClickingSoldPint(tap)}>Sell pint</button>
      <button onClick={() => props.onClickingSoldCustomAmount(tap)}>Sell a lot of pints</button>
      <button onClick={() => props.onClickingEdit(tap)}>Update this tap</button>
      <button onClick={() => props.onClickingDelete(tap.id)}>Remove this tap</button>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingSoldPint: PropTypes.func,
  onClickingSoldCustomAmount: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default TapDetail;