import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

describe('renders links', () => {
  const client = new ApolloClient({
  uri: '/',
  cache: new InMemoryCache(),
})
  it('render nouveau wilder link', () => {
    render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
    );
    const linkElement = screen.getByText(/Nouveau Wilder/i)
    expect(linkElement).toBeInTheDocument()
  })
});
