/* passo 5 
importar a função conectaApi do arquivo requisicaoProdutos.js*/
import { conectaApi } from "./requisicaoProdutos.js";

/* passo 6
selecionar o elemento pai para criar o elemento filho com a estrutura HTML de cada video */
const starwarsCards = document.querySelector("[data-starwars]");
const consolesCards = document.querySelector("[data-consoles]");
const diversosCards = document.querySelector("[data-diversos]");


function constroiCard(imageUrl, name, price) {
    const card = document.createElement("div");
    card.className = "card__item";
    card.innerHTML = `<img class="card__image" src="${imageUrl}" alt="imagem do produto">
    <p class="card__nome">${name}</p>
    <p class="card__preco">${price}</p>
    <a class="btn__card" href="#">Ver produto</a>`

    return card;
}

async function listaCard() {
    const listaApi = await conectaApi.listaProdutos();

    /* listaApi.forEach(element => cards.appendChild(constroiCard(element.imageUrl, element.name, element.price))); */

    listaApi.forEach(element => {

        
        if (element.section == 'starWars') {

            starwarsCards.appendChild(constroiCard(element.imageUrl, element.name, element.price));
        }

        if (element.section == 'consoles') {

            consolesCards.appendChild(constroiCard(element.imageUrl, element.name, element.price));
        }

        if (element.section == 'diversos') {

            diversosCards.appendChild(constroiCard(element.imageUrl, element.name, element.price));
        }

    });
}

listaCard();