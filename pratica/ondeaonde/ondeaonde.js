const banco = [
    { p: "____ você colocou as chaves?", o: ["Onde", "Aonde"], r: "Onde", e: "Lugar fixo/estatismo pede 'Onde'." },
    { p: "____ você pretende ir nas férias?", o: ["Onde", "Aonde"], r: "Aonde", e: "Verbo de movimento (ir) exige 'Aonde' (para onde)." },
    { p: "Não sei ____ você mora.", o: ["onde", "aonde"], r: "onde", e: "Morar indica permanência, logo usamos 'Onde'." },
    { p: "____ nos leva este caminho?", o: ["Onde", "Aonde"], r: "Aonde", e: "Verbos que indicam direção ou destino pedem 'Aonde'." },
    { p: "Fique ____ eu possa te ver.", o: ["onde", "aonde"], r: "onde", e: "Indica localização fixa." },
    { p: "____ você quer chegar com isso?", o: ["Onde", "Aonde"], r: "Aonde", e: "Verbo chegar indica destino/movimento." },
    { p: "O lugar ____ estamos é lindo.", o: ["onde", "aonde"], r: "onde", e: "Estar indica localização fixa." },
    { p: "____ foram meus amigos?", o: ["Onde", "Aonde"], r: "Aonde", e: "Movimento: Quem vai, vai A algum lugar." },
    { p: "A cidade ____ nasci é pequena.", o: ["onde", "aonde"], r: "onde", e: "Nascer ocorre em um ponto fixo." },
    { p: "____ for o seu tesouro, lá estará seu coração.", o: ["Onde", "Aonde"], r: "Onde", e: "Indica local onde algo se encontra." },
    { p: "Diga-me ____ está o controle.", o: ["onde", "aonde"], r: "onde", e: "Estar indica posição fixa." },
    { p: "____ estão os documentos?", o: ["Onde", "Aonde"], r: "Onde", e: "Localização atual." },
    { p: "Eles não sabem ____ ir.", o: ["onde", "aonde"], r: "aonde", e: "Ir pede destino (A + onde)." },
    { p: "____ nos encontraremos?", o: ["Onde", "Aonde"], r: "Onde", e: "Encontro em ponto fixo." },
    { p: "Vá ____ seu coração mandar.", o: ["onde", "aonde"], r: "aonde", e: "Movimento em direção a um destino." },
    { p: "____ se localiza o prédio?", o: ["Onde", "Aonde"], r: "Onde", e: "Localização geográfica fixa." },
    { p: "____ você vai com essa roupa?", o: ["Onde", "Aonde"], r: "Aonde", e: "Movimento para um lugar." },
    { p: "Não imagino ____ eles se meteram.", o: ["onde", "aonde"], r: "onde", e: "Estar metido em algum lugar (fixo)." },
    { p: "O restaurante ____ fomos é caro.", o: ["onde", "aonde"], r: "aonde", e: "Fomos (ir) exige preposição 'a'." },
    { p: "____ fica a saída?", o: ["Onde", "Aonde"], r: "Onde", e: "Localização de algo parado." }
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
}
function checar(btn, esc) {
    const correta = banco[atual].r;
    document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
    if(esc === correta) { btn.style.background = "#4ade80"; btn.style.color = "white"; }
    else { btn.style.background = "#f87171"; btn.style.color = "white"; }
    document.getElementById('btn-prox').classList.remove('hidden');
}
function proxima() {
    atual++;
    if(atual < banco.length) iniciar();
    else { document.querySelector('.quiz-box').innerHTML = "<h2>Simulado Concluído!</h2><a href='../pratica.html' class='back'>Voltar</a>"; }
}