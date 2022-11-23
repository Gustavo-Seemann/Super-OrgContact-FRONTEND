<template>
<div>
    <nav class="navbar fixed-top navbar-light">
        <div class="container-fluid">
            <div class='left-side'>
                <img class="collapse-icon menuImg" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar" src="../assets/contactsMenu/sideIcon.png" alt="Icone de menu lateral." width="25" height="19">
                <a class="navbar-brand" href="#">
                <img class='logoImg' src="../assets/contactsMenu/logoSite.svg" alt="Logo do site" width="30" height="30">
                Super <span class='shadowText'>OrgContact</span>
                </a>
            </div>
            <div class="dropdown">
                <div class="right-side d-flex" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="userName">
                        <h3 class='userName'>{{ nameDisplay }}</h3>
                    </div>
                    <img class='userAvatar' :src="userImg" alt="Imagem do usuario" width="32" height="32">
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Sair</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <div class="container">
            <div>
                <h1 class="title-side">
                    <span v-if="!collapsed">
                        Organizações
                    </span>
                </h1>
            </div>
            <div>
                <ul class="list" v-for="(itens, index) in $store.state.contactsModule.emailsFiltered" :key="index">
                    <div class="sidebarOption">
                        <li v-if="!collapsed" class="list-group-item d-flex justify-content-between align-items-center">
                            {{itens['mainDomain']}}
                            <span class="badge bg-danger rounded-pill">{{itens['emails'].length}}</span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './sidebar/state'

export default {
    name: 'navBar',
    props: {
        nameDisplay: String,
        userImg: String
    },
    data() {
        return {
            showDropDown: true
        }
    },
    setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
}
</script>


<style scoped>

.right-site {
    align-items: center;
    justify-content: center;
}

.userAvatar{
    margin: 3px;
    border-radius: 50%;
}

.userName {
    font-size: 18px;
    margin: 3px;
    margin-right: 8px;
    align-items: center;
}

.menuImg {
    margin-bottom: 5px;
}

.logoImg {
    margin-left: 10px;
}

.shadowText {
    text-shadow: 
    -0.5px 0.5px 0px rgb(159, 3, 3),
    0.5px 0.5px 0px #01c4ff;
}

.navbar {
    /* border-bottom: 1px solid;
    border-image: linear-gradient(to right, rgb(255, 0, 0),rgb(221, 221, 221), #01c4ff ) 100; */
    background-color: #f1f1f1;
}

a {
    font-size: 22px;
    font-weight: 500;
}

span {
    font-weight: bolder;
}

/* sidebar CSS */


.sidebarOption {
    border-bottom: 1px solid rgb(211, 211, 211);
    padding-bottom: 5px
}

.sidebarOption:hover {
    cursor: pointer;
    background-color: rgb(216, 216, 216);
    border-radius: 5px;
}

.title-side{
    margin-top: 90px;
    display: inline-block;
    font-size: 20px;
}

ul {
    padding: 0px
}


.sidebar {
  color: rgb(0, 0, 0);
  background-color: #f1f1f1;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
  cursor: pointer;
}

.collapse-icon:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>