import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HeaderComponent from '../index'

describe('Header component unit testing', () => {

    it('Component should render tittle', () => {
        const HEADER_TITLE = "Podcaster"
        render(<BrowserRouter>
            <HeaderComponent />
        </BrowserRouter>)
        expect(screen.getByText(HEADER_TITLE)).toBeInTheDocument()

    })
})