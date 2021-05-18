import { ApiResponse, MatchType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { State as RootState } from '../types'
import { State, Actions, Mutations } from './types'
import { getMatch, getMatches } from '~/graphql/queries/matches'

export const namespaced = true

export const state: State = {
  match: {},
  matches: [],
}

export const getters: GetterTree<State, RootState> = {
  match: (state) => state.match,
}

export const mutations: MutationTree<State> = {
  [Mutations.RESET_MATCH](state: State): void {
    state.match = {}
  },
  [Mutations.SET_MATCH](state: State, payload: MatchType): void {
    state.match = payload
  },
  [Mutations.RESET_MATCHES](state: State): void {
    state.matches = []
  },
  [Mutations.SET_MATCHES](state: State, payload: MatchType[]): void {
    state.matches = payload
  },
  [Mutations.ADD_MATCH_TO_MATCHES](state: State, payload: MatchType): void {
    const updatedMatches = [...state.matches, payload]
    state.matches = updatedMatches
  },
  [Mutations.REMOVE_MATCH_FROM_MATCHES](state: State, id: number) {
    const updatedMatches = state.matches.filter((match) => {
      return match.id !== id
    })
    state.matches = updatedMatches
  },
}

export const actions: ActionTree<State, RootState> = {
  async [Actions.fetchMatch]({ commit }) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getMatch,
          variables: {
            matchId: 5985270662,
          },
        })
        .then((res: ApiResponse) => {
          commit(Mutations.SET_MATCH, res.data.match)
        })
    } catch (err) {
      console.log(err)
    }
  },

  async [Actions.fetchMatches]({ commit }) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getMatches,
          variables: {
            matchIds: [
              5980625840, 5986859466, 5984932062, 5973326275, 5973781427,
            ],
          },
        })
        .then((res: ApiResponse) => {
          commit(Mutations.SET_MATCHES, res.data.matches)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
