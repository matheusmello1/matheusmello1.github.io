function checaNumero(no) {
  if (isNaN(no.value) || no.value == '') {
    alert('Digite somente NÚMEROS no campo: '+ no.name);
  }
}

function checaLetra(no) {
    var check = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;

    if (!check.test(no.value) || no.value == '') {
      alert('Digite somente LETRAS no campo: '+ no.name);
    }
}

function checaEmail(no) {
    var check = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if (!check.test(no) || no == '') {
      alert('Email não é válido');
    }
}

function ValidacaoFormulario() {
  var nome = document.getElementById('Nome');
  var sobrenome = document.getElementById('Sobrenome');
  var rg = document.getElementById("rg");
  var cpf1 = document.getElementById("cpf1");
  var cpf2 = document.getElementById("cpf2");
  var rua = document.getElementById('rua');
  var numero = document.getElementById("numero");
  var bairro = document.getElementById('bairro');
  var cep1 = document.getElementById("cep1");
  var cep2 = document.getElementById("cep2");
  var email = document.getElementById('email').value;
  var confirmaemail = document.getElementById('email2').value;
  var senha = document.getElementById('senha').value;
  var confirmasenha = document.getElementById('senha2').value;
  
  checaLetra(nome);
  checaLetra(sobrenome);

  if(document.getElementById('Masculino').checked == false &&
  document.getElementById('Feminino').checked == false){
       alert("Selecione um Sexo!");
  } 

  checaNumero(rg);
  checaNumero(cpf1);
  checaNumero(cpf2);
  checaLetra(rua);
  checaNumero(numero);
  checaLetra(bairro);
  checaNumero(cep1);
  checaNumero(cep2);
  checaEmail(email);

  if (email != confirmaemail ||
      email == '' ||
      confirmaemail == '') {
        alert('Os emails são diferentes');
  }

  if (senha != corfimasenha ||
      senha == '' ||
      corfimasenha == '') {
    alert('As senhas são diferentes');
  }

  if(document.getElementById('pesquisa_sim').checked == false &&
     document.getElementById('pesquisa_nao').checked == false &&
     document.getElementById('pesquisa_talvez').checked == false &&
     document.getElementById('pesquisa_quem_sabe').checked == false){
       alert("Invalido, responda a primeira questão");
  }

  if(document.getElementById('pesquisa_html').checked == false &&
     document.getElementById('pesquisa_css').checked == false &&
     document.getElementById('pesquisa_javascript').checked == false &&
     document.getElementById('pesquisa_django').checked == false){
       alert("Invalido, responda a segunda questão");
  }

}
