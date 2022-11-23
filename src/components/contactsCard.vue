<template>
    <div>
        <div class="contacts-list A">
            <ul class="list-group list-group-light">
                <div v-show="showPerDomain == true" v-for="(itens, index) in $store.state.contactsModule.emailsFiltered" :key="index">
                    <div class="domain-title">
                    <h3>{{itens['mainDomain']}}</h3>
                    </div>
                    <div v-for="(itens, index) in itens['emails']" :key="index">
                        <li class="list-group-item d-flex">
                            <div>
                                <div class="fw-bold">{{ itens }}</div>
                                <div class="text-muted">teste</div>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        <div class="contacts-list B">
            <ul class="list-group list-group-light">
                <div v-show="showOnlyEmails == true" v-for="(itens, index) in $store.state.contactsModule.emails" :key="index">
                    <li class="list-group-item d-flex">
                        <div>
                            <div class="fw-bold">{{ itens }}</div>
                            <div class="text-muted">teste</div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        <div class="contacts-list C">
            <ul class="list-group list-group-light">
                <div v-show="showContacts == true" v-for="(itens, index) in $store.state.contactsModule.contacts" :key="index">
                    <li class="list-group-item d-flex">
                        <div>
                            <div class="fw-bold">{{ itens['email'] }}</div>
                            <div class="text-muted">{{itens['name']}}</div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'contactsCard',
    props: {
        showPerDomain: Boolean,
        showOnlyEmails: Boolean,
        showContacts: Boolean
    },
}
</script>

<style scoped>

li {
    border-inline: 0px;
}

h3 {
    margin-left: 10px;
}
.domain-title {
    background-color: #dceef4;
    color:rgb(0, 0, 0);
    padding: 3px;
}

.list-group-item {
    flex-direction:column;
    text-align: end
}

.domain-title {
    text-align: start;
}

</style>