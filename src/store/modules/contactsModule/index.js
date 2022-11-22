import { userContactsFormate } from './mutations.js'

export default {
    namespaced: true,
    states() {
        return {
            contacts: "",
        }
    },
    getters: {
        contactsData (state) {
          return state.contacts
        },
    },
    mutations: {
        userContactsFormate,
        },

    actions: {
        userContactsFormate({commit}, values){
            commit('userContactsFormate', values)
        },
    }
}