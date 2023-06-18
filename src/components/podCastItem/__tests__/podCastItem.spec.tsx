import { fireEvent, render, screen } from '@testing-library/react'
import PodCastItemComponent from '../index'

describe('PodCastItem component unit testing', () => {

    it('Component should render labels', () => {
        const AUTHOR = "Tulio"
        const TITLE = "Titulo"
        render(<PodCastItemComponent author={AUTHOR} img='' title={TITLE} onClick={() => { }} />)

        expect(screen.getByText(`Author: ${AUTHOR}`)).toBeInTheDocument()
        expect(screen.getByText(TITLE)).toBeInTheDocument()

    })

    it('Component should call onClick function', () => {
        const clickFn = jest.fn()
        render(<PodCastItemComponent author='' img='' title='' onClick={clickFn} />)
        fireEvent.click(screen.getByTestId('podcastitem'))
        expect(clickFn).toHaveBeenCalled()
    })

})