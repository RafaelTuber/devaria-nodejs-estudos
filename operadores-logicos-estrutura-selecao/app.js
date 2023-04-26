const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Alem da verificacoes, precisamos verificar se você esta na lista de presenca do horario');

readline.question('qual o ano do seu nascimento ', ano => {
    if(ano > 2006){
        console.log('você não tem 18 anos');
    }else{
        readline.question("você tem habilitacao? (Sim/Nao) ", temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce não tem habilitacao para entrar no kart');
            }else{
                readline.question('Qual o seu nome? ', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi indentificado na lista de presenca');
                    }
                });
            }
        })
    }
})
