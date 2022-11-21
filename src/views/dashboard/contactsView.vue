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
        <div>
            <div class="menu-category">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span class="badge bg-danger rounded-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span class="badge bg-danger rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span class="badge bg-danger rounded-pill">1</span>
                </li>
            </ul>
        </div> 
            <contactsCard/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import contactsCard from '../../components/contactsCard.vue';

export default {
    name: "contactsView",
    components: {
        contactsCard
    },

    data() {
        return {
            userName: "",
            token: "",
            userPicture: "",
            totalPeople: 0,
        }
    },
    computed: {

        ...mapGetters({
            userContacts: 'contactsModule/contactsData'
        })
    },
    created() {

        this.getUserInformation()
        
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
                this.totalPeople = data['totalPeople']
                this.$store.dispatch('contactsModule/userContactsFormate', data)
            })            
        },
    }
}

</script>

<style scoped>

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