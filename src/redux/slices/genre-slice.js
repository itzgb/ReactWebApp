import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGenre } from "services/GenreServices";

const initialState = {
    loading: false,
    hasErrors: false,
    genres: [],
    genreCount:0
} 
const genreSlice = createSlice({
    name:'genres',
    initialState,
    reducers:{
        getGenres(state){
            state.loading = true;
        },
        getGenreSuccess(state , action){
            state.genres = action.payload[0]
            state.genreCount = action.payload[1]
            state.loading = false
            state.hasErrors = false
        },
        getGenreFailure(state){
            state.loading = false;
            state.hasErrors = true;
        },
    }
})


export const {getGenres , getGenreFailure , getGenreSuccess} = genreSlice.actions;

export const genreSelector = state => state.genres;

export default genreSlice;

export const fetchGenreData = (props) => {
    
    return async dispatch => {
        dispatch(getGenres())
        try{
            const response = await fetchAllGenre(props) ;
            console.log('dispatch',response)
            const data = response.data;
            dispatch(getGenreSuccess(data))
        }catch(error){
            console.log(error)
            dispatch(getGenreFailure())
        }
    }
        
}