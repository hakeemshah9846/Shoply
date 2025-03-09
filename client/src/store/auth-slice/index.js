import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated : false,
    isLoading : true,
    user : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {}
    },
});

export const loginUser = createAsyncThunk(
    "/auth/login",
    async (formData) => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            formData,
            {
                withCredentials : true,
            }
        )

        return response.data;
    }
);


export default authSlice.reducer;