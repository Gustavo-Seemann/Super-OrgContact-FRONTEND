// mutation para guardar localmente os dados do usuario. 
function salvarDados(state, values) {
    let user = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : [];
    user = [...user, values]
    localStorage.setItem("user", JSON.stringify(user));
}