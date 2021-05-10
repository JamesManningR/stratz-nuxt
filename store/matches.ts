import { MatchType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { RootState } from './index'
import { getMatch, getMatches } from '~/graphql/queries/matches'

export type MatchState = {
  match: MatchType
  matches: MatchType[]
}

export const namespaced = true

export const state: MatchState = {
  match: {},
  matches: [],
}

export const getters: GetterTree<MatchState, RootState> = {
  match: (state) => state.match,
}

export const mutations: MutationTree<MatchState> = {
  SET_MATCH(state: MatchState, payload: MatchType): void {
    state.match = payload
  },
}

export const actions: ActionTree<MatchState, RootState> = {
  async fetchMatch({ commit }) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getMatch,
          variables: {
            matchId: 5985270662,
          },
        })
        .then((res) => {
          commit('SET_MATCH', res.data.match)
        })
    } catch (err) {
      console.log(err)
    }
  },

  async fetchMatches({ commit }) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getMatches,
          variables: {
            matchIds: [
              5980625840,
              5986859466,
              5984932062,
              5973326275,
              5973781427,
            ],
          },
        })
        .then((res) => {
          commit('SET_MATCHES', res.data.matches)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
