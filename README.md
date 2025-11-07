# eFood

O **eFood** é um projeto desenvolvido em React com TypeScript que simula um e-commerce de comida, permitindo ao usuário navegar por restaurantes, visualizar cardápios, e adicionar produtos ao carrinho.

## 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Redux Toolkit (gerenciamento de estado)
- React Router (navegação entre páginas)
- Styled Components (estilização modular)

## 💻 Como usar via Fork

### 1. Fork do repositório

Clique no botão Fork no GitHub para criar uma cópia do repositório na sua conta.

### 2. Clonar seu fork localmente
```sh
git clone https://github.com/<seu-usuario>/efood.git
cd efood
```

### 3. Instalar dependências
```sh
npm install
```

### 4. Rodar o projeto em desenvolvimento
```sh
npm start
```

### 5. Acessar o projeto

Abra http://localhost:3000 no navegador.

## 💡 Funcionalidades

- Listagem de restaurantes com destaque para restaurantes da semana.
- Visualização de cardápios de cada restaurante.
- Modal detalhado para cada produto com informações completas e preço.
- Adicionar produtos ao carrinho de forma interativa.
- Carrinho persistente no estado global com Redux Toolkit.
- Layout responsivo para desktop, tablet e mobile.

## 🎨 Estilização

- Layout baseado em grid e flexbox.
- Feedback visual em botões e interações (hover/focus).
- Harmonização de cores e tipografia para interface limpa e moderna.
- Uso de Styled Components para modularidade e fácil manutenção.
- Layout totalmente responsivo.

## 📁 Estrutura de Componentes

- **App.tsx** – container principal que gerencia o roteamento e integra o Redux.
- **pages/Home.tsx** – página inicial que exibe a lista de restaurantes.
- **pages/Profile.tsx** – página de perfil do restaurante com detalhes do cardápio.
- **components/Banner/** – componente de banner da página de perfil.
- **components/Button/**– botão reutilizável com diferentes variantes.
- **components/Cart/** – carrinho de compras, integrado com Redux.
- **components/Footer/** – rodapé do site.
- **components/Header/** – cabeçalho com logo e acesso ao carrinho na página de perfil.
- **components/Loader/** – componente de loading/spinner.
- **components/ProductCard/** – cartão de exibição de produto/cardápio individual.
- **components/ProductList/** – lista de produto/cardápio de um restaurante.
- **components/RestaurantCard/** – cartão de exibição de restaurante individual.
- **components/RestaurantList/** – lista de restaurantes.
- **components/Tag/** – tags informativas (ex.: tipo de restaurante, destaque da semana).
- **store/** – Redux store e reducers (ex.: cart.ts).
- **services/api.ts** – funções para requisições à API.
- **utils/index.ts** – funções utilitárias (ex.: formatação de valores e truncamento de texto).
- **types.d.ts** – definição e centralização de tipos TypeScript.
- **globalStyles.ts** – estilos globais e constantes de cores/breakpoints.
