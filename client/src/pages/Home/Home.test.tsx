import { render, screen } from '@testing-library/react';
import { Home } from './Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

describe('#Home Page', () => {
    it('should display the correct title', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        )
        const title = screen.queryByText(/Home/)
        expect(title).toBeVisible()
    })
})