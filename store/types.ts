import { PlayerType } from '@altgen/stratz-types'

export interface State {
  profile: PlayerType
}

export enum Mutations {
  RESET_PROFILE = 'RESET_PROFILE',
  SET_PROFILE = 'SET_PROFILE',
}

export enum Actions {
  fetchProfile = 'fetchProfile',
}
