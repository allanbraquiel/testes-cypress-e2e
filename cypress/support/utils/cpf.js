export function gerarCPF() {

    let cpf = ''

    for(let i = 0; i < 11; i++){
        cpf += Math.floor(Math.random() * 9)
    }

    return cpf

}