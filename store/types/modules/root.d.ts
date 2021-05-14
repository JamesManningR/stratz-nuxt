import { PlayerType } from '@altgen/stratz-types'

export type RootState = {
  profile: PlayerType
}

export enum RootMutations {
  RESET_PROFILE = 'RESET_PROFILE',
  SET_PROFILE = 'SET_PROFILE',
}

export enum RootActions {
  fetchProfile = 'fetchProfile',
}
