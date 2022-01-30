import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import toastNotification from "../../components/Notifications/notification";
import "react-toastify/dist/ReactToastify.css";

const initialContatcts = [
  { id: "id-1", name: "James Gunn", number: "439-23-65" },
  { id: "id-2", name: "Peter Quell", number: "489-69-98" },
  { id: "id-3", name: "Eden Hazard", number: "125-90-79" },
  { id: "id-4", name: "Tom Holland", number: "342-54-41" },
];

const items = createReducer(initialContatcts, {
  [actions.addContact]: (state, { payload }) => {
    const result = state.some((contact) => contact.name === payload.name);
    if (result) {
      toastNotification(payload.name);
    } else {
      return [...state, payload];
    }
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
