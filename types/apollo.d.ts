import { ApolloProvider } from 'vue-apollo/types/apollo-provider'

declare module '@nuxt/types/app' {
  interface Store {
    apolloProvider: ApolloProvider
  }
}
