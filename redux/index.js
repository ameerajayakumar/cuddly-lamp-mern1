//how to write any redux implementation?
const { createStore } = require('redux');

const initialState = {
  name: 'faisal',
};
const mReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === 'QAIS') {
    newState.name = 'Qais';
  }

  if (action.type === 'AZHAR') {
    newState.name = 'Azhar';
  }
  return newState;
};

const mSubscriber = () => {
  console.log('Name : ' + store.getState().name);
};

const store = createStore(mReducer);
store.subscribe(mSubscriber);
store.dispatch({ type: 'QAIS' });
store.dispatch({ type: 'AZHAR' });
store.dispatch({ type: 'ASAD' });

//Source: https://stackoverflow.com/questions/52215949
