Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Marcelo')
    cy.get('#lastName').type('Salmeron')
    cy.get('#email').type('salmeron.marcelo@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
