import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { podcastContext } from '../../../contexts/podcast'
import { Episode } from '../../../types/iEpisodeResponse'
import { IPodcast } from '../../../types/IPodcast'
import EpisodePageComponent from '../index'

describe('EpisodePage component unit testing', () => {

    it('Component should render episode labels', () => {

        const setCurrentEpisode = jest.fn()
        const setCurrentPodCast = jest.fn()


        const currentPodCast: IPodcast = {
            summary: { label: "summary for test" },
            id: { attributes: { "im:id": "1234" } },
            "im:name": { label: 'Tulio' },
            "im:artist": { label: 'Tulio Meran' },
            "im:image": [{ label: "" }]
        }

        const NAME = 'Tulio Meran';
        const DESCRIPTION = 'one description'

        const currentEpisode: Episode = {
            collectionId: '1',
            collectionName: NAME,
            description: DESCRIPTION,
            episodeGuid: "guid",
            episodeUrl: 'url',
            releaseDate: "2020-12-10",
            trackName: "one track name",
            trackTimeMillis: 234123
        }

        render(
            <BrowserRouter>
                <podcastContext.Provider value={{ setCurrentEpisode, setCurrentPodCast, currentPodCast, currentEpisode, podcasts: [] }} >
                    <EpisodePageComponent />
                </podcastContext.Provider>
            </BrowserRouter>
        )

        expect(screen.getByText(NAME)).toBeInTheDocument()
        expect(screen.getByText(DESCRIPTION)).toBeInTheDocument()
        expect(screen.getByText(`This episode is sponsored by ${NAME}.`)).toBeInTheDocument()


    })


})