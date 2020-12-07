function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action)
    render();
  }

  return  {
    getState,
    dispatch
  }
    
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
const store = createStore(candyReducer)
store.dispatch({type: '@@INIT'})
// Once the store is created, call an initial dispatch.