// . para classes 
// # ids
// node do elemento 

// div h1  => h1 dentro de uma div
// querySelector => seleciona apena o primeiro elemento(o primeiro elemento encontrado)
// querySelextorAll => seleciona todos os elementos e coloca dentro de uma array
// Seleciona elementos do DOM
const body = document.querySelector('body'); // Seleciona o body do HTML
const game = document.querySelector(".game"); // Seleciona a div do jogo

const count = document.querySelector("h1"); // Seleciona o elemento h1
const reset = document.querySelector("#reset"); // Seleciona o botão de reset

const ash = document.querySelector("#ash"); // Seleciona o personagem Ash
const charmander = document.querySelector("#charmander"); // Seleciona o Pokémon Charmander
const pikachu = document.querySelector("#pikachu"); // Seleciona o Pokémon Pikachu
const zubat = document.querySelector("#zubat"); // Seleciona o Pokémon Zubat

// Adiciona um ouvinte de evento para quando uma tecla é pressionada
body.addEventListener("keydown", (Event) => {
    Event.stopPropagation(); // Impede que o evento se propague para outros elementos

    switch (Event.code) { // Verifica qual tecla foi pressionada
        case 'ArrowLeft': // Se a tecla de seta para a esquerda foi pressionada
            ash.src = "../assets/left.png"; // Muda a imagem do Ash para a direção esquerda
            break;

        case 'ArrowRight': // Se a tecla de seta para a direita foi pressionada
            ash.src = "../assets/right.png"; // Muda a imagem do Ash para a direção direita
            break;

        case 'ArrowDown': // Se a tecla de seta para baixo foi pressionada
            ash.src = "../assets/front.png"; // Muda a imagem do Ash para frente
            break;

        case 'ArrowUp': // Se a tecla de seta para cima foi pressionada
            ash.src = "../assets/back.png"; // Muda a imagem do Ash para trás
            break;

        default: // Se nenhuma das teclas especificadas foi pressionada
            break; // Não faz nada
    }
});

