
const cadastro = {
    nome: null,
    idade: null,
    email: null,
}

function aoClicarEmSalvar(){
    cadastro.nome = document.getElementById('nome').value
    cadastro.idade = document.getElementById('idade').value
    cadastro.email = document.getElementById('email').value
    let containerDados = document.getElementById("container-cadastro")
    containerDados.innerHTML += "<div class='inscritos'>" + "<p> Nome: " + cadastro.nome + "</p>" + "<p> Idade: " + cadastro.idade + "</p>" +"<p> Email: " + cadastro.email + "</p>" + "</div>" 
}