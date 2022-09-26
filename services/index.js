import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Authors {
        authors {
          bio
          createdAt
          id
          name
          publishedAt
          updatedAt
        }
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              catagories {
                name
                slug
              }
            }
          }
        }
      }
      
    `

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges;
}