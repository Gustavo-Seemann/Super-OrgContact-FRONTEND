<template>
    <div>
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button @click="$emit('contatos')" class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><img class="menuIcons" src="../assets/contactsMenu/contacts-icon.svg" width="20">CONTATOS</button>
                    <button @click="$emit('emails')" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><img class="menuIcons" src="../assets/contactsMenu/emails-icon.svg" width="20">EMAILS</button>
                    <button @click="$emit('organizacoes')" class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><img class="menuIcons" src="../assets/contactsMenu/org-icon.svg" width="20">ORGANIZAÇÕES</button>
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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Roboto+Condensed&display=swap');

.menuIcons {
    margin-right: 8px;
    margin-bottom: 3px;
}

.nav-tabs {
    --bs-nav-tabs-link-active-bg: #ebf6fa;
}

.nav-link {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    padding-bottom: 15px;
    padding-top: 15px;
}

</style>