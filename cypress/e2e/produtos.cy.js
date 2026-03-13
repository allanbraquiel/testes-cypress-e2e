import { gerarProduto } from '../support/factories/produto.factory'

describe('CRUD Produtos', () => {

    beforeEach(() => {

        cy.login()

    })

    it('Deve acessar listagem de produtos', () => {

        cy.visit('/produtos')

        cy.contains('Lista de Produtos')

    })

    it('Deve cadastrar um novo produto', () => {

        cy.visit('/produtos/create')

        const produto = gerarProduto()

        cy.get('[name="nome"]').type(produto.nome)
        cy.get('[name="preco"]').type(produto.preco.toString())
        cy.get('[name="estoque"]').type(produto.estoque.toString())
        cy.get('[name="descricao"]').type(produto.descricao)

        cy.contains('Salvar').click()

        cy.url().should('include','/produtos')

    })

})