// GET
/* fazendo a chamada... */

const listaProdutos = () => {

    fetch('http://localhost:3000/produto ')
    .then(resposta => resposta.json())
    .catch(error => console.log(error));

}