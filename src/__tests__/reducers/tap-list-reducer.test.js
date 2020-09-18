import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {

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

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });
});