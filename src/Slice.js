import { createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
    name:'sorting',
    initialState:{
        sortingAlgorithm: "Bubble sort",
        sortingArray: [],
        isSorting: false,
        speed:200
    },

    reducers:{
        setAlgorithm: (state, action)=>{
            state.sortingAlgorithm = action.payload;
        },
        setArray:(state, action)=>{
            state.sortingArray = action.payload
        },
        startSorting:(state)=>{
            state.isSorting = true;
        },
        stopSorting:(state)=>{
            state.isSorting = false;
        },
        setSpeed:(state, action)=>{
            state.speed = action.payload;
        }
    },
});

export const{setAlgorithm, setArray, startSorting, stopSorting, setSpeed} = sortingSlice.actions;
export default sortingSlice.reducer;