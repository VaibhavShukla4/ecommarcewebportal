/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import fetching from './reducer/fetching.js';
// Create the logger instance
const logger = createLogger();

// Configure the store
const store = configureStore({
  reducer: {
    fetching: fetching,
  },
  middleware: [logger],
});

export default store;
