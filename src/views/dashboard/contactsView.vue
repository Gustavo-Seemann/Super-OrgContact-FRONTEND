<template>
    <div class="secondary-body body-page">
        <div class="container-fluid body-page">
            <div>
                <navBar :nameDisplay=this.userName @click="UpdateComponents" :userImg=this.userPicture />
            </div>
            <div class="search-div">
                <searchBar v-on:searched="ShowSearchEmails"/>
            </div>
            <div class='main'>
                <div class="container">
                    <div class="col">
                        <div class='contacts-list'>
                            <contactsMenu @click="UpdateComponents" v-on:emails="showAllEmails" v-on:contatos="showAllContacts" v-on:organizacoes="showAllDomains" />
                            <contactsCard :showContactsSearch="this.search" :showPerDomain=this.domain :showOnlyEmails="this.emails" :showContacts="this.contatos" :key="`${componentKey}-2`" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import contactsCard from '../../components/contactsCard.vue';
import contactsMenu from '../../components/contactsMenu.vue';
import searchBar from '../../components/searchBar.vue';
import navBar from '../../components/navBar.vue';
import store from '../../store/index';


export default {
    name: "contactsView",
    components: {
        contactsCard,
        contactsMenu,
        navBar,
        searchBar
    },

    data() {
        return {
            userName: "",
            token: "",
            userPicture: "",
            contatos: true,
            emails: false,
            domain: false,
            search: false,
            componentKey: 0,
        }
    },
    computed: {

        ...mapGetters({
            userContacts: 'contactsModule/contactsData',
            totalPeople: 'contactsModule/contactsLength'
        })
    },
    beforeCreate() {
        store.dispatch('contactsModule/getUserInformation')
    },
    created() {

        this.getUserInfo()
        store.dispatch('contactsModule/atualizaDados')
        
    },

    methods: {
        async getUserInfo() {
            this.$store.dispatch('authModule/isAuthenticated')
            let user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                user = user[0];
            }
            this.userName = user['user_name'];
            this.userPicture = user['picture'];
            this.token = user['token'];
        },
        showAllEmails() {
            this.domain = false
            this.contatos = false
            this.emails = true
            this.search = false
        },
        showAllContacts() {
            this.domain = false
            this.contatos = true
            this.emails = false
            this.search = false
        },
        showAllDomains() {
            this.domain = true
            this.contatos = false
            this.emails = false
            this.search = false
        },
        ShowSearchEmails() {
            this.domain = false
            this.contatos = false
            this.emails = false
            this.search = true
        },
        UpdateComponents() {
            this.componentKey++;
        }
    }
}

</script>

<style scoped>

.search-div {
    padding-top: 60px;
}

.main {
    padding-top: 10px;
}

.secondary-body {
    height: 100vh;
}

.body-page {
    background-color: #f2f5f6;
}

.container {
    background-color: white;
    padding: 0px;
    border-radius: 10px;
}

.container {
    width: 100%;
    align-items: center;
}

@media (min-width: 1400px){
.container {
        max-width: 95%;
    }
}
</style>