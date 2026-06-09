document.addEventListener("DOMContentLoaded", () => {
    // 1. Array com as 10 perguntas do tema
    const perguntas = [
        { 
            pergunta: "1. Qual é o processo que transforma a luz solar diretamente em energia elétrica?", 
            opcoes: ["Efeito Termoelétrico", "Efeito Fotovoltaico", "Efeito Estufa", "Efeito Eletromagnético"], 
            resposta: 1 
        },
        { 
            pergunta: "2. Em qual dessas situações os painéis solares NÃO geram energia?", 
            opcoes: ["Em dias muito frios", "Durante o período da noite", "Em dias chuvosos", "Em dias parcialmente nublados"], 
            resposta: 1 
        },
        { 
            pergunta: "3. Qual é a principal função de um Inversor Solar no sistema?", 
            opcoes: ["Armazenar a energia gerada", "Converter corrente contínua em alternada", "Aumentar a captação de luz", "Resfriar os painéis"], 
            resposta: 1 
        },
        { 
            pergunta: "4. Qual a vida útil média estimada de um bom painel solar fotovoltaico?", 
            opcoes: ["5 a 10 anos", "10 a 15 anos", "25 a 30 anos", "Apenas 3 anos"], 
            resposta: 2 
        },
        { 
            pergunta: "5. A CosmoSun cruza dados de viabilidade utilizando a API de qual agência espacial?", 
            opcoes: ["ESA (Europa)", "JAXA (Japão)", "Roscosmos (Rússia)", "NASA (EUA)"], 
            resposta: 3 
        },
        { 
            pergunta: "6. Por que o Brasil é considerado um dos melhores países para a energia solar?", 
            opcoes: ["Alta incidência de irradiação solar", "Baixo custo de importação", "Ventos muito fortes", "Clima predominantemente frio"], 
            resposta: 0 
        },
        { 
            pergunta: "7. A instalação de um sistema solar residencial pode reduzir a fatura de luz em até:", 
            opcoes: ["30%", "50%", "75%", "95%"], 
            resposta: 3 
        },
        { 
            pergunta: "8. A energia solar fotovoltaica emite gases poluentes durante sua geração elétrica?", 
            opcoes: ["Sim, muito CO2", "Apenas em dias nublados", "Não, é uma energia limpa", "Sim, gases tóxicos leves"], 
            resposta: 2 
        },
        { 
            pergunta: "9. O que ocorre com a energia excedente (que sobra) gerada de dia em um sistema conectado à rede (On-Grid)?", 
            opcoes: ["É perdida no ar", "É injetada na rede pública gerando créditos", "Desliga automaticamente o painel", "Aquece o telhado da casa"], 
            resposta: 1 
        },
        { 
            pergunta: "10. Qual componente é utilizado para armazenar a energia em sistemas isolados (Off-Grid)?", 
            opcoes: ["Inversores", "Cabos de cobre", "Baterias estacionárias", "Roteadores"], 
            resposta: 2 
        }
    ];

    let perguntaAtual = 0;
    let pontuacao = 0;

    // Elementos do DOM
    const containerQuiz = document.getElementById("quiz-container");
    const containerResultado = document.getElementById("resultado-container");
    const txtPergunta = document.getElementById("pergunta-texto");
    const boxOpcoes = document.getElementById("opcoes-container");
    const txtProgresso = document.getElementById("progresso-texto");
    const barraPreenchimento = document.getElementById("barra-preenchimento");
    const txtPontuacao = document.getElementById("pontuacao-texto");
    const msgResultado = document.getElementById("mensagem-resultado");
    const btnReiniciar = document.getElementById("btn-reiniciar");

    function carregarPergunta() {
        if(!txtPergunta) return; // Trava de segurança
        
        const questaoAtual = perguntas[perguntaAtual];
        txtPergunta.innerText = questaoAtual.pergunta;
        boxOpcoes.innerHTML = ""; // Limpa opções anteriores
        
        // Atualiza Progresso
        const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
        txtProgresso.innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
        barraPreenchimento.style.width = `${progresso}%`;

        // Gera os botões de resposta
        questaoAtual.opcoes.forEach((opcao, index) => {
            const btn = document.createElement("button");
            btn.innerText = opcao;
            btn.classList.add("opcao-btn");
            btn.onclick = () => verificarResposta(index);
            boxOpcoes.appendChild(btn);
        });
    }

    function verificarResposta(indexSelecionado) {
        if (indexSelecionado === perguntas[perguntaAtual].resposta) {
            pontuacao++;
        }
        
        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        containerQuiz.style.display = "none";
        containerResultado.style.display = "block";
        
        txtPontuacao.innerText = `Você acertou ${pontuacao} de ${perguntas.length} questões!`;
        
        // Mensagem dinâmica de acordo com a pontuação
        if (pontuacao === 10) {
            msgResultado.innerText = "Perfeito! Você é um verdadeiro especialista em Energia Solar e sustentabilidade.";
        } else if (pontuacao >= 7) {
            msgResultado.innerText = "Muito bom! Você tem um ótimo conhecimento sobre tecnologias renováveis.";
        } else if (pontuacao >= 4) {
            msgResultado.innerText = "Bom começo! Mas você pode aprender ainda mais sobre como economizar com a energia solar.";
        } else {
            msgResultado.innerText = "Parece que você é novo no assunto. Que tal ler um pouco mais sobre os benefícios do nosso projeto?";
        }
    }

    // Evento de Reiniciar
    if(btnReiniciar) {
        btnReiniciar.addEventListener("click", () => {
            perguntaAtual = 0;
            pontuacao = 0;
            containerResultado.style.display = "none";
            containerQuiz.style.display = "block";
            carregarPergunta();
        });
    }

    // Inicia o quiz
    carregarPergunta();
});
