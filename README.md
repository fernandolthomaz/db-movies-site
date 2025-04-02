# Site de Filmes com React

Este é um projeto de site de filmes desenvolvido com React, onde você pode buscar e descobrir filmes usando a API do TMDB. O projeto também usa Appwrite para armazenar as buscas mais populares.

## Sobre o Projeto

Desenvolvi este site como parte dos meus estudos em React. O objetivo principal foi criar uma aplicação que:
- Permite buscar filmes
- Mostra filmes populares
- Exibe as buscas mais frequentes dos usuários
- Tem um design responsivo

## Tecnologias Usadas

- React
- Vite
- Tailwind CSS
- TMDB API
- Appwrite
- React Use (para o debounce na busca)

## Como Rodar o Projeto

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env.local` e adicione suas chaves:
```bash
VITE_TMDB_API_KEY=[chave-da-api-tmdb]
VITE_APPWRITE_PROJECT_ID=[id-do-projeto]
VITE_APPWRITE_DATABASE_ID=[id-do-banco]
VITE_APPWRITE_COLLECTION_ID=[id-da-coleção]
```

4. Rode o projeto:
```bash
npm run dev
```

## Funcionalidades

- Busca de filmes em tempo real
- Lista de filmes populares
- Seção de filmes mais pesquisados
- Layout responsivo que funciona em celular e desktop

## Estrutura do Projeto

- `src/components`: Componentes React
- `src/App.jsx`: Componente principal
- `src/appwrite.js`: Configuração e funções do Appwrite
- `public`: Imagens e outros arquivos estáticos

## Aprendizados

Durante este projeto, aprendi:
- Como usar APIs externas (TMDB)
- Como implementar busca em tempo real com debounce
- Como usar Tailwind CSS para estilização
- Como trabalhar com serviços backend (Appwrite)
- Como criar um layout responsivo

## Como Contribuir

Se quiser contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Faça push para a branch
5. Abra um Pull Request

