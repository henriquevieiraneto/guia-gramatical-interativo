const bancoDados = {
    porques: {
        titulo: "Os Porquês",
        nivel: "Médio",
        estudo: {
            def: "Regras de uso baseadas na posição na frase e função gramatical.",
            ex: `
                <strong>1. Por que (Separado sem acento)</strong><br>
                <em>Perguntas ou 'pelo qual'.</em>
                <ul>
                    <li>Por que você não foi à festa ontem?</li>
                    <li>Gostaria de saber por que o sistema parou.</li>
                    <li>Os caminhos por que passei eram tortuosos.</li>
                    <li>Por que o céu é azul?</li>
                    <li>Não sei por que ela tomou essa decisão.</li>
                </ul>
                <hr>
                <strong>2. Por quê (Separado com acento)</strong><br>
                <em>Final de frase ou isolado.</em>
                <ul>
                    <li>Eles estão rindo de quê? Por quê?</li>
                    <li>Você não comeu nada. Por quê?</li>
                    <li>Andar a pé, por quê? Vamos de carro.</li>
                    <li>O projeto atrasou e ninguém explicou por quê.</li>
                    <li>Ela chorava, mas não disse por quê.</li>
                </ul>
                <hr>
                <strong>3. Porque (Junto sem acento)</strong><br>
                <em>Respostas, causas ou explicações.</em>
                <ul>
                    <li>Não fui trabalhar porque estava doente.</li>
                    <li>Estude, porque a prova será difícil.</li>
                    <li>Ele gritou porque sentiu medo.</li>
                    <li>Comprei este carro porque é econômico.</li>
                    <li>Atrasamos porque o pneu furou no caminho.</li>
                </ul>
                <hr>
                <strong>4. Porquê (Junto com acento)</strong><br>
                <em>Substantivo (o motivo). Vem com artigo.</em>
                <ul>
                    <li>Não entendi o porquê de tanta confusão.</li>
                    <li>Existem muitos porquês para essa mudança.</li>
                    <li>Gostaria de saber o porquê da sua ausência.</li>
                    <li>Dê-me apenas um porquê para ficar.</li>
                    <li>O porquê de tudo isso é um mistério.</li>
                </ul>
            `
        },
        questoes: [
            { p: "____ você não foi à escola ontem?", o: ["Por que", "Porque"], r: "Por que", exp: "Início de pergunta." },
            { p: "Ela não foi à festa ____ estava doente.", o: ["por que", "porque"], r: "porque", exp: "Conjunção explicativa (causa)." },
            { p: "Eles estão rindo de quê? ____?", o: ["Por que", "Por quê"], r: "Por quê", exp: "Final de frase, seguido de pontuação." },
            { p: "Gostaria de saber o ____ de tanta confusão.", o: ["porquê", "por que"], r: "porquê", exp: "Substantivo precedido de artigo 'o'." },
            { p: "Os caminhos ____ passei eram difíceis.", o: ["por que", "porque"], r: "por que", exp: "Substituível por 'pelos quais'." },
            { p: "Você não comeu nada. ____?", o: ["Por quê", "Porque"], r: "Por quê", exp: "Isolado no final da frase." },
            { p: "Estude, ____ a prova será difícil.", o: ["porque", "por que"], r: "porque", exp: "Explicação." },
            { p: "Não sei ____ ele mentiu para mim.", o: ["por que", "porque"], r: "por que", exp: "Pergunta indireta (por qual razão)." },
            { p: "Dê-me um ____ para ficar aqui.", o: ["porquê", "por quê"], r: "porquê", exp: "Substantivo (um motivo)." },
            { p: "____ não fomos convidados?", o: ["Por que", "Porque"], r: "Por que", exp: "Início de pergunta direta." },
            { p: "Ele atrasou ____ perdeu o ônibus.", o: ["porque", "por que"], r: "porque", exp: "Resposta/Causa." },
            { p: "Andar a pé, ____? Vamos de carro.", o: ["por quê", "porquê"], r: "por quê", exp: "Interrogativa final isolada." },
            { p: "Eis o motivo ____ luto todos os dias.", o: ["por que", "porque"], r: "por que", exp: "Substituível por 'pelo qual'." },
            { p: "Não entendi o ____ da sua atitude.", o: ["porquê", "por que"], r: "porquê", exp: "Substantivo com artigo." },
            { p: "A menina ____ me apaixonei mora longe.", o: ["por quem", "porque"], r: "por quem", exp: "Preposição 'por' + pronome 'quem'." },
            { p: "Choras ____?", o: ["por quê", "porque"], r: "por quê", exp: "Final de frase." },
            { p: "Creio que vou melhorar ____ tomei o remédio.", o: ["porque", "por que"], r: "porque", exp: "Explicação." },
            { p: "____ ele disse isso, eu não sei.", o: ["Por que", "Porque"], r: "Por que", exp: "Por qual razão ele disse..." },
            { p: "Existem muitos ____ nesta história.", o: ["porquês", "porquê"], r: "porquês", exp: "Substantivo no plural." },
            { p: "Não vá, ____ vai chover.", o: ["porque", "por que"], r: "porque", exp: "Explicação." }
        ]
    },
    crase: {
        titulo: "Uso da Crase",
        nivel: "Difícil",
        estudo: {
            def: "A crase (`) marca a fusão de duas vogais 'a'.",
            ex: `
                <strong>✅ 5 Casos COM Crase (Usar)</strong>
                <ul>
                    <li>Vou à praia no fim de semana. (A + A)</li>
                    <li>Refiro-me à diretora da escola.</li>
                    <li>O filme começa às 20 horas. (Horas)</li>
                    <li>Entreguei o relatório à professora.</li>
                    <li>Fiquei à espera de um milagre. (Locução feminina)</li>
                </ul>
                <hr>
                <strong>❌ 5 Casos SEM Crase (Não usar)</strong>
                <ul>
                    <li>Vou a Paris nas férias. (Quem vai a Paris, volta de Paris -> Sem crase)</li>
                    <li>Estou disposto a ajudar. (Antes de verbo)</li>
                    <li>Andamos a pé pela cidade. (Palavra masculina)</li>
                    <li>Ficamos cara a cara com o inimigo. (Palavras repetidas)</li>
                    <li>Ele falou tudo a ela. (Antes de pronome pessoal)</li>
                </ul>
            `
        },
        questoes: [
            { p: "Vou ____ praia amanhã.", o: ["à", "a"], r: "à", exp: "Vou A + A praia = À." },
            { p: "Fomos ____ pé para casa.", o: ["a", "à"], r: "a", exp: "Pé é masculino, não aceita crase." },
            { p: "Refiro-me ____ diretora da escola.", o: ["à", "a"], r: "à", exp: "Quem se refere, se refere A + A diretora." },
            { p: "Estou disposto ____ ajudar.", o: ["a", "à"], r: "a", exp: "Não se usa crase antes de verbo." },
            { p: "Chegamos ____ uma hora da tarde.", o: ["à", "a"], r: "à", exp: "Locução indicativa de horas exatas." },
            { p: "Ele entregou o presente ____ ela.", o: ["a", "à"], r: "a", exp: "Não se usa crase antes de pronomes pessoais." },
            { p: "Ficamos frente ____ frente com o perigo.", o: ["a", "à"], r: "a", exp: "Palavras repetidas não têm crase." },
            { p: "Iremos ____ Paris no ano que vem.", o: ["a", "à"], r: "a", exp: "Quem vai a Paris volta DE Paris (não DA)." },
            { p: "Vou ____ Bahia no carnaval.", o: ["à", "a"], r: "à", exp: "Quem vai à Bahia volta DA Bahia." },
            { p: "Escrevi ____ caneta.", o: ["a", "à"], r: "a", exp: "Instrumento não leva crase (salvo ambiguidade)." },
            { p: "O bife estava ____ milanesa.", o: ["à", "a"], r: "à", exp: "Subentende-se 'à moda'." },
            { p: "Ele obedece ____ leis de trânsito.", o: ["às", "as"], r: "às", exp: "Obedece A + AS leis = Às." },
            { p: "Começou ____ chover forte.", o: ["a", "à"], r: "a", exp: "Antes de verbo." },
            { p: "Paguei ____ prazo.", o: ["a", "à"], r: "a", exp: "Palavra masculina." },
            { p: "Entreguei o livro ____ aluna.", o: ["à", "a"], r: "à", exp: "Entregar A + A aluna." },
            { p: "Saímos ____ pressas.", o: ["às", "as"], r: "às", exp: "Locução adverbial feminina." },
            { p: "Diga ____ Vossa Senhoria que cheguei.", o: ["a", "à"], r: "a", exp: "Pronome de tratamento (exceto Sra/Srta) rejeita crase." },
            { p: "Andamos ____ cavalo na fazenda.", o: ["a", "à"], r: "a", exp: "Cavalo é masculino." },
            { p: "Assisti ____ novela inteira.", o: ["à", "a"], r: "à", exp: "Assistir no sentido de ver exige 'a'." },
            { p: "Vou ____ casa de minha mãe.", o: ["à", "a"], r: "à", exp: "Casa especificada (de minha mãe) aceita crase." }
        ]
    },
    ondeaonde: {
        titulo: "Onde vs Aonde",
        nivel: "Fácil",
        estudo: {
            def: "Diferença entre lugar fixo e movimento.",
            ex: `
                <strong>📍 5 Exemplos com ONDE (Lugar Fixo)</strong>
                <ul>
                    <li>Onde você mora atualmente?</li>
                    <li>Não sei onde deixei minhas chaves.</li>
                    <li>Onde fica a biblioteca municipal?</li>
                    <li>A casa onde cresci foi reformada.</li>
                    <li>Onde estão os documentos?</li>
                </ul>
                <hr>
                <strong>🚶 5 Exemplos com AONDE (Movimento/Destino)</strong>
                <ul>
                    <li>Aonde você vai com tanta pressa?</li>
                    <li>Não sei aonde esse caminho vai dar.</li>
                    <li>Aonde querem chegar com essa conversa?</li>
                    <li>Leve-me aonde for necessário.</li>
                    <li>Aonde nos levará essa tecnologia?</li>
                </ul>
            `
        },
        questoes: [
            { p: "____ você mora?", o: ["Onde", "Aonde"], r: "Onde", exp: "Verbo morar indica permanência (fixo)." },
            { p: "____ você vai hoje à noite?", o: ["Aonde", "Onde"], r: "Aonde", exp: "Verbo ir indica movimento." },
            { p: "Não sei ____ coloquei meu celular.", o: ["onde", "aonde"], r: "onde", exp: "Lugar fixo." },
            { p: "____ ele quer chegar com isso?", o: ["Aonde", "Onde"], r: "Aonde", exp: "Chegar A algum lugar." },
            { p: "A casa ____ moro é azul.", o: ["onde", "aonde"], r: "onde", exp: "Lugar fixo." },
            { p: "____ nos levará esta estrada?", o: ["Aonde", "Onde"], r: "Aonde", exp: "Verbo levar indica destino." },
            { p: "____ estão seus pais?", o: ["Onde", "Aonde"], r: "Onde", exp: "Verbo estar (fixo)." },
            { p: "Diga-me ____ você foi ontem.", o: ["aonde", "onde"], r: "aonde", exp: "Quem vai, vai A algum lugar." },
            { p: "Sabe ____ fica o banco?", o: ["onde", "aonde"], r: "onde", exp: "Ficar é estático." },
            { p: "O lugar ____ vamos é lindo.", o: ["aonde", "onde"], r: "aonde", exp: "Vamos A algum lugar." },
            { p: "____ você estuda?", o: ["Onde", "Aonde"], r: "Onde", exp: "Lugar fixo." },
            { p: "Não sei ____ começar.", o: ["por onde", "aonde"], r: "por onde", exp: "Ideia de passagem ou início." },
            { p: "____ irei, não sei.", o: ["Aonde", "Onde"], r: "Aonde", exp: "Futuro do verbo ir." },
            { p: "O bairro ____ cresci mudou muito.", o: ["onde", "aonde"], r: "onde", exp: "Crescer em algum lugar (fixo)." },
            { p: "Vou ____ o vento me levar.", o: ["aonde", "onde"], r: "aonde", exp: "Ideia de movimento/destino." },
            { p: "____ fica a saída?", o: ["Onde", "Aonde"], r: "Onde", exp: "Lugar fixo." },
            { p: "____ coloquei as chaves?", o: ["Onde", "Aonde"], r: "Onde", exp: "Lugar fixo." },
            { p: "Queremos saber ____ você correu.", o: ["aonde", "onde"], r: "aonde", exp: "Correu para algum lugar (destino)." },
            { p: "O parque ____ passeamos é seguro.", o: ["onde", "aonde"], r: "onde", exp: "Passear EM algum lugar." },
            { p: "____ posso sentar?", o: ["Onde", "Aonde"], r: "Onde", exp: "Sentar em lugar fixo." }
        ]
    },
    haver: {
        titulo: "Verbo Haver",
        nivel: "Fácil",
        estudo: {
            def: "O verbo haver é impessoal e não tem plural nesses casos.",
            ex: `
                <strong>🕰️ 5 Exemplos de Tempo Decorrido (Singular)</strong>
                <ul>
                    <li>Moro aqui há dez anos.</li>
                    <li>Há muito tempo não viajo.</li>
                    <li>Eles saíram há cinco minutos.</li>
                    <li>Estamos esperando há horas.</li>
                    <li>O acidente aconteceu há semanas.</li>
                </ul>
                <hr>
                <strong>📦 5 Exemplos de Existir/Acontecer (Singular)</strong>
                <ul>
                    <li>Houve muitos problemas na reunião.</li>
                    <li>Há pessoas que gostam de ler.</li>
                    <li>Deve haver soluções melhores.</li>
                    <li>Havia cadeiras vazias na sala.</li>
                    <li>Sempre houve boatos sobre isso.</li>
                </ul>
            `
        },
        questoes: [
            { p: "____ muitos alunos na sala.", o: ["Havia", "Haviam"], r: "Havia", exp: "Sentido de existir = singular." },
            { p: "____ dez anos que não o vejo.", o: ["Faz", "Fazem"], r: "Faz", exp: "Tempo decorrido = singular." },
            { p: "Ontem, ____ várias reuniões.", o: ["houve", "houveram"], r: "houve", exp: "Sentido de acontecer = singular." },
            { p: "Daqui a pouco ____ de existir novas regras.", o: ["hão", "há"], r: "hão", exp: "Haver como auxiliar (Hão de existir) vai para o plural se o sujeito for plural." },
            { p: "____ anos que espero por isso.", o: ["Há", "Hão"], r: "Há", exp: "Tempo decorrido." },
            { p: "Na festa, ____ muitas bebidas.", o: ["havia", "haviam"], r: "havia", exp: "Sentido de existir." },
            { p: "Devem ____ problemas no sistema.", o: ["haver", "haverem"], r: "haver", exp: "Locução verbal com impessoal mantém o infinitivo singular." },
            { p: "____ dias que chove.", o: ["Faz", "Fazem"], r: "Faz", exp: "Tempo decorrido." },
            { p: "Não ____ motivos para pânico.", o: ["houve", "houveram"], r: "houve", exp: "Sentido de existir." },
            { p: "Eles ____ de chegar cedo.", o: ["hão", "há"], r: "hão", exp: "Haver como auxiliar pessoal (eles hão)." },
            { p: "____ cinco meses que mudei de casa.", o: ["Há", "A"], r: "Há", exp: "Tempo passado usa H." },
            { p: "Daqui ____ pouco vamos sair.", o: ["a", "há"], r: "a", exp: "Tempo futuro ou distância usa A." },
            { p: "____ muitos anos, vivia um rei...", o: ["Há", "A"], r: "Há", exp: "Tempo passado." },
            { p: "Pode ____ mudanças no plano.", o: ["haver", "haverem"], r: "haver", exp: "Sentido de existir." },
            { p: "____ tempos não viajo.", o: ["Há", "A"], r: "Há", exp: "Tempo passado." },
            { p: "Se não ____ erros, aprovamos.", o: ["houver", "houverem"], r: "houver", exp: "Sentido de existir." },
            { p: "____ duas horas estou aqui.", o: ["Há", "Tem"], r: "Há", exp: "Formalmente 'Há', 'Tem' é coloquial." },
            { p: "Deve ____ duzentas pessoas aqui.", o: ["haver", "ter"], r: "haver", exp: "Sentido de existir." },
            { p: "Não ____ nada a declarar.", o: ["há", "haver"], r: "há", exp: "Presente do indicativo." },
            { p: "Sempre ____ discórdias naquela casa.", o: ["houve", "houveram"], r: "houve", exp: "Sentido de existir." }
        ]
    },
    vocabulario: {
        titulo: "Retificar vs Ratificar",
        nivel: "Fácil",
        estudo: {
            def: "Palavras parecidas com significados opostos.",
            ex: `
                <strong>🔧 5 Exemplos de Retificar (Corrigir)</strong>
                <ul>
                    <li>Preciso retificar os dados bancários.</li>
                    <li>O professor retificou a nota errada.</li>
                    <li>Vou à oficina retificar o motor.</li>
                    <li>Peço que retifique o erro no texto.</li>
                    <li>Retificar um erro é um ato nobre.</li>
                </ul>
                <hr>
                <strong>✅ 5 Exemplos de Ratificar (Confirmar)</strong>
                <ul>
                    <li>O diretor ratificou a contratação.</li>
                    <li>Os países ratificaram o acordo de paz.</li>
                    <li>Isso apenas ratificou minha suspeita.</li>
                    <li>Vim ratificar meu compromisso com vocês.</li>
                    <li>O juiz ratificou a sentença.</li>
                </ul>
            `
        },
        questoes: [
            { p: "O diretor assinou para ____ o contrato.", o: ["ratificar", "retificar"], r: "ratificar", exp: "Confirmar/Validar." },
            { p: "Preciso ____ um erro no meu nome.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir/Consertar." },
            { p: "O juiz ____ a sentença anterior.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Confirmou a sentença." },
            { p: "Vou ao cartório ____ minha assinatura.", o: ["ratificar", "retificar"], r: "ratificar", exp: "Reconhecer/Confirmar." },
            { p: "O motor do carro precisa ser ____.", o: ["retificado", "ratificado"], r: "retificado", exp: "Consertado/Ajustado." },
            { p: "A testemunha ____ o que disse antes.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Confirmou o depoimento." },
            { p: "Peço desculpas, vou ____ a informação.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir a informação errada." },
            { p: "O tratado foi ____ por ambos os países.", o: ["ratificado", "retificado"], r: "ratificado", exp: "Validado/Confirmado." },
            { p: "É nobre ____ seus próprios erros.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir erros." },
            { p: "Sua atitude apenas ____ minhas suspeitas.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Confirmou as suspeitas." },
            { p: "Favor ____ o valor da transferência.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir (se estiver errado)." },
            { p: "Viemos ____ nosso apoio ao candidato.", o: ["ratificar", "retificar"], r: "ratificar", exp: "Confirmar apoio." },
            { p: "O aluno pediu para ____ a resposta.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir a resposta." },
            { p: "O médico ____ o diagnóstico.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Confirmou (ou retificou se corrigiu, mas ratificou é mais comum se manteve)." },
            { p: "O documento foi ____ com sucesso.", o: ["ratificado", "retificado"], r: "ratificado", exp: "Validado." },
            { p: "Tive que ____ a rota no GPS.", o: ["retificar", "ratificar"], r: "retificar", exp: "Corrigir o caminho." },
            { p: "A empresa ____ a promoção do funcionário.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Confirmou." },
            { p: "Ele voltou atrás para ____ o mal-entendido.", o: ["retificar", "ratificar"], r: "retificar", exp: "Desfazer/Corrigir." },
            { p: "O congresso ____ a nova lei.", o: ["ratificou", "retificou"], r: "ratificou", exp: "Aprovou/Confirmou." },
            { p: "Nada a ____, tudo está correto.", o: ["retificar", "ratificar"], r: "retificar", exp: "Nada a corrigir." }
        ]
    }
};