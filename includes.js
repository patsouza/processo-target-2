let string = 'patricia';
let padronizando = string.toLowerCase();
let contador = 0;

for (let i = 0; i < padronizando.length; i++) {
    if (padronizando[i] === "a") {
        contador += 1
    }
} 

if (contador === 0) {
   console.log(`Não inclui a letra "a"`)
} else {
    console.log(`Inclui a letra "a" e ela se repete ${contador} vezes`)
}