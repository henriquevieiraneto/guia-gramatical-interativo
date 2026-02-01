const banco = [
    { p: "O juiz decidiu ____ a sentença.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar significa confirmar, validar ou reafirmar algo que já foi decidido." },
    { p: "Preciso ____ o erro no relatório.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar significa corrigir, emendar ou consertar algo que está errado." },
    { p: "O mecânico vai ____ o motor.", o: ["ratificar", "retificar"], r: "retificar", e: "No contexto técnico, retificar é alinhar, ajustar ou corrigir o funcionamento de uma peça." },
    { p: "O governo veio ____ o acordo.", o: ["ratificar", "retificar"], r: "ratificar", e: "Assinar um documento para validar ou confirmar um compromisso anterior é ratificá-lo." },
    { p: "Vou ____ o que eu disse antes.", o: ["ratificar", "retificar"], r: "ratificar", e: "Se você mantém sua palavra e a confirma, você está ratificando sua declaração." },
    { p: "Por favor, ____ os dados da nota fiscal.", o: ["ratificar", "retificar"], r: "retificar", e: "Se os dados estão incorretos, eles precisam de uma retificação (correção)." },
    { p: "A testemunha pôde ____ o depoimento.", o: ["ratificar", "retificar"], r: "ratificar", e: "Confirmar a veracidade dos fatos narrados anteriormente." },
    { p: "É necessário ____ o edital publicado.", o: ["ratificar", "retificar"], r: "retificar", e: "Quando um edital tem falhas, publica-se uma retificação para corrigi-las." },
    { p: "A diretoria resolveu ____ a demissão.", o: ["ratificar", "retificar"], r: "ratificar", e: "Neste caso, a diretoria confirmou e manteve a decisão de demitir." },
    { p: "Escrevi seu nome errado, vou ____.", o: ["ratificar", "retificar"], r: "retificar", e: "Consertar a grafia incorreta é um ato de retificação." },
    { p: "Eles vieram ____ o compromisso.", o: ["ratificar", "retificar"], r: "ratificar", e: "Validar ou tornar firme um trato feito anteriormente." },
    { p: "Você deve ____ a postura de hoje.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar a postura significa corrigir um comportamento inadequado." },
    { p: "O documento serve para ____ o contrato.", o: ["ratificar", "retificar"], r: "ratificar", e: "Dar validade jurídica e confirmar os termos do contrato." },
    { p: "O jornal teve que ____ a notícia.", o: ["ratificar", "retificar"], r: "retificar", e: "O jornal publicou uma errata para corrigir uma informação falsa (retificar)." },
    { p: "O resultado foi ____ pela banca.", o: ["ratificado", "retificado"], r: "ratificado", e: "O resultado foi validado e dado como oficial." },
    { p: "O texto está confuso e precisa ser ____.", o: ["ratificado", "retificado"], r: "retificado", e: "Textos confusos precisam de ajustes e correções (retificações)." },
    { p: "Ele ____ o que o pai falou.", o: ["ratificou", "retificou"], r: "ratificou", e: "Ele concordou e reafirmou a fala do pai." },
    { p: "A prefeitura ____ o nome da rua.", o: ["ratificou", "retificou"], r: "retificou", e: "Houve uma mudança/correção no nome oficial da rua." },
    { p: "A empresa ____ as metas anuais.", o: ["ratificou", "retificou"], r: "ratificou", e: "A diretoria confirmou que os objetivos do ano permanecem os mesmos." },
    { p: "O aluno teve que ____ sua inscrição.", o: ["ratificar", "retificar"], r: "retificar", e: "Mudar dados que foram preenchidos erroneamente no formulário." }
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
        btn.style.background = "#4ade80";
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#16a34a; font-weight:800;">✅ Tudo certo!</span><br>${q.e}`;
    } else {
        btn.style.background = "#f87171";
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#dc2626; font-weight:800;">❌ Erro de vocabulário.</span> A resposta certa era <b>${correta}</b>.<br>${q.e}`;
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
                <h2 style="color: #7367f0;">🛠️ Vocabulário Retificado!</h2>
                <p style="color: #64748b;">Parabéns! Você confirmou (ratificou) seu conhecimento sobre esses parônimos.</p>
                <a href="../pratica.html" class="back" style="margin-top:25px; display:inline-block; padding: 12px 25px; background: #7367f0; color: white; border-radius: 30px; text-decoration: none; font-weight: 800;">Finalizar Simulados</a>
            </div>
        `;
    }
}