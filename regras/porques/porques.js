const dados = {
    titulo: "Os Porquês",
    secoes: [
        { t: "Por que (Separado e sem acento)", c: "Usado em perguntas diretas ou indiretas. Pode ser substituído por 'por qual razão' ou 'pelo qual'." },
        { t: "Porque (Junto e sem acento)", c: "Usado em respostas, explicações ou causas. Funciona como uma conjunção (pois, visto que)." },
        { t: "Por quê (Separado e com acento)", c: "Usado no final de frases ou isolado antes de uma pontuação." },
        { t: "Porquê (Junto e com acento)", c: "Substantivo. Equivale a 'o motivo' ou 'a razão' e sempre vem acompanhado de artigo." }
    ]
};

function carregar() {
    const container = document.getElementById('conteudo');
    document.getElementById('titulo').innerText = dados.titulo;
    container.innerHTML = dados.secoes.map(s => `
        <span class="secao-titulo">${s.t}</span>
        <p>${s.c}</p>
        <hr>
    `).join('');
}