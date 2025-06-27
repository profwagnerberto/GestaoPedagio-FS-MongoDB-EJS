# Gestao de Pedágio
Aplicativo para estudo de desenvolvimento de Gestão de Pedágio.

## Verificar pré-requisitos
Para compilar e executar este projeto, você precisa do Node.js versão 10 ou posterior e uma versão compatível do NPM (Node Package Manager) instalada. Para informações sobre como verificar sua versão do Node e do NPM, consulte a página NPMJS (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) sobre como baixar e instalar Node.js e npm.

## Começar
As instruções a seguir explicam como conectar seu projeto à sua instância do MongoDB Atlas.

### 1. Baixar o repositório
Para começar a usar este projeto, baixe este repositório para seu ambiente de programação. Você pode clonar este projeto usando o controle de versão do Git:
git clone https://github.com/profwagnerberto/GestaoBiblioteca.git
Ou você pode baixar o arquivo ZIP usando seu navegador. Se você baixar como um arquivo ZIP, descompacte o arquivo antes de prosseguir.

### 2. Instalar Depedências
Navegue até o diretório que contém o projeto em seu terminal ou abra-o em seu IDE preferido.
Em seguida, use o arquivo NPM de dependência (package.json), que foi incluído no projeto, baixe e instale suas dependências:
npm install
Este comando lê o arquivo package.json, baixa e salva os arquivos de dependência, definidas dentro dele, para um diretório chamado node_modules. Ela também cria um arquivo package-lock.json que define as informações de versão para cada um dos módulos, necessários para construir seu projeto.
Neste ponto, você deve ter versões apropriadas do Node.js e do NPM instalado, bem como um diretório de projeto que contém as dependências que você precisa para usar o driver do MongoDB para o Node.js.

### 3. Configurar as credenciais do Atlas
1. Abra o arquivo app.js .
2. Procure a variável uri, próxima ao topo que tem atribuído um texto indicativo. Substitua o texto indicativo pela string de conexão com o cluster do Atlas. Para obter mais informações sobre como localizar a string de conexão, consulte Connect via Driver na documentação do Atlas.
    const uri = 
      "<string de conexão>";
3. Salve as alterações em seu arquivo app.js .

### 4. Executar o projeto
A partir do terminal, poderá executar o seguinte comando:
node app
If you are running it from the IDE, use the appropriate command to run the contents of the app.js file.
A partir do IDE, use o comando apropriado para executar o comando conteúdo do arquivo app.js .
1. Clique no ícone Executar ou no menu Executar.
Supondo que a string de conexão esteja correta, o aplicativo Node se conectou para o armazenamento de dados no MongoDB Atlas.

## Solucionar problemas
Problemas para se conectar à instância do MongoDB Atlas?
1. Verificar se a string de conexão, fornecida pela interface do usuário do Atlas, está válida. Leia mais aqui: https://docs.atlas.mongodb.com/driver-connection/ .
2. Verificar se o endereço IP atual foi adicionado à lista de acesso na interface do usuário do Atlas. Leia mais aqui: https://docs.atlas.mongodb.com/security-whitelist/ .

## Exemplo
Uma versão do aplicativo pode ser acessada em: https://gestaopedagio.onrender.com/
