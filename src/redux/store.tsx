import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
// import autreReducer from './autreSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		//autre : autreReducer,
	}
});