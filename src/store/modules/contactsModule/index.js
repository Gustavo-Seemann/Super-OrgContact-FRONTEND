import { userContactsFormate, atualizaDados} from './mutations.js'

export default {
    namespaced: true,
    states() {
        return {
            contacts: "",
            emailsFiltered: "",
            emails: "",
            user: "",
        }
    },
    getters: {
        contactsData (state) {
          return state.contacts
        },
        contactsLength (state) {
            return state.contacts.length
          },
        emailsFilteredData (state) {
            return state.emailsFiltered
          },
        emailsData (state) {
            return state.emails
          },
        userData (state) {
            return state.user
        },
    },
    mutations: {
        userContactsFormate,
        atualizaDados
        },

    actions: {
        userContactsFormate({commit}, values){
            commit('userContactsFormate', values)
        },
        atualizaDados({commit}){
            commit('atualizaDados')
        }
    }
}