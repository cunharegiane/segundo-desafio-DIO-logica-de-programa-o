
let result = count(159, 35)
const menssage = `O héroi possui saldo de ${result} vitórias e está no nível de`

if(result < 10){
    console.log(`${menssage} ferro`)
} else if(result >= 11 && result < 20){
    console.log(`${menssage} bronze`)
}       else if(result >= 21 && result <= 50){
    console.log(`${menssage} prata`)
}           else if(result >=51 && result <= 80){
    console.log(`${menssage} ouro`)
}               else if(result >=81 && result <= 90){
    console.log(`${menssage} diamante`)
}                   else if(result >=91 && result <= 100){
    console.log(`${menssage} lendário`)
}                       else if(result >= 101 ){
    console.log(`${menssage} imortal`)
}

function count(victories, defeats){
    let balance = victories - defeats
    return balance

}

/* Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */