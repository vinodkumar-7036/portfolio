import { combineReducers } from "redux";

const initialState = {
  count: [],
  tableData: [],
  count1: [],
  order: "ASC",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATEDATA":
      const newState = Object.assign({}, state, {
        count: [...state.count, action.payload],
      });
      return newState;
    case "TABLE_DATA":
      const addedState = Object.assign({}, state, {
        tableData: [...action.payload.splice(1, 50)],
      });
      return addedState;
    case "CHANGE_SORTING":
      let addedState1;
      if (state.order === "ASC") {
        const clonedData = JSON.parse(JSON.stringify(state));
        addedState1 = Object.assign({}, state, {
          tableData: [
            ...clonedData.tableData.sort((a, b) =>
              a[action.payload].toUpperCase() > b[action.payload].toUpperCase()
                ? 1
                : -1
            ),
          ],
        });
      }
      if (state.order === "DSC") {
        const clonedData = JSON.parse(JSON.stringify(state));
        addedState1 = Object.assign({}, state, {
          tableData: [
            ...clonedData.tableData.sort((a, b) =>
              a[action.payload].toUpperCase() < b[action.payload].toUpperCase()
                ? 1
                : -1
            ),
          ],
        });
      }

      return addedState1;

    default:
      return state;
  }
};
export default reducer;

const reducerCombine = (state = initialState, action) => {
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
