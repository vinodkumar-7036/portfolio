import { combineReducers } from "redux";

const initialState = {
  count: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEDATA":
      const newState = Object.assign({}, state, {
        count: [...state.count, action.payload],
      });
      return newState;
    default:
      return state;
  }
};
export default reducer;

const initialStateCombine = {
  count1: [],
};

const reducerCombine = (state = initialStateCombine, action) => {
  switch (action.type) {
    case "SAVEDDATA":
      const newState1 = Object.assign({}, state, {
        count1: [...state.count, action.payload],
      });
      return newState1;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  count: reducer,
  count1: reducerCombine,
});
