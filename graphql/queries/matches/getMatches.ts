// TODO: Fix this and allow for the use of .gql file type
import gql from 'graphql-tag'

export const getMatches = gql`
  query getMatches($matchIds: [Long]!) {
    matches(ids: $matchIds) {
      players {
        hero {
          displayName
          name
        }
        isRadiant
      }
      didRadiantWin
      statsDateTime
      endDateTime
    }
  }
`
