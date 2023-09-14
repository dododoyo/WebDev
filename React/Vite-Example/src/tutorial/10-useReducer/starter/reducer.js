import { REMOVE_ITEM,RESET_LIST,CLEAR_LIST } from "./actions";
import { data } from "../../../data";
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    // console.log(action);
    let newData = state.people.filter(
      (eachPerson) => eachPerson.id !== action.payload.id
    );
    return { ...state, people: newData };
  }

  throw new Error(`No match for action ${action.type}`);
};

export default reducer;