import { gerarPessoa } from '../support/factories/pessoa.factory'

describe('CRUD Pessoas', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Deve acessar listagem de pessoas', () => {
        cy.visit('/pessoas')
        cy.contains('Lista de Pessoas')
    })

    it('Deve cadastrar uma nova pessoa', () => {

        cy.visit('/pessoas/create')

        const pessoa = gerarPessoa()

        cy.get('[name="nome"]').type(pessoa.nome)
        cy.get('[name="cpf"]').type(pessoa.cpf)
        cy.get('[name="email"]').type(pessoa.email)
        cy.get('[name="telefone"]').type(pessoa.telefone)

        //cy.contains('Salvar').click()
        cy.contains('Confirmar').click()


        cy.url().should('include','/pessoas')

    })

})