import { faker } from '@faker-js/faker'
import { gerarCPF } from '../utils/cpf'

export function gerarPessoa(){
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        telefone: faker.phone.number('629########'),
        cpf: gerarCPF()
    }
}