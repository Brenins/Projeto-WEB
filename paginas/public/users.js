import {cadastros} from '../data/cadastros/dataCadastros.png'

function login() {
    try {
        //loading json 
        var users = readJson("../data/cadastros/dataCadastros.png");
        //get values
        let email = $('#email');
        let pass = $('#pass');
        if (email != "" && pass != "") {
            user = users.find(element =>
                element.email === email
                && element.pass === pass
            )
            if (user != null) {
                redirect(
                    "../private/home.html"
                )
            } else {
                notify(
                    "warning",
                    "Nenhum Usuário Encontrado"
                )
            }
        } else {
            notify(
                "warning",
                "Insisra algum valor nos cmapos para efetuar o Login"
            )
        }
    } catch (error) {
        notify(
            "danger",
            "Erro ao Executar Login"
        )
    }
}

function redirect(url) {
    window.location.href = url;
}