<template>
    <div>
        <div class="contacts-list A">
            <ul class="list-group list-group-light">
                <div v-show="showPerDomain == true" v-for="(itens, index) in $store.state.contactsModule.emailsFiltered" :key="index">
                    <div class="domain-title">
                    <h3>@{{itens['mainDomain']}}</h3>
                    </div>
                    <div v-for="(itens, index) in itens['emails']" :key="index">
                        <li class="list-group-item d-flex">
                            <div>
                                <div class="fw-bold">{{ itens }}</div>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        <div v-show="showOnlyEmails == true" class="contacts-list B">
            <ul class="list-group list-group-light">
                <div class="lists-title">
                </div>
                <div v-for="(itens, index) in $store.state.contactsModule.emails" :key="index">
                    <li class="list-group-item d-flex">
                        <div>
                            <div class="fw-bold">{{ itens }}</div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        <div v-show="showContacts == true" class="contacts-list C">
            <ul class="list-group list-group-light">
                <div class="lists-title">
                </div>
                <div v-for="(itens, index) in $store.state.contactsModule.contacts" :key="index">
                    <li class="list-group-item d-flex">
                        <div>
                            <div class="fw-bold">{{ itens['email'] }}</div>
                            <div class="text-muted">{{itens['name']}}</div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
        <div v-show="showContactsSearch == true" class="contacts-list D">
            <ul class="list-group list-group-light">
                <div class="lists-title">
                </div>
                <div v-for="(itens, index) in $store.state.contactsModule.valores" :key="index">
                    <li class="list-group-item d-flex">
                        <div>
                            <div class="fw-bold">{{ itens }}</div>
                        </div>
                    </li>
                </div>
            </ul>
            <div v-if="$store.state.contactsModule.valores.length == 0">
                <div class="sem-data justify-content-center">
                    <p class="noResult"> Nenhum item encontrado! </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'contactsCard',
    props: {
        showPerDomain: Boolean,
        showOnlyEmails: Boolean,
        showContacts: Boolean,
        showContactsSearch: Boolean,
    },
}
</script>

<style scoped>

.noResult {
    font-weight: bold;
    margin: 10px;
    padding-bottom: 15px;
}

.lists-title {
    background-color: #ebf6fa;
    padding: 20px
}

li {
    border-inline: 0px;
    padding: 10px;
}

h3 {
    margin-left: 10px;
    font-size: 25px;
}
.domain-title {
    background-color: #ebf6fa;
    color:rgb(0, 0, 0);
    padding: 3px;
    padding-top: 10px;
}

.list-group-item {
    flex-direction:column;
    text-align: end
}

.domain-title {
    text-align: start;
}

</style>