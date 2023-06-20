import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { podcastApi } from '../api/services'
import reducer from './root'

export const setupStore = () => {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(podcastApi.middleware)
    })
}

const store = setupStore();

setupListeners(store.dispatch)

export default store