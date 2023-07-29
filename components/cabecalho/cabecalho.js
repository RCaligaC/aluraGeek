let cabeca = document.querySelector("[data-cabecalho]");

function criaCabecalho() {
    const novoCabecalho = document.createElement("div");
    novoCabecalho.className = "cabecalho__nav";
    novoCabecalho.innerHTML= `<nav class="cabecalho__nav">

    <div class="cabecalho__nav__logo">
        <a class="nav__logo" href="#"><img src="./assets/image/sports_esports_black_24dp 1.svg"
                alt="Controle videogame"></a>
        <a class="nav__texto" href="#"><img src="./assets/image/Texto.svg" alt="Texto Alura"></a>

    </div>

    <div class="cabecalho__nav__pesquisa">
        <input class="cabecalho__pesquisa--input" placeholder="Pesquisar sobre..." type="text">
        <img class="cabecalho__pesquisa__imgLupa" src="./assets/image/lupa.png" alt="Imagem de uma lupa">

    </div>

    </nav>

    <a href="#" class="btn__login__cabecalho">Login</a>
    <img class="cabecalho__imgLupa" src="./assets/image/lupa.png" alt="Imagem de uma lupa">`

    return cabeca.appendChild(novoCabecalho);
}

/* criaCabecalho(); */