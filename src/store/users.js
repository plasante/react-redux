import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (obj,thunkAPI) => {

        console.log(thunkAPI);
        thunkAPI.dispatch(testAsyncDispatch());

        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            return resp.data;
        } catch (error) {
            return error;
        }
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: [],
        loading: false
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || 'Guest'
        },
        testAsyncDispatch: (state) => {
            state.test = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                console.log('Fetching users');
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state,action) => {
                console.log('Fetched users');
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                console.log('Error Fetching users', action.payload);
                state.loading = false;
            })
    }
});

export const {setType, testAsyncDispatch} = usersSlice.actions;
export default usersSlice.reducer;