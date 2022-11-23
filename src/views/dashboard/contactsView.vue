<template>
    <div class="body-page">
        <div>
            <navBar :nameDisplay=this.userName :userImg=this.userPicture />
        </div>
        <div class='main'>
            <div class="container">
                <div class="col">
                    <div class='contacts-list'>
                        <contactsMenu/>
                        <contactsCard :showPerDomain="true" :showOnlyEmails="false" :showContacts="false" />
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
import navBar from '../../components/navBar.vue';


export default {
    name: "contactsView",
    components: {
        contactsCard,
        contactsMenu,
        navBar,
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

.main {
    padding-top: 60px;
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