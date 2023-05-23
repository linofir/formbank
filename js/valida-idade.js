export default function maioridade(campo) {
    const nascimento = new Date(campo.value)
    if(verificaIdade(nascimento)) {
        campo.setCustomValidity(true)
    }

}

function verificaIdade(nascimento) {
    let hoje = new Date()
    let dataMaioridade = new Date(hoje.getFullYear()-18, hoje.getUTCMonth() , hoje.getUTCDate())
    return nascimento >= dataMaioridade 
}