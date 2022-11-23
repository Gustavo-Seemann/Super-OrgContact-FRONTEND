<template>
    <div>
        <div>
            <navBar :nameDisplay=this.userName :userImg=this.userPicture />
        </div>
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

.container {
    width: 100%;
    align-items: center;
}

.contacts-list {
    margin-inline: 30px
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