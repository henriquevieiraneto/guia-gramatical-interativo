let topicoAtual = "";
let questaoIdx = 0;
let acertos = 0;

function carregarMenuEstudo() {
    const lista = document.getElementById('lista-estudo');
    Object.keys(bancoDados).forEach(chave => {
        lista.innerHTML += `<button class="card-btn" onclick="mostrarRegra('${chave}')"><h3>${bancoDados[chave].titulo}</h3><p>20 Exemplos Práticos</p></button>`;
    });
}

function mostrarRegra(chave) {
    document.getElementById('menu-topicos').classList.add('hidden');
    document.getElementById('conteudo-estudo').classList.remove('hidden');
    const info = bancoDados[chave].estudo;
    document.getElementById('detalhe-regra').innerHTML = `
        <h2 style="color:var(--primary)">${bancoDados[chave].titulo}</h2>
        <p><strong>Conceito:</strong> ${info.def}</p>
        <div class="example-block">${info.ex}</div>
    `;
}

function carregarMenuPratica() {
    const lista = document.getElementById('lista-pratica');
    Object.keys(bancoDados).forEach(chave => {
        lista.innerHTML += `<button class="card-btn" onclick="iniciarQuiz('${chave}')"><h3>${bancoDados[chave].titulo}</h3><p>Desafio de 20 Questões</p></button>`;
    });
}

function iniciarQuiz(chave) {
    topicoAtual = chave;
    questaoIdx = 0;
    acertos = 0;
    document.getElementById('menu-pratica').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    renderizarQuestao();
}

function renderizarQuestao() {
    const q = bancoDados[topicoAtual].questoes[questaoIdx];
    document.getElementById('topico-titulo').innerText = `${bancoDados[topicoAtual].titulo} (${questaoIdx + 1}/20)`;
    document.getElementById('texto-pergunta').innerText = q.p;
    document.getElementById('feedback').classList.add('hidden');
    
    const grid = document.getElementById('alternativas-grid');
    grid.innerHTML = q.o.map(opt => `<button class="option-btn" onclick="validar(this, '${opt}')">${opt}</button>`).join('');
    
    document.getElementById('progress-fill').style.width = ((questaoIdx) / 20) * 100 + "%";
}

function validar(btn, escolha) {
    const q = bancoDados[topicoAtual].questoes[questaoIdx];
    const feedback = document.getElementById('feedback');
    const todos = document.querySelectorAll('.option-btn');
    
    todos.forEach(b => b.disabled = true);
    feedback.classList.remove('hidden');
    
    if(escolha === q.r) {
        acertos++;
        btn.classList.add('correct');
        feedback.innerHTML = `✅ <strong>Correto!</strong> ${q.exp}`;
    } else {
        btn.classList.add('wrong');
        feedback.innerHTML = `❌ <strong>Incorreto.</strong> A resposta era "${q.r}". ${q.exp}`;
    }

    setTimeout(() => {
        questaoIdx++;
        if(questaoIdx < 20) renderizarQuestao();
        else finalizar();
    }, 4000);
}

function finalizar() {
    document.getElementById('pergunta-box').innerHTML = `
        <div style="text-align:center">
            <h2>🏆 Quiz Finalizado!</h2>
            <p style="font-size: 2rem">Você acertou ${acertos} de 20.</p>
            <button class="option-btn" onclick="window.location.reload()">Voltar ao Menu</button>
        </div>
    `;
    document.getElementById('progress-fill').style.width = "100%";
}