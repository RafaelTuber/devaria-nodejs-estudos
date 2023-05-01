const listaArgumentos = process.argv.slice(2);

console.log('\n-------------- Executanto um FOR --------------\n');
for (let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++) {
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}
console.log('\n-----------------------------------------------\n');

console.log('\n------------- Executanto um WHILE -------------\n');
let controladorWhile = 0;
while (controladorWhile < listaArgumentos.length) {
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}
console.log('\n-----------------------------------------------\n');

console.log('\n------------ Executanto um DO WHILE -----------\n');
let controladorDoWhile = 0;
do {
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (controladorDoWhile < listaArgumentos.length);
console.log('\n-----------------------------------------------\n');

console.log('\n------------ Executanto um FOR OF -----------\n');
let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posicao ${controladorForOf} Valor lido = ${argumento}`);
    controladorForOf++;
}
console.log('\n---------------------------------------------\n');