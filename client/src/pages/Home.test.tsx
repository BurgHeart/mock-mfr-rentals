import { render, screen } from '@testing-library/react';
import { Home } from './Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

describe('#Home Page', () => {
    it('should display the correct frontend title', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        )
        const frontend = screen.queryByText(/Welcome to MFR Rentals from the Frontend!/)
        expect(frontend).toBeVisible()
    })
    it('should display the correct backend title', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        )
        const backend = screen.findByText(/Welcome to MFR Rentals from the Backend!/)
        expect(backend).toBeVisible()
    })
})