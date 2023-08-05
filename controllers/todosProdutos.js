import { conectaApi } from "../services/requisicaoDeProdutos.js";

/* passo 6
selecionar o elemento pai para criar o elemento filho com a estrutura HTML de cada produto */
const todosProdutos = document.querySelector("[data-produtos]");


export default function constroiCard(imageUrl, name, price) {
    const card = document.createElement("div");
    card.className = "card__item";
    card.innerHTML = `<img class="card__image" src="${imageUrl}" alt="imagem do produto">
    <p class="card__nome">${name}</p>
    <p class="card__preco">R$ ${price}</p>
    <a class="btn__card" href="#">Ver produto</a>`

    return card;
}

async function listaCard() {
    const listaApi = await conectaApi.listaProdutos();

    /* listaApi.forEach(element => cards.appendChild(constroiCard(element.imageUrl, element.name, element.price))); */

    listaApi.forEach(element => {

            todosProdutos.appendChild(constroiCard(element.imageUrl, element.name, element.price));

    });
}

listaCard();