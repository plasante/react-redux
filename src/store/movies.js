import { createSlice } from "@reduxjs/toolkit";
import * as state from "react-dom/test-utils";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [
            {id: 1, title: 'Pulp Fiction'},
            {id: 2, title: 'Red October'}
        ]
    },
    reducers: {

    }
});

export default moviesSlice.reducer;