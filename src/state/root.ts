import { combineReducers } from "@reduxjs/toolkit";
import { podcastApi } from "../api/services";
import podcast from './podcast'

const rootReducer = combineReducers({
    podcast,
    [podcastApi.reducerPath]: podcastApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer