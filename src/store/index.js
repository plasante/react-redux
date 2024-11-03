import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies.js";

export const store = configureStore({

    reducer: {
        movies: moviesReducer
    }
})