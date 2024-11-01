import { ApolloClient, InMemoryCache } from '@apollo/client';

// Replace with your subgraph endpoint
const client = new ApolloClient({
    uri: 'https://api.studio.thegraph.com/query/93278/brrr-token/v0.0.10',
    cache: new InMemoryCache(),
});

export default client;