import { createStore } from 'vuex'
import authModule from './modules/authModule'
import contactsModule from './modules/contactsModule'


export default createStore({
  modules: {
    authModule,
    contactsModule
  }
})
