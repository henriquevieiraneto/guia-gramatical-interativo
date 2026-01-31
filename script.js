const desafios = [
    { 
        pergunta: "____ dez anos que estudo aqui.", 
        resposta: "faz", 
        explicacao: "O verbo 'fazer', indicando tempo decorrido, é impessoal e deve ficar sempre no singular. Dizer 'fazem dez anos' é um erro comum que você agora evita!" 
    },
    { 
        pergunta: "Ninguém explicou o ____ da mudança.", 
        resposta: "porquê", 
        explicacao: "Quando a palavra é um substantivo (equivalente a 'o motivo') e vem precedida de artigo, ela deve ser escrita junta e com acento." 
    },
    { 
        pergunta: "____ você quer chegar com esse plano?", 
        resposta: "aonde", 
        explicacao: "O verbo 'chegar' indica movimento e rege a preposição 'a'. Portanto, 'a' + 'onde' = 'aonde'." 
    },
    { 
        pergunta: "Naquela tarde, ____ muitos imprevistos.", 
        resposta: "houve", 
        explicacao: "O verbo 'haver' com sentido de 'existir' ou 'acontecer' não vai para o plural. 'Houveram' não existe nesse contexto." 
    },
    { 
        pergunta: "Por favor, ____ o erro no documento.", 
        resposta: "retifique", 
        explicacao: "Retificar significa corrigir. Já 'ratificar' significa confirmar. Como queremos arrumar o erro, o correto é retificar." 
    }
];

let indexAtual = 0;

const questionEl = document.getElementById("question-text");
const inputEl = document.getElementById("user-input");
const btnEl = document.getElementById("check-btn");
const feedbackEl = document.getElementById("feedback-panel");
const statusEl = document.getElementById("status-msg");
const explanationEl = document.getElementById("explanation-text");
const progressEl = document.getElementById("progress-bar");

function iniciarDesafio() {
    const d = desafios[indexAtual];
    questionEl.innerText = d.pergunta;
    inputEl.value = "";
    feedbackEl.classList.add("hidden");
    progressEl.style.width = `${(indexAtual / desafios.length) * 100}%`;
    inputEl.focus();
}

function validar() {
    const resposta = inputEl.value.trim().toLowerCase();
    const correto = desafios[indexAtual].resposta;

    feedbackEl.classList.remove("hidden");

    if (resposta === correto) {
        statusEl.innerText = "✅ Perfeito! Resposta correta.";
        statusEl.style.color = "var(--success)";
        explanationEl.innerText = desafios[indexAtual].explicacao;

        setTimeout(() => {
            indexAtual++;
            if (indexAtual < desafios.length) {
                iniciarDesafio();
            } else {
                finalizar();
            }
        }, 5000);
    } else {
        statusEl.innerText = "❌ Quase lá! Tente novamente.";
        statusEl.style.color = "var(--error)";
        explanationEl.innerText = "Dica: Observe a regência verbal ou a impessoalidade do verbo.";
    }
}

function finalizar() {
    progressEl.style.width = "100%";
    document.getElementById("game-container").innerHTML = `
        <h2 style="color: var(--success)">🏆 Você é um Mestre!</h2>
        <p>A norma culta não é mais um mistério para você.</p>
        <button onclick="location.reload()" style="width:100%; height:50px; margin-top:20px">Reiniciar Guia</button>
    `;
}

btnEl.addEventListener("click", validar);
inputEl.addEventListener("keypress", (e) => { if (e.key === "Enter") validar(); });

window.onload = iniciarDesafio;