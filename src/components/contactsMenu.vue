<template>
    <div>
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Contatos</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Todos os Emails</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Organizações</button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactsMenu'
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