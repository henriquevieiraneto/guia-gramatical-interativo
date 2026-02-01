const banco = [
    { p: "____ muitos livros na mesa.", o: ["Há", "Havia", "Haviam", "Faz"], r: "Há", e: "No sentido de 'existir', o verbo haver é impessoal. Isso significa que ele não possui sujeito e deve permanecer sempre no singular." },
    { p: "Não o vejo ____ muitos anos.", o: ["a", "há"], r: "há", e: "Para indicar tempo decorrido (passado), utilizamos 'há'. Uma dica é substituir por 'faz': se funcionar, o correto é com 'h'." },
    { p: "____ problemas que parecem insolúveis.", o: ["Há", "Hão"], r: "Há", e: "Mesmo que a palavra seguinte ('problemas') esteja no plural, o verbo haver (existir) não flexiona. 'Hão' seria usado apenas como auxiliar." },
    { p: "Antigamente, ____ festas aqui.", o: ["havia", "haviam"], r: "havia", e: "No sentido de 'existir', o verbo haver permanece no singular mesmo no pretérito imperfeito. 'Haviam' é um erro comum de concordância." },
    { p: "Eles já ____ saído quando cheguei.", o: ["havia", "haviam"], r: "haviam", e: "Neste caso, o verbo haver é um auxiliar (tempo composto). Ele deve concordar com o sujeito 'Eles', indo para o plural." },
    { p: "Tudo aconteceu ____ pouco tempo.", o: ["a", "há"], r: "há", e: "Indica tempo passado. O 'a' sozinho é usado para distância ou tempo futuro (ex: Daqui a pouco)." },
    { p: "Pode ____ novas oportunidades.", o: ["haver", "haverem"], r: "haver", e: "Em locuções verbais (verbo auxiliar + haver), a impessoalidade do 'haver' contagia o auxiliar. O correto é 'Pode haver' e não 'Podem haver'." },
    { p: "De hoje ____ uma semana viajarei.", o: ["a", "há"], r: "a", e: "Usa-se 'a' para indicar tempo futuro ou distância. 'Há' indicaria que a semana já passou." },
    { p: "____ de existir soluções.", o: ["Há", "Hão"], r: "Há", e: "Locução verbal com sentido de existência: o verbo principal mantém a estrutura no singular." },
    { p: "Sempre ____ dúvidas na aula.", o: ["haverá", "haverão"], r: "haverá", e: "Futuro do indicativo: no sentido de existir, 'haverá' é a única forma correta." },
    { p: "Não ____ motivos para chorar.", o: ["há", "hão"], r: "há", e: "Uso clássico do verbo impessoal indicando existência." },
    { p: "Deve ____ dez pessoas lá fora.", o: ["haver", "haverem"], r: "haver", e: "O verbo 'deve' (auxiliar) fica no singular porque acompanha o 'haver' impessoal." },
    { p: "____ de ser feito o certo.", o: ["Haverá", "Haverão"], r: "Haverá", e: "Sentido de necessidade ou existência futura: singular obrigatório." },
    { p: "Tudo isso ocorreu ____ séculos.", o: ["a", "há"], r: "há", e: "Tempo decorrido. Se você pode substituir por 'faz séculos', use 'há'." },
    { p: "Eles ____ de conseguir a vaga.", o: ["hão", "há"], r: "hão", e: "Aqui 'hão' é verbo auxiliar de 'conseguir', concordando com o sujeito 'Eles'. Indica intenção ou destino." },
    { p: "____ cerca de mil pessoas no show.", o: ["Havia", "Haviam"], r: "Havia", e: "Sentido de existir no passado: sempre singular." },
    { p: "Disseram que ____ de vir hoje.", o: ["haviam", "havia"], r: "haviam", e: "Atua como auxiliar de 'vir'. Concorda com o sujeito oculto 'Eles'." },
    { p: "____ dias em que nada dá certo.", o: ["Há", "Hão"], r: "Há", e: "Sentido de existência: singular." },
    { p: "As provas ocorrem daqui ____ pouco.", o: ["a", "há"], r: "a", e: "Tempo futuro (proximidade). 'Há pouco' significaria que já ocorreu." },
    { p: "Não ____ vagas no hotel.", o: ["havia", "haviam"], r: "havia", e: "Sentido de existir: o plural 'haviam' é incorreto nesta estrutura." }
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
    const correta = q.r;
    
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    
    const feedback = document.getElementById('feedback') || criarFeedback();
    
    if(esc === correta) {
        btn.style.background = "#4ade80"; // Verde Suave
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#16a34a; font-weight:800;">✔️ Mandou bem!</span><br>${q.e}`;
    } else {
        btn.style.background = "#f87171"; // Vermelho Suave
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#dc2626; font-weight:800;">❌ Não foi dessa vez.</span> A resposta correta é <b>${correta}</b>.<br>${q.e}`;
    }
    
    feedback.classList.remove('hidden');
    document.getElementById('btn-prox').classList.remove('hidden');
}

function criarFeedback() {
    const p = document.createElement('p');
    p.id = 'feedback';
    p.style.cssText = "margin-top:25px; color:#475569; padding:15px; border-radius:15px; background:rgba(115,103,240,0.05); line-height:1.6; font-size: 0.95rem; border-left: 5px solid #7367f0;";
    document.getElementById('opcoes').after(p);
    return p;
}

function proxima() {
    atual++;
    if(atual < banco.length) {
        iniciar();
    } else {
        document.querySelector('.quiz-box').innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h2 style="color: #7367f0;">🎓 Especialista em "Haver"!</h2>
                <p style="color: #64748b;">Você completou o desafio de concordância do verbo mais traiçoeiro da língua portuguesa.</p>
                <a href="../pratica.html" class="back" style="margin-top:25px; display:inline-block; padding: 12px 25px; background: #7367f0; color: white; border-radius: 30px; text-decoration: none; font-weight: 800; box-shadow: 0 4px 15px rgba(115,103,240,0.3);">Escolher outro Simulado</a>
            </div>
        `;
    }
}