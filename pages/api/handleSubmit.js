import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { gql } from '@apollo/client';

export default async function handleSubmit(name){
  
  let pom = name.name;

  const variableName = "name: "+pom+" sort:stars-desc";

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer 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`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
const GET_MY_REPO = gql`
query GetRepo($searchName: String!) {
  search(query: $searchName , type: REPOSITORY, first: 10) {
  edges {
    node {
      ... on Repository {
        name
        url
        description
        owner {
          login
          url
        }
        stargazerCount
        primaryLanguage {
          name
        }
      }
    }
  }
}
}
`;
const { data } = await client.query({
  query: GET_MY_REPO,
  variables: { searchName: variableName },
});     
const { search } = data;
const pinnedItems = search.edges.map(edge => edge.node);
      return pinnedItems;
}