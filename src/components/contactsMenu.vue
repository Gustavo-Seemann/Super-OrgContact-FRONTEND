<template>
    <div>
        <div class="menu-category">
            <ul class="list-group" v-for="(itens, index) in $store.state.contactsModule.emailsFiltered" :key="index">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    {{itens['mainDomain']}}
                    <span class="badge bg-danger rounded-pill">{{itens['emails'].length}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>