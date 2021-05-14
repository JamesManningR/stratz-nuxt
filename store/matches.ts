import { ApiResponse, MatchType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { RootState, MatchState, MatchActions, MatchMutations } from './types'
import { getMatch, getMatches } from '~/graphql/queries/matches'

export const namespaced = true

export const state: MatchState = {
  match: {},
  matches: [],
}

export const getters: GetterTree<MatchState, RootState> = {
  match: (state) => state.match,
}

export const mutations: MutationTree<MatchState> = {
  [MatchMutations.RESET_MATCH](state: MatchState): void {
    state.match = {}
  },
  [MatchMutations.SET_MATCH](state: MatchState, payload: MatchType): void {
    state.match = payload
  },
  [MatchMutations.RESET_MATCHES](state: MatchState): void {
    state.matches = []
  },
  [MatchMutations.SET_MATCHES](state: MatchState, payload: MatchType[]): void {
    state.matches = payload
  },
  [MatchMutations.ADD_MATCH_TO_MATCHES](
    state: MatchState,
    payload: MatchType
  ): void {
    const updatedMatches = [...state.matches, payload]
    state.matches = updatedMatches
  },
  [MatchMutations.REMOVE_MATCH_FROM_MATCHES](state: MatchState, id: number) {
    const updatedMatches = state.matches.filter((match) => {
      return match.id !== id
    })
    state.matches = updatedMatches
  },
}

export const actions: ActionTree<MatchState, RootState> = {
  async [MatchActions.fetchMatch]({ commit }) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getMatch,
          variables: {
            matchId: 5985270662,
          },
        })
        .then((res: ApiResponse) => {
          commit(MatchMutations.SET_MATCH, res.data.match)
        })
    } catch (err) {
      console.log(err)
    }
  },

  async [MatchActions.fetchMatches]({ commit }) {
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
          commit(MatchMutations.SET_MATCHES, res.data.matches)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
