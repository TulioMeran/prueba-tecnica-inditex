import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../types/iEpisodeResponse";
import { IPodcast } from "../types/IPodcast";
import { RootState } from "./root";

export interface IPodcastState {
    podcast: IPodcast;
    episode: Episode;
}

export const initialState: IPodcastState = {
    podcast: {} as IPodcast,
    episode: {} as Episode
}

export const slice = createSlice({
    name: 'podcast',
    initialState,
    reducers: {
        setCurrentEpisode: (state, action: PayloadAction<Episode>) => {
            state.episode = action.payload
        },
        setCurrentPodcast: (state, action: PayloadAction<IPodcast>) => {
            state.podcast = action.payload
        }
    }
})

export const { setCurrentEpisode, setCurrentPodcast } = slice.actions

export default slice.reducer;

export const selectCurrentPodcast = (state: RootState) => state.podcast.podcast
export const selectCurrentEpisode = (state: RootState) => state.podcast.episode