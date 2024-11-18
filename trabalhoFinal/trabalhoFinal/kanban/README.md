Funcionalidades: 
- Criar 3 quadros (colunas) para gerenciar os itens em diferentes estágios 
(vai depender do tema). 
- Permitir criar, alterar ou excluir os itens no primeiro quadro, com 6 
campos: título, descrição, prioridade, data de vencimento, responsáveis. 
Criar também um campo status para guardar em qual coluna o item está 
(Coluna1, Coluna2 ou Coluna3). 
- Implementar arrastar e soltar para mover tarefas entre as colunas, 
mudando seu status. 
- Utilize notificações visuais (cores ou símbolos) para indicar itens 
concluídos ou com prazos próximos. 
- Opcionais (não obrigatório): Pesquisar tarefas por critérios como: título, 
prioridade, responsável ou data de vencimento. 
Instruções: 
- Separar as pastas do HTML, CSS, JS e outros arquivos que forem 
necessários. 
- A aplicação deve prezar por responsividade, usabilidade e acessibilidade. 
- Hospedar em alguma plataforma gratuita. 
Tecnologias: 
- HTML: Estruturação da interface com divs, sections, articles e elementos para 
cartões de tarefas, colunas e quadros. 
- CSS: Estilização visual dos layouts, cartões, botões, indicadores de status e 
interfaces de filtros. 
- JavaScript: Implementação da lógica de arrastar e soltar, gerenciamento de 
tarefas (criação, edição, exclusão, atualização). 
- Frameworks: pode utilizar frameworks que desejar, por exemplo: Bootstrap, 
React, Vue.js, Angular ou outros para organização modular do código, 
interfaces mais dinâmicas etc. 
Banco de Dados e Armazenamento: 
Pode ser utilizada uma das seguintes formas de armazenamento para os dados. 
- IndexedDB 
Permite criar bancos de dados no navegador, com tabelas, índices e transações.  
Oferece maior capacidade de armazenamento comparado ao localStorage. As 
operações são assíncronas, evitando bloqueios na interface do usuário. 
- localStorage 
Ideal para armazenar pequenas quantidades de dados, como as configurações 
do usuário ou dados temporários. Facilidade de uso: A API é simples e intuitiva. 
Permite armazenamento de objetos: exemplo converte os dados das colunas em 
um objeto JSON e armazena no localStorage. A capacidade de armazenamento 
é menor e os dados são armazenados como strings, o que pode exigir parsing 
para recuperar os objetos. 
- Algum Banco de Dados (em Nuvem) – relacional ou NoSQL