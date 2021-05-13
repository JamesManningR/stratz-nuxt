import gql from 'graphql-tag'

export const getProfile = gql`
  query getProfile($playerId: Long!, $matchAmount: Int = 10) {
    player(steamAccountId: $playerId) {
      steamAccount {
        avatar
        name
        cityId
        id
        isDotaPlusSubscriber
        profileUri
      }
      behaviorScore
      isFollowed
      winCount
      matchCount
      matches(request: { take: $matchAmount }) {
        id
        didRadiantWin
        startDateTime
        endDateTime
        players(steamAccountId: $playerId) {
          hero {
            displayName
            shortName
          }
          isVictory
          isRadiant
          role
          lane
          kills
          deaths
          assists
          goldPerMinute
        }
      }
    }
  }
`
