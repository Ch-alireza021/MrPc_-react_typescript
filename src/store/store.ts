import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../features/rootReducers";
import { createLogger } from 'redux-logger';


const logger = createLogger();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
