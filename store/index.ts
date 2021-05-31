import { PlayerType } from '@altgen/stratz-types'
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

import { getProfile } from '~/graphql/queries/profile'

@Module
export default class RootModule extends VuexModule {
  profile: PlayerType = {}

  @Mutation
  SET_PROFILE(payload: PlayerType): void {
    this.profile = payload
  }

  @Mutation
  RESET_PROFILE(): void {
    this.profile = {}
  }

  @Action
  async fetchProfile({ commit }, playerId: Number) {
    try {
      await this.store.app.apolloProvider.defaultClient
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
  }
}