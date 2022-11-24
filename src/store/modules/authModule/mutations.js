// mutation para guardar localmente os dados do usuario. 
function dataSave(state, values) {
    if (values !== null) {
        if (values['token'], values['expiry'], values['picture'], values['user_name']) {
            let user = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
            user = [values]
            localStorage.setItem("user", JSON.stringify(user));
        }
    }
}

// mutation para logar
function userLogin(state) {
    try {
        let user = JSON.parse(localStorage.getItem("user"));
        user = user[0]
        if (user['token']) {
            const expiry_str = user['expiry']
            const [dateValues, timeValues] = expiry_str.split(' ');
            const [month, day, year] = dateValues.split('-');
            const [hours, minutes, seconds_plus] = timeValues.split(':');
            const [seconds, seconds_after] = seconds_plus.split('.');
            const expiry = new Date(year, month, day, hours, minutes, seconds);
            const date_now = new Date()
            if (expiry < date_now) {
                localStorage.removeItem('user');
                localStorage.removeItem('emails');
                localStorage.removeItem('contacts');
                localStorage.removeItem('emailsFiltered');
                return console.log("Faça o login para continuar!");
            }
            else {
                return window.location.href = "/";
            }
        }
    }
    catch {
        console.log("Faça o login para continuar!")
    }
}


// mutation para logout
function logOut(state) {
    localStorage.removeItem('user');
    localStorage.removeItem('emails');
    localStorage.removeItem('contacts');
    localStorage.removeItem('emailsFiltered');
    console.log("Faça o login para continuar!");
    return window.location.href = "/login";
    }


// mutation para verificar se está autenticado
function isAuthenticated(state) {
    let user = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null;
    if (user){
        user = user[0]
    }
    if (user == null) {
        localStorage.removeItem('user');
        localStorage.removeItem('emails');
        localStorage.removeItem('contacts');
        localStorage.removeItem('emailsFiltered');
        console.log("Faça o login para continuar!");
        return window.location.href = "/login";
    }
    if (!(user['token'])) {
        localStorage.removeItem('user');
        localStorage.removeItem('emails');
        localStorage.removeItem('contacts');
        localStorage.removeItem('emailsFiltered');
        console.log("Faça o login para continuar!");
        return window.location.href = "/login";
    }
    if (user['token']) {
        const expiry_str = user['expiry']
        const [dateValues, timeValues] = expiry_str.split(' ');
        const [month, day, year] = dateValues.split('-');
        const [hours, minutes, seconds_plus] = timeValues.split(':');
        const [seconds, seconds_after] = seconds_plus.split('.');
        const expiry = new Date(year, month, day, hours, minutes, seconds);
        const date_now = new Date()
        if (expiry < date_now) {
            localStorage.removeItem('user');
            localStorage.removeItem('emails');
            localStorage.removeItem('contacts');
            localStorage.removeItem('emailsFiltered');
            console.log("Faça o login para continuar!");
            return window.location.href = "/login";
        }
    }
    return true
}


export { dataSave, userLogin, logOut, isAuthenticated };