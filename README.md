# 🟢 Learning Vue.js

Bem-vindo ao meus estudos em Vue.js! Este repositório documenta a minha evolução e aprendizado com o framework, indo desde a manipulação reativa básica via CDN até a construção de Single Page Applications (SPAs) com roteamento e gerenciamento de estado.
## 💻 Tecnologias e Ecossistema
* **Core:** Vue.js (Vue 2 e Vue 3)
* **Build Tools:** Vite & Vue CLI
* **Ecossistema:** Vue Router (Navegação) & Vuex/Pinia (State Management)
* **Linguagens:** JavaScript, HTML5, CSS3

## 🚀 Projetos Desenvolvidos

### 📦 SPAs (Vite / Vue CLI)
Estes projetos utilizam o ecossistema completo do Vue, estruturados com Single File Components (`.vue`).
* **[Shopping Bag](./Proj-ShoppingBag/)** 🛒
  * **Descrição:** Simulação de um carrinho de compras completo. 
  * **Destaques:** Utiliza **Vue Router** para navegação entre páginas (ex: `HomePage` e `ShoppingBasket`) e gerencia os dados do carrinho globalmente utilizando **State Management** (`store`). Construído com **Vite**.
* **[Books List](./Proj-BooksList/)** 📚
  * **Descrição:** Aplicação para rastrear leituras, com barra de progresso e adição de novos livros.
  * **Destaques:** Foco em componentização (`AddBook.vue`, `BookProgress.vue`, `Books.vue`) e comunicação entre componentes (Props/Emits). Construído com **Vite**.
* **[Quiz Game](./Proj-QuizGame/)** 🎮
  * **Descrição:** Um jogo de perguntas e respostas dinâmico.
  * **Destaques:** Manipulação de placar (`ScoreBoard.vue`), condicionais reativas (v-if/v-show) e consumo de dados. Construído via **Vue CLI**.

### 🌱 Projetos Fundacionais (HTML/JS/CSS + Vue)
Projetos criados na fase inicial de estudos, focados em dominar a reatividade do Vue diretamente no navegador.
* **[Self Service Machine](./Proj-SelfServiceMachine/)** 🍔
  * **Descrição:** Interface de um totem de autoatendimento de fast-food (Mcdonald's). Prática intensa de renderização de listas (`v-for`), eventos de clique (`v-on`) e propriedades computadas.
* **[To-Do List](./Proj-ToDoList/)** 📝
  * **Descrição:** O clássico gerenciador de tarefas. Foco no crud básico em memória e two-way data binding (`v-model`).
* **[Working With Forms](./Proj-WorkingWithForms/)** 📋
  * **Descrição:** Projeto focado exclusivamente no manuseio de inputs, validação básica e submissão de formulários com Vue.

---
## 🛠️ Como executar os projetos

Como o repositório contém diferentes tipos de arquitetura, siga os passos abaixo de acordo com o projeto:

**Para projetos com Vite/Vue CLI (ShoppingBag, BooksList, QuizGame):**
1. Acesse a pasta do projeto via terminal: `cd Proj-NomeDoProjeto`
2. Instale as dependências: `npm install`
3. Rode o servidor de desenvolvimento: `npm run dev` (projetos Vite) ou `npm run serve` (projeto Vue CLI).

**Para projetos estáticos (SelfServiceMachine, ToDoList, WorkingWithForms):**
1. Acesse a pasta do projeto.
2. Abra o arquivo `index.html` diretamente no seu navegador, ou utilize a extensão *Live Server* do VSCode.
