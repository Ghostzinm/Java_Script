function validarNome(){
    const nome = document.getElementById('nome').value;
    const nomeError = document.getElementById('mensagem-erro-nome');

    if(nome.length < 3){
        nomeError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        nomeError.style.color = 'red';
        document.getElementById('nome').focus();
    } else {
        nomeError.textContent = 'ok';
        nomeError.style.color = 'green';
    } 

    if (nome.length > 60) {
        nomeError.textContent = 'O nome deve ter no máximo 60 caracteres.';
        nomeError.style.color = 'red';
        document.getElementById('nome').focus();
    } else if (nome === '') {
        nomeError.textContent = 'O campo nome não pode estar vazio.';
        document.getElementById('nome').focus();
    }

}

function validarEmail(){
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.length < 3){
        emailError.textContent = 'O email deve ter pelo menos 3 caracteres.';
        emailError.style.color = 'red';
        document.getElementById('email').focus();
    } else {
        emailError.textContent = 'ok';
        emailError.style.color = 'green';
    } 

    if (nome.length > 100) {
        nomeError.textContent = 'O nome deve ter no máximo 100 caracteres.';
        nomeError.style.color = 'red';
        document.getElementById('email').focus();
    } else if (email === '') {
        emailError.textContent = 'O campo email não pode estar vazio.';
        document.getElementById('email').focus();
    }

    if(!emailPattern.test(email)){
        emailError.textContent = 'Por favor, insira um email válido.';
        emailError.style.color = 'red';
        document.getElementById('email').focus();
    } else {
        emailError.textContent = 'ok';
        emailError.style.color = 'green';
    }

}

function validarCidade(){
    const cidade = document.getElementById('cidade').value;
    const cidadeError = document.getElementById('mensagem-erro-cidade');

    if(cidade.length < 3){
        cidadeError.textContent = 'O cidade deve ter pelo menos 3 caracteres.';
        cidadeError.style.color = 'red';
        document.getElementById('cidade').focus();
    } else {
        cidadeError.textContent = 'ok';
        cidadeError.style.color = 'green';
    } 

    if (nome.length > 100) {
        nomeError.textContent = 'O nome deve ter no máximo 100 caracteres.';
        nomeError.style.color = 'red';
        document.getElementById('cidade').focus();
    } else if (cidade === '') {
        cidadeError.textContent = 'O campo cidade não pode estar vazio.';
        document.getElementById('cidade').focus();
    }

}

function validarEstado(){
    const estado = document.getElementById('estado').value;
    const estadoError = document.getElementById('mensagem-erro-estado');

    if(estado === ''){
        estadoError.textContent = 'Por favor, selecione um estado.';
        estadoError.style.color = 'red';
        document.getElementById('estado').focus();
    } else {
        estadoError.textContent = 'ok';
        estadoError.style.color = 'green';
    }
    if (estado.length > 2) {
        estadoError.textContent = 'O estado deve ter no máximo 2 caracteres.';
        estadoError.style.color = 'red';
        document.getElementById('estado').focus();
    }
}

function validarSenha(){
    const senha = document.getElementById('senha').value;
    const senhaError = document.getElementById('mensagem-erro-senha');
    const regexUpper = /[A-Z]/;
    const regexLower = /[a-z]/;
    const regexNumber = /[0-9]/;
    const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;

    if(senha.length < 8){
        senhaError.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else {
        senhaError.textContent = 'ok';
        senhaError.style.color = 'green';
    } 

    if (senha.length > 60) {
        senhaError.textContent = 'A senha deve ter no máximo 60 caracteres.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else if (senha === '') {
        senhaError.textContent = 'O campo senha não pode estar vazio.';
        document.getElementById('senha').focus();
    } else if (!regexUpper.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else if(!regexLower.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos uma letra minúscula.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else if(!regexNumber.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos um número.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else if(!regexSpecial.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos um caractere especial.';
        senhaError.style.color = 'red';
        document.getElementById('senha').focus();
    } else {
        senhaError.textContent = 'ok';
        senhaError.style.color = 'green';
    }

}

function validarConfirmarSenha(){
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmar_senha').value;
    const confirmacaoSenhaError = document.getElementById('mensagem-erro-confirmacao-senha');

    if (confirmacaoSenha === '') {
        confirmacaoSenhaError.textContent = 'O campo confirmação de senha não pode estar vazio.';
        confirmacaoSenhaError.style.color = 'red';
        document.getElementById('confirmar_senha').focus();
        return;
    }

    if(confirmacaoSenha !== senha){
        confirmacaoSenhaError.textContent = 'As senhas não coincidem.';
        confirmacaoSenhaError.style.color = 'red';
        document.getElementById('confirmar_senha').focus();
    } else {
        confirmacaoSenhaError.textContent = 'ok';
        confirmacaoSenhaError.style.color = 'green';
    }
}


function validarTelefone(){
    const telefone = document.getElementById('telefone').value;
    const telefoneError = document.getElementById('mensagem-erro-telefone');
    const telefonePattern = /\d/;

    if(telefone.length < 10){
        telefoneError.textContent = 'O telefone deve ter pelo menos 10 caracteres.';
        telefoneError.style.color = 'red';
        document.getElementById('telefone').focus();
    } else {
        telefoneError.textContent = 'ok';
        telefoneError.style.color = 'green';
    } 

    if (telefone.length > 15) {
        telefoneError.textContent = 'O telefone deve ter no máximo 15 caracteres.';
        telefoneError.style.color = 'red';
        document.getElementById('telefone').focus();
    } else if (telefone === '') {
        telefoneError.textContent = 'O campo telefone não pode estar vazio.';
        document.getElementById('telefone').focus();
    }

    if(!telefonePattern.test(telefone)){
        telefoneError.textContent = 'Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.';
        telefoneError.style.color = 'red';
        document.getElementById('telefone').focus();
    } else {
        telefoneError.textContent = 'ok';
        telefoneError.style.color = 'green';
    }
}
