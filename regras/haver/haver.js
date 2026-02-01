const dados = {
    titulo: "Verbo Haver",
    secoes: [
        { t: "Sentido de Existir", c: "Quando significa 'existir', o verbo é impessoal e não vai para o plural. Ex: <b>Havia</b> muitos problemas (e não 'haviam')." },
        { t: "Tempo Decorrido", c: "Indica tempo passado. Ex: Não o vejo <b>há</b> dez anos. Dica: pode ser substituído por 'faz'." },
        { t: "Haver como Auxiliar", c: "Neste caso, ele concorda com o sujeito. Ex: Eles <b>haviam</b> estudado muito." }
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