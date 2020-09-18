import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tapListReducer({}, { type: null })).toEqual({});
  });
});