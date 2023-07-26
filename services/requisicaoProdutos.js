// criando a função assícrona para a chamada da API


/* passo 1 */
async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    /* const conexao = await fetch("https://64ae9dc5c85640541d4d65db.mockapi.io/f2l"); */
    const conexaoConvertida = await conexao.json();

    /* console.log(conexaoConvertida); */

    return conexaoConvertida
};


/* passo 2 */
export const conectaApi = {
    
    listaProdutos
};

/* passo 3
será ir no index.html ir na linha 74 da tag do começo dos produtos starwars e nomear o data-atributes para data-starwars */

/* passo 4
criar o arquivo mostrarProdutos.js e criar as funções para criar a estrutura HTML dinâmicamente pelo DOM

obs: substituir o script na ultima linha do body pelo o script criado  "mostrarVideos.js, type = module)
e começar codar */