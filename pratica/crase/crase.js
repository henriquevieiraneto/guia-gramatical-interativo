const banco = [
    { p: "Vou ____ escola todos os dias.", o: ["a", "à", "as", "às"], r: "à", e: "O verbo 'ir' pede a preposição 'a' e 'escola' é substantivo feminino que aceita o artigo 'a'. A fusão (a + a) gera a crase." },
    { p: "Entreguei o presente ____ ela.", o: ["a", "à", "as", "às"], r: "a", e: "Nunca ocorre crase antes de pronomes pessoais (ela, você, etc), pois eles não admitem artigo feminino." },
    { p: "O curso será das 8h ____ 12h.", o: ["a", "à", "as", "às"], r: "às", e: "Indicações de horas exatas e determinadas exigem o uso do acento grave." },
    { p: "Andamos ____ pé pela orla.", o: ["a", "à", "as", "às"], r: "a", e: "Não existe crase antes de palavras masculinas, como 'pé'." },
    { p: "Refiro-me ____ alunas aplicadas.", o: ["a", "à", "as", "às"], r: "às", e: "O verbo 'referir-se' pede preposição 'a'. Como o substantivo 'alunas' está no plural, ocorre a fusão com o artigo 'as'." },
    { p: "Iremos ____ Paris nas férias.", o: ["a", "à", "as", "às"], r: "a", e: "Dica: 'Se volto DE Paris, crase pra quê?'. Nomes de cidades que não admitem artigo não recebem crase." },
    { p: "Assisti ____ peça de teatro.", o: ["a", "à", "as", "às"], r: "à", e: "O verbo 'assistir' (no sentido de ver) exige a preposição 'a'. Como 'peça' é feminino, ocorre a crase." },
    { p: "Eles voltaram ____ casa cedo.", o: ["a", "à", "as", "às"], r: "a", e: "A palavra 'casa' (próprio lar), quando não vem acompanhada de um adjetivo ou especificação, não aceita crase." },
    { p: "Faremos uma viagem ____ cavalo.", o: ["a", "à", "as", "às"], r: "a", e: "Crase proibida antes de substantivos masculinos." },
    { p: "Ele comprou tudo ____ prazo.", o: ["a", "à", "as", "às"], r: "a", e: "'Prazo' é uma palavra masculina. Portanto, não há crase." },
    { p: "O jantar será ____ moda da casa.", o: ["a", "à", "as", "às"], r: "à", e: "Mesmo que a palavra 'moda' esteja implícita, expressões que indicam costume ou estilo levam crase." },
    { p: "Ficamos cara ____ cara.", o: ["a", "à", "as", "às"], r: "a", e: "Não se utiliza crase entre palavras repetidas que formam expressões idiomáticas." },
    { p: "Fui ____ fazenda do meu tio.", o: ["a", "à", "as", "às"], r: "à", e: "Diferente de 'casa', quando o lugar está especificado ('do meu tio'), a crase torna-se obrigatória." },
    { p: "Enviei o e-mail ____ diretoria.", o: ["a", "à", "as", "às"], r: "à", e: "Quem envia, envia algo 'a' algum lugar. 'Diretoria' é substantivo feminino, logo: à." },
    { p: "Ele não deu importância ____ reclamações.", o: ["a", "à", "as", "às"], r: "às", e: "Plural com plural: preposição 'a' + artigo 'as'." },
    { p: "Escrevi o texto ____ caneta.", o: ["a", "à", "as", "às"], r: "à", e: "Locuções adverbiais de instrumento femininas recebem o acento grave para evitar ambiguidade." },
    { p: "Você deve obedecer ____ leis.", o: ["a", "à", "as", "às"], r: "às", e: "O verbo 'obedecer' é transitivo indireto e exige a preposição 'a'." },
    { p: "Diga ____ verdade para mim.", o: ["a", "à", "as", "às"], r: "a", e: "Aqui o 'a' é apenas um artigo definido. Quem diz, diz 'algo' (objeto direto)." },
    { p: "Chegamos ____ uma hora da manhã.", o: ["a", "à", "as", "às"], r: "à", e: "Crase obrigatória em locuções que indicam tempo determinado (horas)." },
    { p: "Pedi ajuda ____ Maria.", o: ["a", "à", "as", "às"], r: "à", e: "Antes de nomes próprios femininos, o uso do artigo é facultativo, logo a crase também é facultativa (mas correta)." }
];

let atual = 0;

function iniciar() {
    const q = banco[atual];
    document.getElementById('num').innerText = atual + 1;
    document.getElementById('pergunta').innerText = q.p;
    document.getElementById('opcoes').innerHTML = q.o.map(opt => 
        `<button class="opt-btn" onclick="checar(this, '${opt}')">${opt}</button>`
    ).join('');
    
    document.getElementById('btn-prox').classList.add('hidden');
    
    // Limpa ou esconde o feedback da questão anterior
    const f = document.getElementById('feedback'); 
    if(f) f.classList.add('hidden');
}

function checar(btn, esc) {
    const q = banco[atual];
    const correta = q.r;
    
    // Desabilita todos os botões após a escolha
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    
    const feedback = document.getElementById('feedback') || criarFeedback();
    
    if(esc === correta) {
        btn.style.background = "#4ade80"; // Verde
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#16a34a; font-weight:800;">✨ Excelente!</span><br>${q.e}`;
    } else {
        btn.style.background = "#f87171"; // Vermelho
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#dc2626; font-weight:800;">⚠️ Atenção:</span> A opção correta era <b>${correta}</b>.<br>${q.e}`;
    }
    
    feedback.classList.remove('hidden');
    document.getElementById('btn-prox').classList.remove('hidden');
}

function criarFeedback() {
    const p = document.createElement('p');
    p.id = 'feedback';
    // Estilo da caixa de explicação
    p.style.cssText = "margin-top:20px; color:#475569; padding:15px; border-radius:15px; background:rgba(115,103,240,0.05); line-height:1.5; font-size: 0.95rem; border: 1px solid rgba(115,103,240,0.1);";
    document.getElementById('opcoes').after(p);
    return p;
}

function proxima() {
    atual++;
    if(atual < banco.length) {
        iniciar();
    } else {
        // Tela de finalização
        document.querySelector('.quiz-box').innerHTML = `
            <div style="padding: 20px;">
                <h2 style="color: #7367f0;">🎯 Simulado Concluído!</h2>
                <p style="color: #64748b;">Você revisou as 20 principais regras de crase.</p>
                <a href="../pratica.html" class="back" style="margin-top:20px; display:inline-block; padding: 10px 20px; background: #7367f0; color: white; border-radius: 25px; text-decoration: none; font-weight: bold;">Voltar aos Desafios</a>
            </div>
        `;
    }
}