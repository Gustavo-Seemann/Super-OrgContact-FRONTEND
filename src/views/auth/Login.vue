<template>
    <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div >
    <div class="body">
        <div class="divupper">
            <div class="container context">
                <div class="title">
                    <img src="../../assets/contactsMenu/logoSite.svg" width="100">
                    <h1>Bem vindo ao <span class="appTitle">Super OrgContact</span>!</h1>
                    <h2 class="titleDescription line-1 anim-typewriter">A lista de contatos da sua conta Google.</h2>
                </div>
                <div class="row">
                    <transition name="fade">
                    <div v-if="showColOne" class="colOne">
                        <div class="imgLogin">
                            <button type="button" class="btn btn-danger loginBtn" @click="getUserData" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"><path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/></svg>Entrar com Google!</button>
                        </div>
                        <div class="googleImg">
                            <img src="../../assets/contactsMenu/google.svg" alt="Logo da Google" width="100">
                        </div>
                    </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import axios from "axios";

export default {
    name: "Login",

    data() {
        return {
            showColOne: false,
            dataUser: {
                token: "",
                expiry: "",
                user_name: "",
                picture: ""
            },
        }
    },
    mounted() {
        this.showColOne = true
    },
    created() {
        this.getParamsData()
    },
    methods: {
        async getUserData() {
                await axios.post(`https://super-orgcontact-369704.uc.r.appspot.com/users/auth/google`)
				.then( response => window.open(response.data.url))
				.catch( error => console.log(error))
        },
        getParamsData() {
                const urlParams = new URLSearchParams(window.location.search);
                this.dataUser['token'] = urlParams.get('token');
                this.dataUser['expiry'] = urlParams.get('expiry');
                this.dataUser['picture'] = urlParams.get('picture');
                this.dataUser['user_name'] = urlParams.get('user_name');
                this.$store.dispatch('authModule/dataSave', this.dataUser)
                .then(() => {
                    this.$store.dispatch('authModule/userLogin', this.dataUser);
                })
        },
    }
}
</script>
  
  
<style scoped>

.body {
    justify-content: center;
}

.googleImg {
    margin: 20px;
    margin-top: 200px;
}

.title {
    margin-top: 15%;
}

.appTitle {
    text-shadow: 
    -2px 2px 0px rgb(159, 3, 3),
    2px 2px 0px #01c4ff;
}

*{
    margin: 0px;
    padding: 0px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
.fade-enter-active {
    transition: all 2s ease;
}

.imgLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
}

.title {
    align-items: center;
    justify-content: center;
    width: 100%;
}

.container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.colOne {
    margin: 10px;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    width: 55%;

}

.row {
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    font-family: 'Open Sans';
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
}

h2 {
    margin-block: 30px;
    font-size: 30px;
}

.btn {
    padding: 10px;
    padding-inline: 15px;
    font-size: 20px;
}

.btn:hover {
    background-color: rgb(65, 65, 65);
    color: rgb(182, 182, 182);
}

.bi-google {
    margin-right: 10px;
}

/* Animation Writting CSS*/
.line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(25,25,25,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}

.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}

/*Background Animation CSS*/
.area{
    background: #ffffff;  
    width: 100vw;
    height:100vh;   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(74, 74, 74, 0.638);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    background: #d1d1d1
}

.circles li:nth-child(12){
    left: 5%;
    width: 60px;
    height: 60px;
    animation-delay: 4s;
    animation-duration: 18s;
    background: #d1d1d1
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    background: #d1d1d1
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    background: #d1d1d1

}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    background: #d1d1d1
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    background: #d1d1d1
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    background: #d1d1d1
}


.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    background: #d1d1d1

}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background: #d1d1d1

}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
    background: #d1d1d1

}
.circles li:nth-child(11){
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 1s;
    animation-duration: 11.5s;
    background: #d1d1d1
}

/* Animation Writting CSS Kreyframes*/
@keyframes typewriter{
  from{width: 0;}
  to{width: 24em;}
}
@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

/* Animation Background CSS Kreyframes*/
@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

@media (max-width: 600px) {
    .titleDescription {
    font-size: 20px;
    }

    h1{
        font-size: 50px;
    }
}

</style>