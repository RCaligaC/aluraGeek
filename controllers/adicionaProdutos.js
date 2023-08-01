import { conectaApi } from "../services/requisicaoDeProdutos.js";

const formulario = document.querySelector("[data-formulario]");


 async function adicionarProduto(evento) {

    evento.preventDefault();

    const imageUrl = document.querySelector("[data-imageUrl]").value;
    const section = document.querySelector("[data-section]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;


     await conectaApi.adicionaProduto(imageUrl, section, name, price, description); 



     alert("Produto adicionado com sucesso!");

     imageUrl.innerHTML = "Funcionou!";
     
}

formulario.addEventListener("submit", evento => adicionarProduto(evento));
