# ☀️ CosmoSun

> **A energia do espaço destravando a economia na Terra.**
>
> Projeto desenvolvido para a Global Solution do 1º Semestre de Engenharia de Software da  **FIAP** .

## 📖 Sobre o Projeto

O Brasil sofre com altas constantes na conta de luz (Bandeiras Tarifárias) e, embora a energia solar seja a solução definitiva, o alto custo de avaliações técnicas e a falta de informação afastam os consumidores.

A **CosmoSun** é uma plataforma web B2B2C direta ao ponto. Nós utilizamos dados aeroespaciais (irradiação solar) fornecidos pela  **API NASA POWER** , cruzamos com a geolocalização do usuário e entregamos um cálculo de viabilidade financeira e *payback* em segundos.

Democratizamos a informação para o cidadão comum e entregamos leads altamente qualificados para empresas instaladoras de painéis solares.

## 🚀 Funcionalidades (Web Development)

Este repositório contém a interface e a lógica de Front-End da aplicação, desenvolvida com foco extremo em performance, acessibilidade e interatividade utilizando  **JavaScript Puro (Vanilla)** .

* 🌗 **Trocador de Temas Dinâmico:** Suporte a Tema Claro (Padrão), Tema Escuro e Tema de Alto Contraste para acessibilidade.
* 🖼️ **Slideshow Interativo:** Carrossel ("A Jornada da Energia") com navegação por setas, indicadores e rotação infinita.
* 📝 **Validação de Formulário:** Tratamento de dados no lado do cliente para impedir o envio de campos vazios ou incorretos, melhorando a integridade dos leads.
* 🧠 **Quiz Gamificado:** Sistema dinâmico com 10 perguntas sobre energia solar, barra de progresso, cálculo de pontuação e feedback personalizado.
* 📱 **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops utilizando Flexbox.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído sem o uso de frameworks, demonstrando domínio das linguagens base da Web:

* **HTML5:** Semântica e estruturação de conteúdo.
* **CSS3:** Variáveis nativas (`:root`), Flexbox, transições suaves e design modular.
* **JavaScript:** Manipulação do DOM, eventos (`addEventListener`), validações e lógica condicional.
* **Git & GitHub:** Versionamento de código em equipe utilizando padrão *Conventional Commits* e  *Pull Requests* .

## 📂 Arquitetura do Projeto

O código foi refatorado utilizando uma  **arquitetura modular** , separando as responsabilidades em arquivos específicos para evitar conflitos (merge conflicts) durante o desenvolvimento em equipe e facilitar a manutenção.

```
📦 CosmoSun
 ┣ 📂 css/
 ┃ ┣ 📜 style.css       # Estilos globais e da landing page base
 ┃ ┣ 📜 tema.css        # Variáveis e estilos do trocador de temas
 ┃ ┣ 📜 slider.css      # Estilos isolados do carrossel
 ┃ ┣ 📜 formulario.css  # Estilos do formulário e alertas
 ┃ ┗ 📜 quiz.css        # Estilos da interface do quiz
 ┣ 📂 img/              # Imagens, ícones e logos do projeto
 ┣ 📂 js/
 ┃ ┣ 📜 tema.js         # Lógica de troca de classes do body e logo
 ┃ ┣ 📜 slider.js       # Lógica de exibição e controle do slideshow
 ┃ ┣ 📜 formulario.js   # Lógica de prevenção de envio e validação
 ┃ ┗ 📜 quiz.js         # Motor de renderização do quiz e pontuação
 ┣ 📜 index.html        # Estrutura principal da página
 ┣ 📜 equipe.txt        # Documentação: Integrantes e RMs
 ┗ 📜 README.md         # Documentação principal do repositório
```

## ⚙️ Como Executar o Projeto

Como o projeto é construído estritamente com tecnologias web nativas, não é necessária a instalação de dependências ou servidores locais complexos.

1. Clone este repositório para a sua máquina:
   ```
   git clone https://github.com/SUA_ORGANIZACAO/cosmosun.git
   ```
2. Acesse a pasta do projeto:
   ```
   cd cosmosun
   ```
3. Abra o arquivo `index.html` em qualquer navegador web moderno (Chrome, Edge, Firefox, Safari).

## 👨‍💻 Equipe de Desenvolvimento

Projeto estruturado pelos alunos de  **Engenharia de Software (FIAP)** :

* Orion Cavalcante França | RM: 573677
* Felipe Santos Ribas | RM: 569121
* Luiz Gonzaga Lima de Cerqueira Silva | RM: 572446

*Projeto entregue para as disciplinas de Frontend Design e Web Development*
