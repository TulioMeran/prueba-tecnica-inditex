import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Episode } from '../../../types/iEpisodeResponse'
import { IPodcast } from '../../../types/IPodcast'
import EpisodePageComponent from '../index'
import configureStore from 'redux-mock-store'

describe('EpisodePage component unit testing', () => {

    it('Component should render episode labels', () => {

        const podcast: IPodcast = {
            summary: { label: "summary for test" },
            id: { attributes: { "im:id": "1234" } },
            "im:name": { label: 'Tulio' },
            "im:artist": { label: 'Tulio Meran' },
            "im:image": [{ label: "" }]
        }

        const NAME = 'Tulio Meran';
        const DESCRIPTION = 'one description'

        const episode: Episode = {
            collectionId: '1',
            collectionName: NAME,
            description: DESCRIPTION,
            episodeGuid: "guid",
            episodeUrl: 'url',
            releaseDate: "2020-12-10",
            trackName: "one track name",
            trackTimeMillis: 234123
        }

        const initialState = {
            podcast: {
                podcast,
                episode
            }
        }

        const mockStore = configureStore()
        let store = mockStore(initialState)

        render(

            <Provider store={store} >
                <BrowserRouter>
                    <EpisodePageComponent />
                </BrowserRouter>
            </Provider>

        )

        expect(screen.getByText(NAME)).toBeInTheDocument()
        expect(screen.getByText(DESCRIPTION)).toBeInTheDocument()
        expect(screen.getByText(`This episode is sponsored by ${NAME}.`)).toBeInTheDocument()


    })


})