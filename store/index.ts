import { PlayerType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { getProfile } from '~/graphql/queries/profile'

export type RootState = {
  profile: PlayerType
}

export const state: RootState = {
  profile: {},
}

export const getters: GetterTree<RootState, RootState> = {
  match: (state) => state.profile,
}

export const mutations: MutationTree<RootState> = {
  SET_PROFILE(state: RootState, payload: PlayerType): void {
    state.profile = payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProfile({ commit }, playerId: Number) {
    try {
      await this.app.apolloProvider.defaultClient
        .query({
          query: getProfile,
          variables: {
            playerId,
            matchAmount: 40,
          },
        })
        .then((res) => {
          commit('SET_PROFILE', res.data.player)
        })
    } catch (err) {
      console.log(err)
    }
  },
}