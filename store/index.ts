import { PlayerType } from '~/graphql/types/stratz-api-types'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { State, Actions, Mutations } from './types'
import { getProfile } from '~/graphql/queries/profile'

export const state: State = {
  profile: {},
}

export const getters: GetterTree<State, State> = {
  match: (state) => state.profile,
}

export const mutations: MutationTree<State> = {
  [Mutations.SET_PROFILE](state: State, payload: PlayerType): void {
    state.profile = payload
  },
  [Mutations.RESET_PROFILE](state: State): void {
    state.profile = {}
  },
}

export const actions: ActionTree<State, State> = {
  async [Actions.fetchProfile]({ commit }, playerId: Number) {
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
