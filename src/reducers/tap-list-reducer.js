export default (state = {}, action) => {
  const { name, brand, price, flavor, pints, id } = action;
  switch (action.type){
    case 'ADD_TAP':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          pints: pints,
          id: id
        }
      });
      default:
        return state;
  }
};