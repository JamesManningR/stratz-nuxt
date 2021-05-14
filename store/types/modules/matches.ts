import { MatchType } from '@altgen/stratz-types'

export type MatchState = {
  match: MatchType
  matches: MatchType[]
}

export enum MatchMutations {
  RESET_MATCH = 'RESET_MATCH',
  SET_MATCH = 'SET_MATCH',
  RESET_MATCHES = 'RESET_MATCHES',
  SET_MATCHES = 'SET_MATCHES',
  ADD_MATCH_TO_MATCHES = 'ADD_MATCH_TO_MATCHES',
  REMOVE_MATCH_FROM_MATCHES = 'REMOVE_MATCH_FROM_MATCHES',
}

export enum MatchActions {
  fetchMatch = 'fetchMatch',
  fetchMatches = 'fetchMatches',
}
