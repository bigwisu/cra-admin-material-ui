import { createStore } from 'redux';

const initialState = {
    title: 'Welcome!',
    notif: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case 'SET_TITLE':
        return {...state, title: action.payload};
      case 'INCR_NOTIF':
        return {...state, notif: state.notif + 1};
      case 'DECR_NOTIF':
        return {...state, notif: state.notif - 1};
      default:
        return state;
    }
  }

const store = createStore(rootReducer, initialState);

export default store;