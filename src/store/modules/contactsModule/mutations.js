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

    let emails = ['tesate@teste.com', 'tesate1@teste.com', 'tesate2@teste.com', 'tesate3@conecta.com', 'tesate1@conecta.com', 'tesate13@conecta.com', 'tesate4@conecta.com', 'tesat2e@gmail.com']
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
};



export { userContactsFormate, atualizaDados };