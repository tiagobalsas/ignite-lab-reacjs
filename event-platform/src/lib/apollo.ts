import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7p3g5123e01xx2e4p1ypf/master',
  cache: new InMemoryCache(),
});
