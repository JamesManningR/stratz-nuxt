
import { SteamAccountType } from '@altgen/stratz-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { getProfile } from '~/graphql/queries/profile'

export type RootState = {
  profile: SteamAccountType
}

export const state: RootState = {
  profile: {
    id: 0,
    profileUri: '',
    isAnonymous: false,
    isStratzAnonymous: false,
  },
}

export const getters: GetterTree<RootState, RootState> = {
  match: (state) => state.profile,
}

export const mutations: MutationTree<RootState> = {
  SET_PROFILE(state: RootState, payload: SteamAccountType): void {
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