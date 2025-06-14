import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from './Slice'

const store = configureStore({
    reducer:{
        sorting: sortingSlice,
    }
})

export default store;