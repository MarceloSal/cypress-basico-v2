# Testes saudesimples - Cadastro de munícipes

Validation and component tests to be carried out on the Municipality Registration Screen.
Testes de validação e de componentes a serem efetuados na Tela de Cadastro de Munícipes.

## Pre-requirements
## Pré requisitos

It is required to have Node.js and npm installed to run this project.
16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.
É necessário ter Node.js e npm instalados para executar este projeto.
16.13.2` e `8.3.2` de Node.js e npm, respectivamente. Eu sugiro que você use as mesmas versões ou versões posteriores.

## Installation 
## Instalação

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.
Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.
Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

Or, run `npm run cy:open` to open Cypress in interactive mode.
Ou execute `npm run cy:open` para abrir o Cypress no modo interativo.

## Testes que serão efetuados 
Markup :  `code()`
    var specificLanguage_code = 
    {
        "data": {
            "lookedUpPlatform": 1,
            "query": "Kasabian+Test+Transmission",
            "lookedUpItem": {
                "name": "Test Transmission",
                "artist": "Kasabian",
                "album": "Kasabian",
                "picture": null,
                "link": "http://open.spotify.com/track/5jhJur5n4fasblLSCOcrTp"
            }
        }
    }

Validação de campos obrigatórios.

Campos de seleção - opções estão todas disponíveis?

Campos numéricos - não pode aceitar letras.

campos de texto - não pode aceitar numeros (ex: nome)

campo de email - validação de simbolo(@)

Cep - API - esta trazendo o logradouro? validação cep inválido.

Campos de checkbox 

botão de criação do municipe. Salva? 
___

This Test was created by [Bruno Alves and Marcelo Salmeron].
Esse Teste foi criado por [Bruno Alves and Marcelo Salmeron].