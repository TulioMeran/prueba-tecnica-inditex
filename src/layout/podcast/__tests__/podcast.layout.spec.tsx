import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { IPodcast } from '../../../types/IPodcast'
import PodCastLayoutComponent from '../index'

describe('PodCastLayout component unit testing', () => {

    const NAME = "Tulio"
    const ARTIST = "Tulio Meran"

    const childrenTest = () => {
        return (
            <div>
                <h1>children component</h1>
            </div>
        )
    }

    const podcastItem: IPodcast = {
        summary: { label: "summary for test" },
        id: { attributes: { "im:id": "1234" } },
        "im:name": { label: NAME },
        "im:artist": { label: ARTIST },
        "im:image": [{ label: "" }]

    }

    const renderComponent = () => {
        render(<BrowserRouter>
            <PodCastLayoutComponent podcastItem={podcastItem} >
                {childrenTest()}
            </PodCastLayoutComponent>
        </BrowserRouter>)
    }

    it('Component should render children component.', () => {
        renderComponent()
        expect(screen.getByText("children component")).toBeInTheDocument()
    })

    it('Component should render the labels.', () => {
        renderComponent()
        expect(screen.getByText(NAME)).toBeInTheDocument()
        expect(screen.getByText(`by ${ARTIST}`)).toBeInTheDocument()
    })

})