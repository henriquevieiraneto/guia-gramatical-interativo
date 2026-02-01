const banco = [
    { p: "O juiz decidiu ____ a sentença.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Confirmar/Validar." },
    { p: "Preciso ____ o erro no relatório.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Corrigir um erro." },
    { p: "O mecânico vai ____ o motor.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Ajustar/Corrigir." },
    { p: "O governo veio ____ o acordo.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Reafirmar/Confirmar." },
    { p: "Vou ____ o que eu disse antes.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Manter a mesma posição." },
    { p: "Por favor, ____ os dados da nota fiscal.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Corrigir dados errados." },
    { p: "A testemunha pôde ____ o depoimento.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Confirmar o que foi dito." },
    { p: "É necessário ____ o edital publicado.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Corrigir falhas no edital." },
    { p: "A diretoria resolveu ____ a demissão.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Confirmar o desligamento." },
    { p: "Escrevi seu nome errado, vou ____.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Consertar a grafia." },
    { p: "Eles vieram ____ o compromisso.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Validar o compromisso." },
    { p: "Você deve ____ a postura de hoje.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Corrigir o comportamento." },
    { p: "O documento serve para ____ o contrato.", o: ["ratificar", "retificar"], r: "ratificar", e: "Ratificar = Dar validade legal." },
    { p: "O jornal teve que ____ a notícia.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Publicar uma correção." },
    { p: "O resultado foi ____ pela banca.", o: ["ratificado", "retificado"], r: "ratificado", e: "Ratificado = Confirmado." },
    { p: "O texto está confuso e precisa ser ____.", o: ["ratificado", "retificado"], r: "retificado", e: "Retificado = Corrigido." },
    { p: "Ele ____ o que o pai falou.", o: ["ratificou", "retificou"], r: "ratificou", e: "Ratificou = Concordou/Confirmou." },
    { p: "A prefeitura ____ o nome da rua.", o: ["ratificou", "retificou"], r: "retificou", e: "Retificou = Alterou/Corrigiu." },
    { p: "A empresa ____ as metas anuais.", o: ["ratificou", "retificou"], r: "ratificou", e: "Ratificou = Confirmou as metas." },
    { p: "O aluno teve que ____ sua inscrição.", o: ["ratificar", "retificar"], r: "retificar", e: "Retificar = Corrigir erros na inscrição." }
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