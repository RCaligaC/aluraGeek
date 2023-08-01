import { conectaApi } from "../services/requisicaoDeProdutos.js";
import constroiCard from "./mostrarProdutos.js";

async function pesquisarProduto(evento) {

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-dadopesquisa]").value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    /* const starwarsCards = document.querySelector("[data-starWars]");
    const consolesCards = document.querySelector("[data-consoles]");
    const diversosCards = document.querySelector("[data-diversos]"); */

    const resultadoPesquisa = document.querySelector("[data-lista]");

    const lista = [document.querySelector("[data-starWars]"), document.querySelector("[data-consoles]"), document.querySelector("[data-diversos]")];

    lista.forEach(element => {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    })
    
    /* while(starwarsCards.firstChild) {

        starwarsCards.removeChild(starwarsCards.firstChild);
    } */

    busca.forEach(element => resultadoPesquisa.appendChild(
        constroiCard(element.imageUrl, element.name, element.price)));

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

/* botaoDePesquisa.addEventListener("click", evento => pesquisarProduto(evento));
 */

botaoDePesquisa.addEventListener("click", evento => {

    /* if (document.getElementById('pesquisaHome').value == '') {

        window.location.reload();

    } else {} */

        pesquisarProduto(evento);
        document.getElementById('pesquisaHome').value = '';

        document.querySelector("[data-titulostarwars]").style.display = "none";
        document.querySelector("[data-tituloconsoles]").style.display = "none";
        document.querySelector("[data-titulodiversos]").style.display = "none";
    
});