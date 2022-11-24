import {userLogin, dataSave, logOut, isAuthenticated} from './mutations.js'

export default {
    namespaced: true,
    mutations: {
        dataSave,
        userLogin,
        logOut,
        isAuthenticated
        },

    actions: {
        dataSave({commit}, values){
            commit('dataSave', values)
        },
        userLogin({commit}){
            commit('userLogin')
        },
        logOut({commit}){
            commit('logOut')
        },
        isAuthenticated({commit}){
            commit('isAuthenticated')
        }
    },
}