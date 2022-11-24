// formata os contatos do usuario.
function userContactsFormate(state, values) {
    let persons = []
    for (let people of values['connections']) {
        let person = {
        name: "",
        email: ""
        };
        if (people['names']) {
            person['name'] = people['names'][0]['displayName']
        }
        if (people['emailAddresses']) {
            person['email'] = people['emailAddresses'][0]['value']
        }
        persons.push(person);
    }
    if (persons[0]['name']) {
        localStorage.setItem("contacts", JSON.stringify(persons));
        state.contacts = JSON.parse(localStorage.getItem("contacts"))
    }

    let emails = []
    let emailsDomain = []
    for (let contact of state.contacts) {
        if (contact['email']) {
            emails.push(contact['email'])
        }
    }
    for (let email of emails) {
        const [emailUser, emailDomain] = email.split('@');
        emailsDomain.push(emailDomain)
    }
    emailsDomain = emailsDomain.filter((item, index) => emailsDomain.indexOf(item) === index);
    if (emails.length > 0) {
        localStorage.setItem("emails", JSON.stringify(emails));
        }
    let emailsFiltered = []
    for (let domain of emailsDomain) {
        let result = {
            mainDomain: domain,
            emails: []
        }
        for (let email of emails) {
            const [emailUser, emailDomain] = email.split('@');
            if (emailDomain == domain) {
                result['emails'].push(email)
            }
        }
        emailsFiltered.push(result)
    }
    if (emailsFiltered.length > 0) {
        localStorage.setItem("emailsFiltered", JSON.stringify(emailsFiltered));
        }
}

// atualiza os valores da store.
function atualizaDados(state) {
    state.emails = (localStorage.getItem("emails")) ? JSON.parse(localStorage.getItem("emails")) : [];
    state.emailsFiltered = (localStorage.getItem("emailsFiltered")) ? JSON.parse(localStorage.getItem("emailsFiltered")) : [];
    state.contacts = (localStorage.getItem("contacts")) ? JSON.parse(localStorage.getItem("contacts")) : [];
    state.user = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
};


// pesquisa o email desejado. 
function pesquisaEmail(state, NewValue) {
    state.valorProcura = NewValue
    state.valores = [];
    state.valores = state.emails.filter((item) => {
        return (item.toLowerCase().indexOf(state.valorProcura.toLowerCase()) > -1)});
    return state.valores;
}

// pega dados do usuario.
async function getUserInformation(state) {
    store.dispatch('authModule/isAuthenticated')
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        user = user[0];
    }
    let tokenUser = user['token'];
    axios.post('http://localhost:5000/contacts/get', { token: tokenUser })
    .then( (response) => {
        let data = response.data
        store.dispatch('contactsModule/userContactsFormate', data)
    })            
}



export { userContactsFormate, atualizaDados, pesquisaEmail, getUserInformation };

import axios from "axios";
import store from '../../index';