document.querySelector("[data-formulario]").addEventListener('submit', function (event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin@alurageek.com' && senha === 'admin') {

        window.location.href = '../todosProdutos.html';
        /* novaAba('../todosProdutos.html'); */

    } else {

        alert('Usuário ou senha inválido! Tente novamente.');
    }
});

function novaAba(url) {
    var win = window.open(url);
    win.focus();
  }