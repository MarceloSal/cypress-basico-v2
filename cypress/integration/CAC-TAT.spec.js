// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Marcelo')
        cy.get('#lastName').type('Salmeron')
        cy.get('#email').type('salmeron.marcelo@gmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        
        cy.get('.error').should('be.visible')
    })

    it('campo telefone continua vazio, quando não preenchido com valor numérico', function(){
        cy.get('#phone')
            .type('abfdsajfbjdfbdj')
            .should('have.value', '')
    })

    it('campo telefone continua vazio, quando não preenchido com valor numérico', function(){
        cy.get('#firstName').type('Marcelo')
        cy.get('#lastName').type('Salmeron')
        cy.get('#email').type('salmeron.marcelo@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

        
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('Marcelo')
            .should('have.value', 'Marcelo')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Salmeron')
            .should('have.value', 'Salmeron')
            .clear()
            .should('have.value', '')   
        cy.get('#email')
            .type('salmeron.marcelo@gmail.com')
            .should('have.value', 'salmeron.marcelo@gmail.com')
            .clear()
            .should('have.value', '')  
        cy.get('#phone')
            .type('123456789')
            .should('have.value', '123456789')
            .clear()
            .should('have.value', '')       
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function(){
        cy.get('#product')
        .select('YouTube')
        .should('have.value', 'youtube')
        // cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (Mentoria) por seu Valor', function(){
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
        // cy.get('.success').should('be.visible')
    })

    it.only('seleciona um produto (blog), por seu índice', function(){
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    })

})
  