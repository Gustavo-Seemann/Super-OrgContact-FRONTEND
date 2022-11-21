<template>
    <div>
        <div class="contacts-list A">
            <ul class="list-group list-group-light">
                <div v-for="(itens, index) in $store.state.contactsModule.contacts" :key="index">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                        <div class="fw-bold">{{ itens['name'] }}</div>
                        <div class="text-muted">{{ itens['email'] }}</div>
                        </div>
                        <span class="badge rounded-pill badge-success">Active</span>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'contactsCard',
}
</script>

<style scoped>


</style>