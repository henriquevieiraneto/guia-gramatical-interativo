const banco = [
    { p: "____ você colocou as chaves?", o: ["Onde", "Aonde"], r: "Onde", e: "Para lugares fixos ou verbos que indicam permanência (como 'colocar'), usamos 'Onde'." },
    { p: "____ você pretende ir nas férias?", o: ["Onde", "Aonde"], r: "Aonde", e: "O verbo 'ir' indica movimento e exige a preposição 'a' (a + onde = aonde)." },
    { p: "Não sei ____ você mora.", o: ["onde", "aonde"], r: "onde", e: "Morar é um estado de permanência e repouso, por isso usamos 'Onde'." },
    { p: "____ nos leva este caminho?", o: ["Onde", "Aonde"], r: "Aonde", e: "Verbos que indicam destino, direção ou movimento para um lugar pedem 'Aonde'." },
    { p: "Fique ____ eu possa te ver.", o: ["onde", "aonde"], r: "onde", e: "Indica localização estática, um ponto parado no espaço." },
    { p: "____ você quer chegar com isso?", o: ["Onde", "Aonde"], r: "Aonde", e: "O verbo 'chegar' exige a preposição 'a'. Quem chega, chega A algum lugar." },
    { p: "O lugar ____ estamos é lindo.", o: ["onde", "aonde"], r: "onde", e: "O verbo 'estar' indica uma posição fixa no momento." },
    { p: "____ foram meus amigos?", o: ["Onde", "Aonde"], r: "Aonde", e: "O verbo 'ir' (foram) indica deslocamento para um destino." },
    { p: "A cidade ____ nasci é pequena.", o: ["onde", "aonde"], r: "onde", e: "O nascimento ocorre em um local fixo, sem ideia de movimento para um destino." },
    { p: "____ for o seu tesouro, lá estará seu coração.", o: ["Onde", "Aonde"], r: "Onde", e: "Indica o local onde algo se encontra ou reside." },
    { p: "Diga-me ____ está o controle.", o: ["onde", "aonde"], r: "onde", e: "'Estar' é o verbo clássico de localização fixa." },
    { p: "____ estão os documentos?", o: ["Onde", "Aonde"], r: "Onde", e: "Pergunta sobre a localização atual de objetos parados." },
    { p: "Eles não sabem ____ ir.", o: ["onde", "aonde"], r: "aonde", e: "Ir pede um destino final, exigindo a preposição 'a'." },
    { p: "____ nos encontraremos?", o: ["Onde", "Aonde"], r: "Onde", e: "O encontro ocorre em um ponto de referência fixo." },
    { p: "Vá ____ seu coração mandar.", o: ["onde", "aonde"], r: "aonde", e: "Indica movimento e direção em relação a um destino." },
    { p: "____ se localiza o prédio?", o: ["Onde", "Aonde"], r: "Onde", e: "Localização geográfica é sempre estática." },
    { p: "____ você vai com essa roupa?", o: ["Onde", "Aonde"], r: "Aonde", e: "Movimento em curso (verbo ir)." },
    { p: "Não imagino ____ eles se meteram.", o: ["onde", "aonde"], r: "onde", e: "Estar 'metido' em algum lugar indica posição, não destino." },
    { p: "O restaurante ____ fomos é caro.", o: ["onde", "aonde"], r: "aonde", e: "Fomos (do verbo ir) exige a preposição 'a' para indicar o destino." },
    { p: "____ fica a saída?", o: ["Onde", "Aonde"], r: "Onde", e: "Indica a posição de algo que não se move." }
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
        feedback.innerHTML = `<span style="color:#16a34a; font-weight:800;">📍 Localização exata!</span><br>${q.e}`;
    } else {
        btn.style.background = "#f87171";
        btn.style.color = "white";
        feedback.innerHTML = `<span style="color:#dc2626; font-weight:800;">🧭 Você se perdeu.</span> A resposta correta era <b>${correta}</b>.<br>${q.e}`;
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
                <h2 style="color: #7367f0;">🗺️ Mestre das Coordenadas!</h2>
                <p style="color: #64748b;">Você agora sabe exatamente <b>onde</b> usar cada termo e <b>aonde</b> quer chegar!</p>
                <a href="../pratica.html" class="back" style="margin-top:25px; display:inline-block; padding: 12px 25px; background: #7367f0; color: white; border-radius: 30px; text-decoration: none; font-weight: 800;">Próximo Desafio</a>
            </div>
        `;
    }
}