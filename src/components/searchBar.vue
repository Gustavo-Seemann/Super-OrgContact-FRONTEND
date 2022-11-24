<template>
    <div>
        <div class="container justify-content-center searchContainer">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input @keyup="$emit('searched')" type="text" class="form-control input-text" placeholder="Procure um email..." v-model="itensFiltered">
                        <div class="input-group-append">
                            <button class="btn btn-lg" type="button"><img src="../assets/contactsMenu/search-icon.svg" width="20"></button>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'searchBar',

    computed: {
        itensFiltered: {
            get() {
                return this.$store.state.contactsModule.valorProcura
            },
            set(NewValue) {
                this.$store.dispatch('contactsModule/pesquisaEmail', NewValue)
            }
        }
    }

}

</script>

<style scoped>

.input-group {
    background-color: #ebf6fa;
    border-radius: 5px;
}

input {
    border: 0px;
    background-color: #ebf6fa;
}

</style>