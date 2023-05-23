export function validaCPF(campo) {
    const cpfLimpo = campo.value.replace(/\.|-/g, "")
    console.log(cpfLimpo)
    if(validaRepeticao(cpfLimpo) || validaPrimeiroDigito(cpfLimpo) || validaSgundoDigito(cpfLimpo)) {
        campo.setCustomValidity(true)
    }
}

function validaRepeticao(cpf) {
    const validacaoRegex = [/[0]/g,/[1]/g,/[2]/g,/[3]/g, /[4]/g,/[5]/g, /[6]/g,/[7]/g, /[8]/g,/[9]/g]
    let cpfInvalido = []
    validacaoRegex.forEach(r => {
    cpfInvalido = cpf.match(r)
    
    })
    if(cpfInvalido === null) {
        cpfInvalido = [1,1,1,1,1,1,1,1,1,1]
    }
    return  cpfInvalido.length == cpf.length
}



function validaPrimeiroDigito(cpf) {
    let multiplicador = 10
    let calculoVerificacao = 0

    for (let i=0; i < 9 ; i++) {
        calculoVerificacao += cpf[i] * multiplicador
        multiplicador--
    }

    calculoVerificacao = calculoVerificacao % 11

    if(calculoVerificacao == 0 || calculoVerificacao == 1) {
        calculoVerificacao = 0
    }else {
        calculoVerificacao = 11 - calculoVerificacao
    }
    
    return calculoVerificacao != cpf[9]
}

function validaSgundoDigito(cpf) {
    let multiplicador = 11
    let calculoVerificacao = 0

    for (let i=0; i < 10 ; i++) {
        calculoVerificacao += cpf[i] * multiplicador
        multiplicador--
    }

    calculoVerificacao = calculoVerificacao % 11
    
    if(calculoVerificacao == 0 || calculoVerificacao == 1) {
        calculoVerificacao = 0
    }else {
        calculoVerificacao = 11 - calculoVerificacao
    }
        return calculoVerificacao != cpf[10]

}