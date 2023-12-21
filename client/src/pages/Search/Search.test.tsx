import { render, screen } from '@testing-library/react';
import { Search } from './Search'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

describe('#Search Page', () => {
    it('should display the correct title', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Search />
            </QueryClientProvider>
        )
        const title = screen.queryByText(/Search/)
        expect(title).toBeVisible()
    })
})