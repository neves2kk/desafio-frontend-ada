# Desafio - Editor de Documentos Markdown com Next.js

## Descrição

Este projeto foi desenvolvido como parte do **Desafio Frontend**. O objetivo foi criar uma aplicação que permite criar, editar, visualizar e excluir documentos em **Markdown**, utilizando **Next.js** e **TypeScript**.

A aplicação armazena os documentos no **localStorage** do navegador e possui funcionalidades como a troca de tema (claro/escuro), validação de formulários e feedback visual para ações de sucesso ou erro. Além disso, a navegação entre as páginas é dinâmica, e a interface inclui uma toolbar para aplicar formatação Markdown aos textos.

## Funcionalidades Implementadas

- **CRUD de Documentos**: 
  - Criar, renomear, editar e excluir documentos.
  - Armazenamento de documentos no **localStorage**.

- **Editor com Preview Markdown**: 
  - Tela de edição com um **textarea** para escrita em Markdown e uma área de **preview** renderizada ao vivo utilizando a biblioteca **`react-markdown`**.

- **Toolbar de Estilização**: 
  - Adição de botões para formatação básica de Markdown:
    - Negrito (**texto**)
    - Itálico (*texto*)
    - Título (# título)
    - Lista simples (- item)
    - Código inline (`code`)
  - A toolbar manipula o texto no editor com base na seleção de texto e na posição do cursor.

- **Context API**: 
  - Uso de **Context API** para gerenciar a lista de documentos, o documento selecionado e as funções de criação, atualização e exclusão.

- **Troca de Tema (Claro/Escuro)**: 
  - Implementação da funcionalidade de troca de tema (claro/escuro) utilizando **`next-themes`**.

- **Validação de Formulários**: 
  - Validação de título e conteúdo com **`Zod`** e **`React Hook Form`** para gerenciamento de formulários.

- **Feedback de Sucesso/Erro com Toasts**: 
  - Exibição de feedback de sucesso ou erro utilizando a biblioteca **`react-toastify`**.


## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/neves2kk/desafio-frontend-ada/edit/main/README.md
cd <diretório_do_repositório>
```

### 2. Instalar as depêndencias

```bash
npm install
# ou 
yarn install
```

### 3. Rodar o projeto

```bash
npm run dev
 # ou
yarn dev
```

