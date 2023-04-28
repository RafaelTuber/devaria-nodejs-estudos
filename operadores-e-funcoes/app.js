const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
        const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('numero informado nao e valido.');
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado e invalido');
            return null;
    }
}

readline.question('Favor informar um numero: ', numero1 => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    if (numeroValidado1) {
        readline.question('Favor informar outro numero: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);
            
            if (numeroValidado2) {
                readline.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operador) {
                            case '+':
                                console.log(`Operador selecionado adicao resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-':
                                console.log(`Operador selecionado subtracao resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '/':
                                console.log(`Operador selecionado divisao resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*':
                                console.log(`Operador selecionado multiplicacao resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%':
                                console.log(`Operador selecionado modulo resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        });
    }
});