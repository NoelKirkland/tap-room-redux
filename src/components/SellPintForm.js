import React from "react";
import PropTypes from "prop-types";

function SellPintForm(props){
  const { tap } = props;

  function handleSellPintFormSubmission(event){
    event.preventDefault();
    if(tap.pints > 0){
      props.onUpdatingTapVolume({name: tap.name, brand: tap.brand, price: tap.price, falvor: tap.flavor, pints: tap.pints - event.target.pintsSold.value, id: tap.id});
    }
  }
  return(
    <React.Fragment>
      <form onSubmit={handleSellPintFormSubmission}>
        <input
          type='number'
          name='pintsSold'
          placeholder='How many pints did you sell?' />
          <button type='submit'>Update keg volume</button>
      </form>
    </React.Fragment>
  );
}

SellPintForm.propTypes = {
  onUpdatingTapVolume: PropTypes.func
};

export default SellPintForm;