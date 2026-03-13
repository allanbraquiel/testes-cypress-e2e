import { faker } from '@faker-js/faker'

export function gerarProduto(){
    return {
        nome: faker.commerce.productName(),
        preco: faker.number.int({ min: 10, max: 1000 }),
        estoque: faker.number.int({ min: 1, max: 50 }),
        descricao: faker.commerce.productDescription()
    }
}