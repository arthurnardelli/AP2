document.addEventListener('DOMContentLoaded', function () {
   

    var form = document.getElementById('cadastroForm');
    form.addEventListener('submit', cadastrarCliente);
});

function cadastrarCliente(event) {
    event.preventDefault();

    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var telefoneInput = document.getElementById('telefone');

    var nome = nomeInput.value.trim();
    var email = emailInput.value.trim();
    var telefone = telefoneInput.value.trim();

    if (!validarCampo(nome, nomeInput) || !validarCampo(email, emailInput) || !validarCampo(telefone, telefoneInput)) {
        return;
    }

    if (!isValidEmail(email)) {
        exibirErro(emailInput, 'Por favor, insira um e-mail válido.');
        return;
    }

 

    exibirMensagemSucesso('Cadastro realizado com sucesso!', function () {
        
        window.location.href = 'inicio.html'; 
    });
    limparFormulario();
}

function validarCampo(valor, inputElement) {
    if (!valor) {
        exibirErro(inputElement, 'Por favor, preencha este campo.');
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function exibirErro(element, mensagem) {
    var mensagemErro = document.createElement('p');
    mensagemErro.className = 'erro-mensagem';
    mensagemErro.textContent = mensagem;

    var container = element.parentElement;
    container.appendChild(mensagemErro);

    setTimeout(function () {
        container.removeChild(mensagemErro);
    }, 3000);
}

function exibirMensagemSucesso(mensagem, callback) {
    alert(mensagem);
    if (callback && typeof callback === 'function') {
        callback();
    }
}

function limparFormulario() {
    document.getElementById('cadastroForm').reset();
}
