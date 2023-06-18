import { fireEvent, render, screen } from '@testing-library/react'
import FilterComponent from '../index'

describe('Filter component unit testing', () => {
    it('Component should render count results', () => {
        const PODCAST_COUNT = 20
        render(<FilterComponent podcastCount={PODCAST_COUNT} handlerSearch={() => { }} />)

        expect(screen.getByText(PODCAST_COUNT)).toBeInTheDocument()

    })

    it('Component should call handlerSearch function', () => {
        const PODCAST_COUNT = 20
        const search = jest.fn()

        render(<FilterComponent podcastCount={PODCAST_COUNT} handlerSearch={search} />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'J' } })

        expect(search).toHaveBeenCalled()

    })
})