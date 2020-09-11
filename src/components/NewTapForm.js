import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTapForm(props){

  function handleNewTapFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, pints: 124, id: v4()});
  } 

  return (
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Kombucha Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
          <input
          type='text'
          name='flavor'
          placeholder='Flavor' /> 
          <button type='submit'>Add keg</button>
      </form>
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm;