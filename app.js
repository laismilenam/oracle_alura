alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentantivas = 1;
// enquanto chute não for ingual ao numeroSecreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentantivas}`);
    } else {
        if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);

        } else {
        alert (`O número secreto é maior que ${chute}`);
        }
        tentantivas++;
    } 
}
