<template>
    <div>
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </div>
            </nav>
        </div>
        <div class="container justify-content-center searchContainer">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control input-text" placeholder="Procure um contato...">
                        <div class="input-group-append">
                            <button class="btn btn-dark btn-lg" type="button">PROCURAR</button>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactsMenu',
}

</script>

<style scoped>

</style>