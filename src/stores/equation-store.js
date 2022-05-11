import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {history:[]}

const equationSlice = createSlice({
    name:"history",
    initialState:initialState,
    reducers:{createEquation(state, action){
        console.log(action)
        state.history.push(action.payload)
    }
    }
});

export const equationStore = configureStore({reducer:equationSlice.reducer})