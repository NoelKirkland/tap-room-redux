import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

  const currentState = {
    1: {
      name: 'Ginger Cure',
      brand: 'Brew Dr.',
      price: '4.00',
      flavor: 'ginger and lemon',
      pints: 124,
      id: 1
    },
    2: {
      name: 'Very Berry',
      brand: 'Brew Dr.',
      price: '3.75',
      flavor: 'rasberry and blackberry',
      pints: 124,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });

  let action;
  const tapData = {
    name: 'Ginger Cure',
    brand: 'Brew Dr.',
    price: '4.00',
    flavor: 'ginger and lemon',
    pints: 124,
    id: 1
  }
  test('Should secessfully add new tap data to masterTapList', () => {
    const { name, brand, price, flavor, pints, id } = tapData;
    action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      pints: pints,
      id: id
    };

    expect(tapListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a tap', () => {
    action = {
      type: 'DELETE_TAP',
      id: 1
    };
    expect(tapListReducer(currentState, action)).toEqual({
      2: {
        name: 'Very Berry',
        brand: 'Brew Dr.',
        price: '3.75',
        flavor: 'rasberry and blackberry',
        pints: 124,
        id: 2
      }
    });
  })
});