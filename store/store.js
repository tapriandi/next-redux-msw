import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import shoes from "./shoesSlice";

const rootReducer = combineReducers({
  shoes,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    console.log("<< HYDRATE >>")
    const nextState = {
      ...state,
      shoes: [...action.payload.shoes, ...state.shoes],
    };
    return nextState;
  } else {
    console.log(">> No HYDRATE <<")
    return rootReducer(state, action);
  }
};

export const createStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(createStore, { debug: true });
