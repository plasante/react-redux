import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (thunkAPI) => {
        const res =
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(
                    (response) => response.data
                );
        return res;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: []
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || 'Guest'
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, () => {
                console.log('pending');
            })
            .addCase(fetchUser.fulfilled, (state,action) => {
                console.log('fulfilled');
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, () => {
                console.log('rejected');
            })
    }
});

export const {setType} = usersSlice.actions;
export default usersSlice.reducer;