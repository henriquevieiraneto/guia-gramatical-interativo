const dados = {
    titulo: "Ratificar vs Retificar",
    secoes: [
        { t: "Ratificar (Confirmar)", c: "Significa validar, comprovar ou reafirmar. Ex: O governo <b>ratificou</b> o acordo de paz." },
        { t: "Retificar (Corrigir)", c: "Significa ajustar, emendar ou consertar um erro. Ex: Preciso <b>retificar</b> os dados na planilha." },
        { t: "Como não esquecer?", c: "Pense em 'RE' de 'REfazer' ou 'REmediar' para <b>REtificar</b> (corrigir)." }
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