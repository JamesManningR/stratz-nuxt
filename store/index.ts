import { PlayerType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { RootState, RootActions, RootMutations } from './types'
import { getProfile } from '~/graphql/queries/profile'

export const state: RootState = {
  profile: {},
}

export const getters: GetterTree<RootState, RootState> = {
  match: (state) => state.profile,
}

export const mutations: MutationTree<RootState> = {
  [RootMutations.SET_PROFILE](state: RootState, payload: PlayerType): void {
    state.profile = payload
  },
  [RootMutations.RESET_PROFILE](state: RootState): void {
    state.profile = {}
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async [RootActions.fetchProfile]({ commit }, playerId: Number) {
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
