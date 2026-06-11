// Lista de curiosidades sobre produção de leite e ordenha
const curiosidades = [
    "As vacas têm uma excelente memória e conseguem reconhecer mais de 50 companheiras de rebanho!",
    "Uma vaca leiteira consome em média 100 a 150 litros de água por dia. Por isso a economia de água é vital!",
    "Vacas que ouvem música calma durante a ordenha podem produzir até 3% mais leite, pois ficam relaxadas.",
    "O processo de ordenha mecânica moderna simula perfeitamente a mamada do bezerro, sem causar dor ao animal.",
    "O leite sai da vaca a cerca de 37°C e precisa ser resfriado para menos de 4°C em até duas horas para manter a qualidade.",
    "O sombreamento por árvores (sistema silvipastoril) pode aumentar a produção de leite em até 20% devido ao conforto térmico das vacas."
];

// Seleção dos elementos HTML
const textoCuriosidade = document.getElementById("texto-curiosidade");
const btnCuriosidade = document.getElementById("btn-curiosidade");

// Variável para evitar repetir a mesma curiosidade em seguida
let ultimaPosicao = 0;

// Função para mudar a curiosidade
btnCuriosidade.addEventListener("click", () => {
    let novaPosicao;
    
    // Sorteia uma posição que não seja igual à última apresentada
    do {
        novaPosicao = Math.floor(Math.random() * curiosidades.length);
    } while (novaPosicao === ultimaPosicao);
    
    ultimaPosicao = novaPosicao;
    
    // Atualiza o texto na tela
    textoCuriosidade.textContent = curiosidades[novaPosicao];
});