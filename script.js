const quotes = [
    "Você é a razão pela qual eu acordo todos os dias com um sorriso no rosto.",
    "Não há palavras suficientes para expressar o quanto você significa para mim.",
    "Cada dia ao seu lado é uma nova aventura e um novo motivo para sorrir.",
    "Você é meu sonho que se tornou realidade.",
    "Eu me apaixono por você todos os dias.",
    "Com você, encontrei o que significa amar verdadeiramente.",
    "Você é meu porto seguro em um mundo incerto.",
    "Minha vida mudou para melhor desde que você entrou nela.",
    "Você é a minha paz em meio ao caos.",
    "Eu amo você mais do que ontem, e menos do que amanhã.",
    "Você é a razão pela qual meu coração bate mais rápido.",
    "Sem você, a vida seria um livro sem páginas.",
    "Te amo mais a cada dia que passa.",
    "Você é a pessoa com quem eu quero passar o resto da minha vida.",
    "Cada momento ao seu lado é um tesouro que eu guardo com carinho.",
    "Seu sorriso é a minha parte favorita do meu dia.",
    "Você é minha melhor amiga e o meu amor eterno.",
    "Eu sou mais feliz porque você está na minha vida.",
    "Você é meu sol em um dia nublado.",
    "Eu não consigo imaginar minha vida sem você.",
    "Você faz meu coração dançar com alegria.",
    "Te amo não só pelo que você é, mas pelo que eu sou quando estou com você.",
    "Você é o maior presente que a vida me deu.",
    "Com você, aprendi o verdadeiro significado de amor.",
    "Você é a razão de todos os meus sorrisos.",
    "Eu amo a maneira como você me faz sentir amado.",
    "Você é a luz que ilumina o meu caminho.",
    "Você é a minha maior inspiração e o meu amor mais profundo.",
    "Meu amor por você não conhece limites.",
    "Cada dia com você é um sonho que eu não quero acordar.",
    "Eu nunca soube o que era amor até te conhecer.",
    "Você é a pessoa com quem eu quero envelhecer.",
    "Você é a minha alma gêmea, meu amor eterno.",
    "Não importa o que aconteça, eu sempre estarei ao seu lado.",
    "Seu amor é a melhor coisa que já aconteceu na minha vida.",
    "Você é a minha razão de viver e a minha felicidade.",
    "Eu me sinto completo quando estou com você.",
    "Você é a minha metade da laranja.",
    "Te amo mais do que palavras podem expressar.",
    "Você é a pessoa com quem eu quero passar todos os meus dias.",
    "Você é o meu sonho realizado e o meu amor eterno.",
    "A cada dia que passa, eu te amo mais.",
    "Você é o motivo pelo qual meu coração canta.",
    "Você é a razão pela qual eu acredito no amor verdadeiro.",
    "Eu sou grato por cada momento que passamos juntos.",
    "Você é a minha alegria e a minha paz.",
    "Te amo mais a cada dia que passa.",
    "Você é o amor da minha vida e sempre será.",
    "Cada dia ao seu lado é um presente precioso.",
    "Você é a luz que ilumina a minha vida.",
    "Você faz meu coração bater mais rápido com apenas um sorriso.",
    "Eu sou eternamente grato por ter você na minha vida.",
    "Você é a razão pela qual eu acordo com um sorriso.",
    "Você é meu sonho e minha realidade.",
    "Eu te amo mais do que posso explicar em palavras.",
    "Você é a minha fonte de felicidade e amor.",
    "Você é a única que pode me fazer sentir assim.",
    "Eu amo você por tudo o que você é e tudo o que faz por mim.",
    "Cada momento com você é um tesouro que guardo com carinho.",
    "Eu me sinto completo quando estou ao seu lado.",
    "Você é a razão pela qual eu me sinto vivo.",
    "Te amo mais do que palavras podem descrever.",
    "Você é a pessoa com quem eu quero compartilhar minha vida.",
    "Você é o meu tudo e sempre será.",
    "Eu sou a pessoa mais feliz do mundo por ter você.",
    "Seu amor é a maior bênção da minha vida.",
    "Você é a melhor parte do meu dia.",
    "Eu sou eternamente grato por ter você ao meu lado.",
    "Você é o motivo pelo qual eu sorrio todos os dias.",
    "Cada dia com você é uma nova chance de ser feliz.",
    "Você é o amor da minha vida e sempre será.",
    "Você é a luz que ilumina meu caminho.",
    "Eu amo você mais do que qualquer coisa neste mundo.",
    "Você é meu sonho que se tornou realidade.",
    "Eu sou grato por cada momento que passamos juntos.",
    "Você é a razão pela qual eu sou feliz.",
    "Você é a pessoa com quem eu quero passar o resto da minha vida.",
    "Eu te amo mais a cada dia que passa.",
    "Você é a razão do meu sorriso e da minha felicidade.",
    "Você é meu tudo e eu sou eternamente grato por ter você ao meu lado.",
    "Seu amor é o maior presente que a vida me deu.",
    "Você é a pessoa que eu sempre quis encontrar.",
    "Eu sou a pessoa mais feliz do mundo por ter você ao meu lado.",
    "Você é a razão pela qual eu vivo e sou feliz.",
    "Cada dia com você é uma nova oportunidade para ser feliz.",
    "Eu te amo mais do que posso expressar em palavras.",
    "Você é a luz que ilumina meu caminho e meu coração.",
    "Eu sou eternamente grato por ter você na minha vida.",
    "Você é a razão do meu sorriso e da minha alegria.",
    "Te amo mais do que palavras podem descrever.",
    "Você é a pessoa com quem eu quero passar todos os meus dias.",
    "Eu amo a forma como você me faz sentir especial.",
    "Você é a razão pela qual eu acordo todos os dias com um sorriso.",
    "Você é meu sonho que se tornou realidade.",
    "Eu sou a pessoa mais feliz por ter você ao meu lado.",
    "Você é a razão do meu sorriso e da minha felicidade.",
];

const quoteElement = document.getElementById('quote');
const refreshButton = document.getElementById('refreshButton');

let usedQuotes = []; // Array para armazenar as frases já exibidas

function getRandomQuote() {
    if (usedQuotes.length === quotes.length) {
        // Se todas as frases foram usadas, reinicie a lista
        usedQuotes = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex)); // Garante que a frase não foi usada ainda

    usedQuotes.push(randomIndex);
    return quotes[randomIndex];
}

function setQuote() {
    const storedDate = localStorage.getItem('quoteDate');
    const today = new Date().toDateString();

    if (storedDate !== today) {
        const newQuote = getRandomQuote();
        quoteElement.textContent = newQuote;
        localStorage.setItem('quote', newQuote);
        localStorage.setItem('quoteDate', today);
    } else {
        quoteElement.textContent = localStorage.getItem('quote');
    }
}

refreshButton.addEventListener('click', () => {
    const newQuote = getRandomQuote();
    quoteElement.textContent = newQuote;
    localStorage.setItem('quote', newQuote);
});

setQuote(); // Set the initial quote when the page loads
