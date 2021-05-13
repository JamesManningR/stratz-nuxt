// TODO: Fix this and allow for the use of .gql file type
import gql from 'graphql-tag'

export const getMatch = gql`
  query getMatch($matchId: Long!) {
    match(id: $matchId) {
      players {
        hero {
          displayName
          shortName
        }
        steamAccount {
          id
          name
        }
        isVictory
        isRadiant
        role
        lane
        kills
        deaths
        assists
        goldPerMinute
        experiencePerMinute
      }
    }
  }
`
