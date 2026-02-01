const banco = [
    { p: "____ você não foi à festa?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Em perguntas diretas no início da frase, usamos 'Por que' separado e sem acento." },
    { p: "Não fui ____ precisei estudar.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Em respostas e explicações (causa), usamos 'porque' junto e sem acento." },
    { p: "Eles estão rindo de quê? Não sei o ____.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Quando substantivado (com artigo 'o'), significa 'o motivo' e leva acento circunflexo." },
    { p: "Você não comeu nada, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "No final de frases ou isolado antes de pontuação, o 'que' torna-se tônico e deve ser acentuado." },
    { p: "Eis o motivo ____ lutei tanto.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Equivale a 'pelo qual'. É a junção da preposição 'por' com o pronome relativo 'que'." },
    { p: "Aproximei-me ____ queria ajudar.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Funciona como uma conjunção explicativa (pois, visto que)." },
    { p: "____ as ruas estão vazias?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Interrogativa direta no início da sentença." },
    { p: "Diga-me o ____ de tanta confusão.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "O artigo 'o' transforma a palavra em substantivo, exigindo a forma junta e com acento." },
    { p: "Estudamos ____ queremos um futuro melhor.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Introduz uma causa ou finalidade em frases afirmativas." },
    { p: "Você chegou atrasado, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "A pontuação final atrai o acento para o 'quê' separado." },
    { p: "O caminho ____ passei era perigoso.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Pode ser substituído por 'pelo qual', mantendo-se separado." },
    { p: "Não entendi o ____ da sua raiva.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Equivale ao substantivo 'motivo'." },
    { p: "____ você está chorando?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Início de frase interrogativa." },
    { p: "Vou embora ____ já está tarde.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Conjunção coordenativa explicativa." },
    { p: "Ninguém explicou ____ o voo atrasou.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Pergunta indireta (equivale a 'por qual razão')." },
    { p: "Você parou de falar, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "A posição final na frase exige acentuação." },
    { p: "____ não houve aula hoje?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Forma padrão para iniciar perguntas." },
    { p: "É um ____ muito complexo.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "O numeral 'um' substantiva a palavra." },
    { p: "Não sei ____ as pessoas mentem.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Interrogativa indireta: separado e sem acento." },
    { p: "Ele sumiu e não disse ____.", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "Final de frase com pausa pontuada." }
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
    const correta = q.r;
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    const feedback = document.getElementById('feedback') || criarFeedback();
    
    if(esc === correta) {
        btn.style.background = "#4ade80"; btn.style.color = "white";
        feedback.innerHTML = `<b style="color:#16a34a">✨ Excelente!</b><br>${q.e}`;
    } else {
        btn.style.background = "#f87171"; btn.style.color = "white";
        feedback.innerHTML = `<b style="color:#dc2626">⚠️ Atenção:</b> A resposta correta era <b>${correta}</b>.<br>${q.e}`;
    }
    feedback.classList.remove('hidden');
    document.getElementById('btn-prox').classList.remove('hidden');
}

function criarFeedback() {
    const p = document.createElement('p'); p.id = 'feedback';
    p.style.cssText = "margin-top:20px; color:#475569; padding:15px; border-radius:15px; background:rgba(115,103,240,0.05); line-height:1.5;";
    document.getElementById('opcoes').after(p);
    return p;
}

function proxima() { 
    atual++; 
    if(atual < banco.length) iniciar(); 
    else document.querySelector('.quiz-box').innerHTML = "<h2>Simulado Concluído!</h2><a href='../pratica.html' class='back'>Voltar</a>"; 
}