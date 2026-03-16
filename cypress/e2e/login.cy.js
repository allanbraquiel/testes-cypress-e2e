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

    cy.location('pathname', { timeout: 15000 }).then((pathname) => {
      if (pathname.includes('/dashboard')) {
        return
      }

      cy.get('body').invoke('text').then((text) => {
        const trecho = text.replace(/\s+/g, ' ').trim().slice(0, 300)
        throw new Error(
          `Login não redirecionou para /dashboard. Path atual: ${pathname}. Trecho da página: ${trecho}`
        )
      })
    })

  })

})