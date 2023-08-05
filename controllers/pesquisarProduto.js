import { conectaApi } from "../services/requisicaoDeProdutos.js";
import constroiCard from "./mostrarProdutos.js";

async function pesquisarProduto(evento) {

    if (document.getElementById('pesquisaHome').value == '') {

        window.location.reload();

    } else {

        evento.preventDefault();

        document.querySelector("[data-titulostarwars]").style.display = "none";
        document.querySelector("[data-tituloconsoles]").style.display = "none";
        document.querySelector("[data-titulodiversos]").style.display = "none";

        /* document.querySelector("[data-starWars]").style.display = "none"; */
        document.querySelector("[data-consoles]").style.display = "none";
        document.querySelector("[data-diversos]").style.display = "none";

        const dadosDePesquisa = document.querySelector("[data-dadopesquisa]").value;
        const busca = await conectaApi.buscaProduto(dadosDePesquisa);



        const resultadoPesquisa = document.querySelector("[data-starwars]");

        while (resultadoPesquisa.firstChild) {

            resultadoPesquisa.removeChild(resultadoPesquisa.firstChild);
        }

        console.log(resultadoPesquisa);

        busca.forEach(element => resultadoPesquisa.appendChild(constroiCard(element.imageUrl, element.name, element.price)));
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

/* botaoDePesquisa.addEventListener("click", evento => pesquisarProduto(evento));
 */

botaoDePesquisa.addEventListener("click", evento => {

        pesquisarProduto(evento);
        document.getElementById('pesquisaHome').value = '';

});