import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as constants from '../../constants'
import { IEpisodeResponse } from '../../types/iEpisodeResponse'
import { IPodcastResponse } from '../../types/IPodcast'

export const podcastApi = createApi({
    reducerPath: 'podcastApi',
    baseQuery: fetchBaseQuery({ baseUrl: constants.ITUNES_BASE_URL }),
    keepUnusedDataFor: 86400,
    endpoints: (builder) => ({
        getAllPodCast: builder.query<IPodcastResponse, void>({
            query: () => (constants.PODCAST_ENDPOINT)
        }),
        getAllEpisode: builder.query<IEpisodeResponse, string>({
            query: (id) => constants.EPISODE_ENDPOINT(id)
        })
    })
})

export const { useGetAllPodCastQuery, useGetAllEpisodeQuery } = podcastApi