import { INPUT, SUBMIT } from './actions';

export const initialState = {
  inputValue: '',
  repositories: []
};

export const reducer = (state, action) => {
  switch(action.type){
    case INPUT:
      return {
        ...state,
        inputValue: action.payload
      }; 
    case SUBMIT: 
      return {
        ...state,
        repositories: action.payload
      };
    default:
      return state;
  }
};
