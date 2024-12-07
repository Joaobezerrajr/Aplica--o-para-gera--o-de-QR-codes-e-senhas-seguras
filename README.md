# QR Code & Password Generator

Este projeto tem como objetivo gerar QR codes e senhas seguras, oferecendo uma solução prática para integrar funcionalidades de segurança em aplicações de e-commerce e outras plataformas.

## Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)
- [Contato](#contato)

## Visão Geral

Este projeto permite que o usuário escolha entre duas funcionalidades principais: gerar QR codes ou gerar senhas seguras. A aplicação foi construída em Node.js, utilizando a biblioteca `prompt` para interatividade e `qrcode-terminal` para a criação de QR codes diretamente no terminal.

## Pré-requisitos

- Node.js instalado em sua máquina (versão 16 ou superior recomendada).
- npm para instalação das dependências.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-qrcode.git

2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-qrcode

3. Instale as dependências:
   ```bash
   npm install

4. Crie um arquivo .env se necessário para configurações adicionais.

## Uso

  Para executar o projeto, utilize o comando:
   ```bash
   npm run start
  ```
O programa pedirá para escolher entre gerar um QR code ou uma senha. Basta selecionar a opção desejada e o sistema gerará o item correspondente.

## Estrutura do Projeto
index.js: Arquivo principal que lida com a lógica de interatividade e chamada aos serviços de geração de QR codes e senhas.
prompts-schema/: Pasta que contém os schemas de prompts interativos.
services/: Pasta que contém os serviços para geração de QR codes e senhas.

## Exemplo de Estrutura de Arquivos do Projeto
projeto-qrcode/
├── README.md
├── package.json
├── index.js
├── .env
├── .gitignore
└── src/
    ├── prompts-schema/
    │   └── prompt-main.js
    ├── services/
    │   ├── qr-code/
    │   │   └── create.js
    │   ├── password/
    │   │   └── create.js
    └── index.js

## Funcionalidades

Gerar QR Code: Permite gerar QR codes diretamente no terminal.
Gerar Senha: Gera senhas seguras para uso em plataformas diversas.
