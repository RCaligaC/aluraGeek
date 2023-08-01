// criando a função assícrona para a chamada da API

/* passo 1 */
async function listaProdutos() {
    /* const conexao = await fetch("http://localhost:3000/produtos"); */ /* requisitado pelo servidor json-server */
    const conexao = await fetch("https://64ae9dc5c85640541d4d65db.mockapi.io/produto"); /* requisição pelo mockapi.io */
    
    const conexaoConvertida = await conexao.json();

    /* console.log(conexaoConvertida); */

    return conexaoConvertida
};

// Função assíncrona para adicionar produto

async function adicionaProduto(imageUrl, section, name, price, description) { 

    /* const conexao = await fetch("http://localhost:3000/produtos", {

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify({

            imageUrl: imageUrl,
            section: section,
            name: name,
            price: `${price},00`,
            description: description
        })
    }) */

    const conexao = await fetch("https://64ae9dc5c85640541d4d65db.mockapi.io/produto", {  

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify({

            imageUrl: imageUrl,
            section: section,
            name: name,
            price: `${price},00`,
            description: description
        })
    })

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}


// Função assíncrona para buscar um produto

async function buscaProduto(termoDeBusca) {
    /* const conexao = await fetch(`http://localhost:3000/produtos?q=${termoDeBusca}`); */

    const conexao = await fetch(`https://64ae9dc5c85640541d4d65db.mockapi.io/produto?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();


    return conexaoConvertida;
}


/* passo 2 */
export const conectaApi = {
    
    listaProdutos,
    adicionaProduto,
    buscaProduto
};

/* passo 3
será ir no index.html ir na linha 74 da tag do começo dos produtos starwars e nomear o data-atributes para data-starwars */

/* passo 4
criar o arquivo mostrarProdutos.js e criar as funções para criar a estrutura HTML dinâmicamente pelo DOM

obs: substituir o script na ultima linha do body pelo o script criado  "mostrarVideos.js, type = module)
e começar codar */