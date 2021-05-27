import { MatchType } from '~/graphql/types/stratz-api-types'

export interface State {
  match: MatchType
  matches: MatchType[]
}

export enum Mutations {
  RESET_MATCH = 'RESET_MATCH',
  SET_MATCH = 'SET_MATCH',
  RESET_MATCHES = 'RESET_MATCHES',
  SET_MATCHES = 'SET_MATCHES',
  ADD_MATCH_TO_MATCHES = 'ADD_MATCH_TO_MATCHES',
  REMOVE_MATCH_FROM_MATCHES = 'REMOVE_MATCH_FROM_MATCHES',
}

export enum Actions {
  fetchMatch = 'fetchMatch',
  fetchMatches = 'fetchMatches',
}
