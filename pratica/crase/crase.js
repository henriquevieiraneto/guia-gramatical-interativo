const banco = [
    { p: "Vou ____ escola todos os dias.", o: ["a", "à", "as", "às"], r: "à", e: "O verbo 'ir' pede a preposição 'a' e 'escola' aceita o artigo 'a'. (a + a = à)." },
    { p: "Entreguei o presente ____ ela.", o: ["a", "à", "as", "às"], r: "a", e: "Não ocorre crase antes de pronomes pessoais (ela, você, etc)." },
    { p: "O curso será das 8h ____ 12h.", o: ["a", "à", "as", "às"], r: "às", e: "Indicação de horas exatas exige crase." },
    { p: "Andamos ____ pé pela orla.", o: ["a", "à", "as", "às"], r: "a", e: "Não se usa crase antes de palavras masculinas (pé)." },
    { p: "Refiro-me ____ alunas aplicadas.", o: ["a", "à", "as", "às"], r: "às", e: "Fusão da preposição 'a' com o artigo plural 'as'." },
    { p: "Iremos ____ Paris nas férias.", o: ["a", "à", "as", "às"], r: "a", e: "Dica: 'Vou a Paris, volto DE Paris'. Se volta DE, a crase é pra quê? (Sem crase)." },
    { p: "Assisti ____ peça de teatro.", o: ["a", "à", "as", "às"], r: "à", e: "O verbo 'assistir' (ver) pede a preposição 'a'. Peça é feminino." },
    { p: "Eles voltaram ____ casa cedo.", o: ["a", "à", "as", "às"], r: "a", e: "A palavra 'casa' (próprio lar) sem especificação não aceita crase." },
    { p: "Faremos uma viagem ____ cavalo.", o: ["a", "à", "as", "às"], r: "a", e: "Cavalo é palavra masculina, logo, sem crase." },
    { p: "Ele comprou tudo ____ prazo.", o: ["a", "à", "as", "às"], r: "a", e: "Prazo é masculino. Sem crase." },
    { p: "O jantar será ____ moda da casa.", o: ["a", "à", "as", "às"], r: "à", e: "Expressões que indicam 'à moda de' sempre levam crase." },
    { p: "Ficamos cara ____ cara.", o: ["a", "à", "as", "às"], r: "a", e: "Entre palavras repetidas não se usa crase." },
    { p: "Fui ____ fazenda do meu tio.", o: ["a", "à", "as", "às"], r: "à", e: "Como a fazenda está especificada (do meu tio), ocorre a crase." },
    { p: "Enviei o e-mail ____ diretoria.", o: ["a", "à", "as", "às"], r: "à", e: "Diretoria é substantivo feminino que aceita artigo." },
    { p: "Ele não deu importância ____ reclamações.", o: ["a", "à", "as", "às"], r: "às", e: "A preposição 'a' se funde com o artigo plural 'as'." },
    { p: "Escrevi o texto ____ caneta.", o: ["a", "à", "as", "às"], r: "à", e: "Instrumentos ou modos femininos levam crase (à caneta, à mão)." },
    { p: "Você deve obedecer ____ leis.", o: ["a", "à", "as", "às"], r: "às", e: "Quem obedece, obedece A alguma coisa. Leis é feminino plural." },
    { p: "Diga ____ verdade para mim.", o: ["a", "à", "as", "às"], r: "a", e: "Aqui o 'a' é apenas artigo direto do verbo dizer (quem diz, diz algo)." },
    { p: "Chegamos ____ uma hora da manhã.", o: ["a", "à", "as", "às"], r: "à", e: "Indicação de horas determinadas." },
    { p: "Pedi ajuda ____ Maria.", o: ["a", "à", "as", "às"], r: "à", e: "Antes de nomes próprios femininos a crase é facultativa, mas correta." }
];

let atual = 0;
function iniciar() {
    const q = banco[atual];
    document.getElementById('num').innerText = atual + 1;
    document.getElementById('pergunta').innerText = q.p;
    document.getElementById('opcoes').innerHTML = q.o.map(opt => `<button class="opt-btn" onclick="checar(this, '${opt}')">${opt}</button>`).join('');
    document.getElementById('btn-prox').classList.add('hidden');
    const f = document.getElementById('feedback'); if(f) f.classList.add('hidden');
}
function checar(btn, esc) {
    const q = banco[atual];
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    const feedback = document.getElementById('feedback') || criarFeedback();
    feedback.innerText = q.e;
    feedback.classList.remove('hidden');
    if(esc === q.r) { btn.style.background = "#4ade80"; btn.style.color = "white"; }
    else { btn.style.background = "#f87171"; btn.style.color = "white"; }
    document.getElementById('btn-prox').classList.remove('hidden');
}
function criarFeedback() {
    const p = document.createElement('p'); p.id = 'feedback';
    p.style.cssText = "margin-top:20px; color:#64748b; font-style:italic; font-weight:600;";
    document.getElementById('opcoes').after(p);
    return p;
}
function proxima() { atual++; if(atual < banco.length) iniciar(); else document.querySelector('.quiz-box').innerHTML = "<h2>Simulado Concluído!</h2><a href='../pratica.html' class='back'>Voltar</a>"; }