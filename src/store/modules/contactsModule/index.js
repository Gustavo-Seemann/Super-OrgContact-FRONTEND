import { userContactsFormate, atualizaDados, pesquisaEmail, getUserInformation} from './mutations.js'

export default {
    namespaced: true,
    states() {
        return {
            contacts: "",
            emailsFiltered: "",
            emails: "",
            user: "",
            valorProcura: "",
            valores: [],
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
        valoresData (state) {
            return state.valores
        },
    },
    mutations: {
        userContactsFormate,
        atualizaDados,
        pesquisaEmail,
        getUserInformation,
        },

    actions: {
        userContactsFormate({commit}, values){
            commit('userContactsFormate', values)
        },
        atualizaDados({commit}){
            commit('atualizaDados')
        },
        pesquisaEmail({commit}, NewValue){
            commit('pesquisaEmail', NewValue)
        },
        getUserInformation({commit}){
            commit('getUserInformation')
        }
    },
}