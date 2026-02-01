const dados = {
    titulo: "Onde vs Aonde",
    secoes: [
        { t: "Onde (Lugar fixo)", c: "Indica permanência ou estatismo. Ex: <b>Onde</b> você mora?" },
        { t: "Aonde (Movimento)", c: "Indica destino ou direção. Usado com verbos que pedem a preposição 'a' (ir, chegar, levar). Ex: <b>Aonde</b> vamos hoje?" },
        { t: "Dica de Ouro", c: "Se você puder substituir por 'para onde', use <b>Aonde</b>. Se puder substituir por 'em que lugar', use <b>Onde</b>." }
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