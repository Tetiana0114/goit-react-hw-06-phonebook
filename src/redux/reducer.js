import { combineReducers } from "redux";
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReducer(state.contacts, action),
//     filter: filterReducer(state.filter, action),
//   };
// };

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});