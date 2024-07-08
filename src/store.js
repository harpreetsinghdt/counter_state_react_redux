// store.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/components/reducers/reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
