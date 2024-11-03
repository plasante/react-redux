import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies.js";
import usersReducer from "./users.js";

export const store = configureStore({

    reducer: {
        movies: moviesReducer,
        users: usersReducer
    }
})