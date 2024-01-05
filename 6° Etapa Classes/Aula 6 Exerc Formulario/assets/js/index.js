const nome = document.getElementById('input-teste-1');
const sobrenome = document.getElementById('input-teste-2');
const cpf = document.getElementById('input-teste-3');
const usuario = document.getElementById('input-teste-4');
const senha = document.getElementById('input-teste-5');
const confirmarSenha = document.getElementById('input-teste-6');
const botaoEnviar = document.getElementById('enviar');

const nomeErro = document.getElementById('nomeErro');
const sobrenomeErro = document.getElementById('sobrenomeErro');
const cpfErro = document.getElementById('cpfErro');
const usuarioErro = document.getElementById('usuarioErro');
const senhaErro = document.getElementById('senhaErro');
const repetirSenhaErro = document.getElementById('repetirSenhaErro');

function digitarCPF(cpfDigitado){
    let v = cpfDigitado.value;

    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
        cpfDigitado.value = v.substring(0, v.length-1);
        return;
    }
     
    cpfDigitado.setAttribute("maxlength", "14");
    cpfDigitado.value = cpfDigitado.value.replace(/\D/g, '') // Remove tudo o que não é dígito
    cpfDigitado.value = cpfDigitado.value.replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos
    cpfDigitado.value = cpfDigitado.value.replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos novamente
    cpfDigitado.value = cpfDigitado.value.replace(/(\d{3})(\d{1,2})/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
}

cpf.addEventListener('input', function(event){
    digitarCPF(cpf);
});

class ValidaFormulario {
    constructor(nomeRecebido, sobrenomeRecebido, cpfRecebido, usuarioRecebido, senhaRecebido, confirmarSenhaRecebido){
        this.nomeRecebido = nomeRecebido;
        this.sobrenomeRecebido = sobrenomeRecebido;
        this.cpfRecebido = cpfRecebido;
        this.usuarioRecebido = usuarioRecebido;
        this.senhaRecebido = senhaRecebido;
        this.confirmarSenhaRecebido = confirmarSenhaRecebido;
    }

    get cpfLimpo(){
        return this.cpfRecebido.replace(/\D+/g, '');
    }

    li(){
        const li = document.createElement('li');
        return li;
    }

    validarNome(){
        const li = this.li();
        const liExistente = nomeErro.querySelector('li');
        if(this.nomeRecebido === '' && liExistente === null){
            li.innerHTML = 'Nome não pode estar vazio';
            nomeErro.appendChild(li);
        }else if (this.nomeRecebido !== '' && liExistente !== null){
            nomeErro.removeChild(liExistente);
        }
    }

    validarSobrenome(){
        const li = this.li();
        const liExistente = sobrenomeErro.querySelector('li');
        if(this.sobrenomeRecebido === '' && liExistente === null){
            li.innerHTML = 'Sobrenome não pode estar vazio';
            sobrenomeErro.appendChild(li);
        }else if (this.sobrenomeRecebido !== '' && liExistente !== null){
            sobrenomeErro.removeChild(liExistente);
        }
    }

    validaCPF(){
        const li = this.li();
        const liExistente = cpfErro.querySelector('li');

        if(this.verificaSequenciaCPF() && liExistente === null){
            li.innerHTML = 'CPF não pode ser sequência e deve ter 11 dígitos';
            cpfErro.appendChild(li);
        }else if(!this.verificaSequenciaCPF() && liExistente !== null){
            cpfErro.removeChild(liExistente);
        }

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigitoCPF(cpfParcial);
        const digito2 = this.criaDigitoCPF(cpfParcial + digito1);

        const novoCPF = cpfParcial + digito1 + digito2;
        this.novoCPF = novoCPF;
        /*
        if (this.novoCPF === this.cpfLimpo && liExistente === null){
            console.log('CPF válido');
        }else{
            console.log('CPF inválido');
        }
        */
        // Talvez contenha bug
    }

    criaDigitoCPF(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
    
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);
        
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    verificaSequenciaCPF(){
        if (typeof this.cpfLimpo === 'undefined') return true;
        if (this.cpfLimpo.length !== 11) return true;
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    validarUsuario(){
        let mensagemErro = '';
        let li = usuarioErro.querySelector('li');
    
        if(this.usuarioRecebido === ''){
            mensagemErro = 'Usuário não pode estar vazio';
        }else if(this.usuarioRecebido.length > 12 || this.usuarioRecebido.length < 3){
            mensagemErro = 'Usuário deve ter entre 3 e 12 caracteres';
        }else if(!this.usuarioRecebido.match(/^[a-zA-Z0-9]+$/)){
            mensagemErro = 'Usuário deve conter apenas letras e números';
        }
    
        if(mensagemErro){
            if(!li){
                li = this.li();
                usuarioErro.appendChild(li);
            }
            li.innerHTML = mensagemErro;
        }else if(!mensagemErro && li){
            usuarioErro.removeChild(li);
        }
    }

    validarSenha(){
        const li = this.li();
        const liExistente = senhaErro.querySelector('li');
        const liExistente2 = repetirSenhaErro.querySelector('li');
        console.log(this.senhaRecebido.length);

        if(this.senhaRecebido.length === 0 && liExistente === null){
            li.innerHTML = 'Senha não pode estar vazia';
            senhaErro.appendChild(li);
        }else if(this.senhaRecebido.length > 12 || this.senhaRecebido.length > 6 && liExistente == null){
            li.innerHTML = 'Senha deve ter entre 6 e 12 caracteres';
            senhaErro.appendChild(li);
        }

        if(this.senhaRecebido.length < 12 && this.senhaRecebido.length > 6 && liExistente !== null){
            senhaErro.removeChild(liExistente);
        }else if(liExistente !== null && this.senhaRecebido.length !== 0){
            senhaErro.removeChild(liExistente);
        }

        if(this.senhaRecebido === this.confirmarSenhaRecebido && liExistente2 !== null && this.senhaRecebido.length !== 0){
            repetirSenhaErro.removeChild(liExistente2);
        }

        if (this.senhaRecebido === this.confirmarSenhaRecebido && liExistente2 === null && this.senhaRecebido.length !== 0){
            console.log('Senha válida');
        }else if (this.senhaRecebido !== this.confirmarSenhaRecebido && liExistente2 === null && this.senhaRecebido.length !== 0){
            li.innerHTML = 'Confirmação incorreta';
            repetirSenhaErro.appendChild(li);
        }
    }
}

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();
    const info = new ValidaFormulario(nome.value, sobrenome.value, cpf.value, usuario.value, senha.value, confirmarSenha.value);
    info.validarNome();
    info.validarSobrenome();
    info.validaCPF();
    info.validarUsuario();
    info.validarSenha();
});