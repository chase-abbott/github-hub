import { INPUT } from './actions';

export const initialState = {
  inputValue: ''
};

export const reducer = (state, action) => {
  switch(action.type){
    case INPUT:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};
