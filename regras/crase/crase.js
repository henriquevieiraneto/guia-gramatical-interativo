const dados = {
    titulo: "Uso da Crase",
    secoes: [
        { t: "A Regra Geral", c: "A crase ocorre quando há a junção da preposição <b>A</b> com o artigo feminino <b>A</b>. Dica: substitua a palavra feminina por uma masculina; se virar 'AO', tem crase." },
        { t: "Antes de Horas", c: "Sempre usamos crase antes de horas exatas (Ex: Chegarei às 14h)." },
        { t: "Antes de Masculinos", c: "Nunca ocorre crase antes de palavras masculinas, verbos ou pronomes pessoais." },
        { t: "Expressões Adverbiais", c: "Usada em expressões femininas de tempo, modo ou lugar (Ex: Às vezes, à esquerda, à noite)." }
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