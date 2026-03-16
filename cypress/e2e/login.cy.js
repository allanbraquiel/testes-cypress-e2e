describe('Login', () => {

  const email = Cypress.env('email') || Cypress.env('EMAIL')
  const password = Cypress.env('password') || Cypress.env('PASSWORD')

  it('Deve acessar a tela de login', () => {

    cy.visit('/login')

    cy.contains('Log in')

    })

  it('Deve realizar login com sucesso', () => {

    cy.visit('/login')

    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)

    cy.contains('Log in').click()

    cy.url().should('include', '/dashboard')

  })

})