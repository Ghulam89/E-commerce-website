import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { base_url } from "../utils/BaseURL";
import STATUS from '../utils/status';

const initialState = {
    categories:[],
    categoriesStatus:STATUS.IDLE,
    categoryProducts:[],
    categoryProductsStatus:STATUS.IDLE,
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncCategories.pending,(state,action)=>{

        })
    }
});


export const fetchAsyncCategories =createAsyncThunk('categories/fetch',async()=>{
    
     const response = await fetchAsyncCategories

     
})