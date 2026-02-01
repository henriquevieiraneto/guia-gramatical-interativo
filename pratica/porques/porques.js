const banco = [
    { p: "____ você não foi à festa?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Início de pergunta direta: usa-se 'Por que' separado e sem acento." },
    { p: "Não fui ____ precisei estudar.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Resposta ou explicação: usa-se 'porque' junto e sem acento." },
    { p: "Eles estão rindo de quê? Não sei o ____.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Substantivado: acompanhado de artigo, significa 'o motivo'." },
    { p: "Você não comeu nada, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "Final de frase: separado e com acento devido à pontuação." },
    { p: "Eis o motivo ____ lutei tanto.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Equivale a 'pelo qual': pronome relativo separado e sem acento." },
    { p: "Aproximei-me ____ queria ajudar.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Indica causa ou justificativa: conjunção explicativa." },
    { p: "____ as ruas estão vazias?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Pergunta direta no início da frase." },
    { p: "Diga-me o ____ de tanta confusão.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Funciona como substantivo (o porquê)." },
    { p: "Estudamos ____ queremos um futuro melhor.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Conjunção causal: liga a consequência à sua causa." },
    { p: "Você chegou atrasado, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "Separado e com acento por estar imediatamente antes do ponto." },
    { p: "O caminho ____ passei era perigoso.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Equivale a 'pelo qual'." },
    { p: "Não entendi o ____ da sua raiva.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Substantivo: equivale a 'a razão'." },
    { p: "____ você está chorando?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Pronome interrogativo no início da indagação." },
    { p: "Vou embora ____ já está tarde.", o: ["por que", "porque", "por quê", "porquê"], r: "porque", e: "Equivale a 'pois' ou 'visto que'." },
    { p: "Ninguém explicou ____ o voo atrasou.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Pergunta indireta: equivale a 'por qual razão'." },
    { p: "Você parou de falar, ____?", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "Final de frase interrogativa." },
    { p: "____ não houve aula hoje?", o: ["Por que", "Porque", "Por quê", "Porquê"], r: "Por que", e: "Início de pergunta." },
    { p: "É um ____ muito complexo.", o: ["por que", "porque", "por quê", "porquê"], r: "porquê", e: "Substantivo masculino (acompanhado do artigo 'um')." },
    { p: "Não sei ____ as pessoas mentem.", o: ["por que", "porque", "por quê", "porquê"], r: "por que", e: "Interrogativa indireta." },
    { p: "Ele sumiu e não disse ____.", o: ["por que", "porque", "por quê", "porquê"], r: "por quê", e: "Final de frase: o monossílabo 'que' é tônico e acentuado." }
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
    const f = document.getElementById('feedback'); 
    if(f) f.classList.add('hidden');
}

function checar(btn, esc) {
    const q = banco[atual];
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    
    const feedback = document.getElementById('feedback') || criarFeedback();
    feedback.innerText = q.e;
    feedback.classList.remove('hidden');

    if(esc === q.r) {
        btn.style.background = "#4ade80";
        btn.style.color = "white";
    } else {
        btn.style.background = "#f87171";
        btn.style.color = "white";
    }
    document.getElementById('btn-prox').classList.remove('hidden');
}

function criarFeedback() {
    const p = document.createElement('p');
    p.id = 'feedback';
    p.style.cssText = "margin-top:20px; color:#64748b; font-style:italic; font-weight:600; line-height:1.4;";
    document.getElementById('opcoes').after(p);
    return p;
}

function proxima() {
    atual++;
    if(atual < banco.length) {
        iniciar();
    } else {
        document.querySelector('.quiz-box').innerHTML = `
            <h2>Simulado Concluído!</h2>
            <p>Você revisou todas as regras dos Porquês.</p>
            <a href='../pratica.html' class='back' style='margin-top:20px; display:block;'>Voltar aos Simulados</a>
        `;
    }
}