<template>
    <div class='main'>
        <div class='title'>
            <div class="row">
                <div class="col title-1">
                    <h1>Boa tarde {{ userName }}!</h1>
                </div>
                <div class="col title-2">
                    <h3>{{ totalPeople }} Contatos.</h3>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class='contacts-menu'>
                        <contactsMenu/>
                    </div>
                </div>
                <div class="col">
                    <div class='contacts-list'>
                        <contactsCard :showPerDomain="false" :showOnlyEmails="false" :showContacts="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import contactsCard from '../../components/contactsCard.vue';
import contactsMenu from '../../components/contactsMenu.vue';

export default {
    name: "contactsView",
    components: {
        contactsCard,
        contactsMenu
    },

    data() {
        return {
            userName: "",
            token: "",
            userPicture: "",
        }
    },
    computed: {

        ...mapGetters({
            userContacts: 'contactsModule/contactsData',
            totalPeople: 'contactsModule/contactsLength'
        })
    },
    created() {

        this.getUserInformation()
        this.$store.dispatch('contactsModule/atualizaDados')
        
    },
    methods: {
        async getUserInformation() {
            this.$store.dispatch('authModule/isAuthenticated')
            let user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                user = user[0];
            }
            this.userName = user['user_name'];
            this.userPicture = user['picture'];
            this.token = user['token'];
            axios.post('http://localhost:5000/contacts/get', { token: this.token })
            .then( (response) => {
                let data = response.data
                this.$store.dispatch('contactsModule/userContactsFormate', data)
            })            
        },
    }
}

</script>

<style scoped>

.container {
    margin: 0px;
    width: 100%;
}

.contacts-list {
    margin: 30px
}

.title {
    margin: 40px;
    margin-left: 100px;
}
.title-1{
    text-align: start;
}

h1 {
    font-size: 70px;
    font-weight: 600;
}
.title-2{
    text-align: end;
}
</style>