<template>
    <div>
        <h1>Boa tarde {{ userName }}</h1>
    </div>
</template>

<script>
export default {
    name: "contactsView",

    data() {
        return {
            userName: "Gustavo"
        }
    }
}

</script>

<style scoped>
div {
    text-align: start;
}
</style>