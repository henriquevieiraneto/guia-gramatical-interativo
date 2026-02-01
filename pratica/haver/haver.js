const banco = [
    { p: "____ muitos livros na mesa.", o: ["Há", "Havia", "Haviam", "Faz"], r: "Há", e: "Sentido de existir: o verbo haver é impessoal e fica no singular." },
    { p: "Não o vejo ____ muitos anos.", o: ["a", "há"], r: "há", e: "Tempo decorrido: usa-se 'há' (pode substituir por 'faz')." },
    { p: "____ problemas que parecem insolúveis.", o: ["Há", "Hão"], r: "Há", e: "Impessoal (existir), sempre singular." },
    { p: "Antigamente, ____ festas aqui.", o: ["havia", "haviam"], r: "havia", e: "No passado (existir), permanece no singular." },
    { p: "Eles já ____ saído quando cheguei.", o: ["havia", "haviam"], r: "haviam", e: "Aqui é verbo auxiliar: concorda com o sujeito 'Eles'." },
    { p: "Tudo aconteceu ____ pouco tempo.", o: ["a", "há"], r: "há", e: "Tempo passado: 'há'." },
    { p: "Pode ____ novas oportunidades.", o: ["haver", "haverem"], r: "haver", e: "Em locuções com sentido de existir, o auxiliar também fica no singular." },
    { p: "De hoje ____ uma semana viajarei.", o: ["a", "há"], r: "a", e: "Tempo futuro: usa-se apenas a preposição 'a'." },
    { p: "____ de existir soluções.", o: ["Há", "Hão"], r: "Há", e: "Sentido de existir." },
    { p: "Sempre ____ dúvidas na aula.", o: ["haverá", "haverão"], r: "haverá", e: "Futuro impessoal: singular." },
    { p: "Não ____ motivos para chorar.", o: ["há", "hão"], r: "há", e: "Impessoalidade do verbo haver." },
    { p: "Deve ____ dez pessoas lá fora.", o: ["haver", "haverem"], r: "haver", e: "Locução verbal impessoal." },
    { p: "____ de ser feito o certo.", o: ["Haverá", "Haverão"], r: "Haverá", e: "Singular obrigatório." },
    { p: "Tudo isso ocorreu ____ séculos.", o: ["a", "há"], r: "há", e: "Passado distante: 'há'." },
    { p: "Eles ____ de conseguir a vaga.", o: ["hão", "há"], r: "hão", e: "Verbo auxiliar indicando obrigação/desejo: concorda com o plural." },
    { p: "____ cerca de mil pessoas no show.", o: ["Havia", "Haviam"], r: "Havia", e: "Sentido de existir." },
    { p: "Disseram que ____ de vir hoje.", o: ["haviam", "havia"], r: "haviam", e: "Auxiliar: concorda com o sujeito oculto 'Eles'." },
    { p: "____ dias em que nada dá certo.", o: ["Há", "Hão"], r: "Há", e: "Existir: singular." },
    { p: "As provas ocorrem daqui ____ pouco.", o: ["a", "há"], r: "a", e: "Tempo futuro próximo." },
    { p: "Não ____ vagas no hotel.", o: ["havia", "haviam"], r: "havia", e: "Impessoal: singular." }
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
    p.style.cssText = "margin-top:20px; color:#64748b; font-style:italic; font-weight:600; line-height:1.4;";
    document.getElementById('opcoes').after(p);
    return p;
}
function proxima() { 
    atual++; 
    if(atual < banco.length) iniciar(); 
    else document.querySelector('.quiz-box').innerHTML = "<h2>Simulado Concluído!</h2><a href='../pratica.html' class='back'>Voltar</a>"; 
}