const bolo = [
    { nome: 'Rogerio',gosto: 'banana',peso: 4,ovos: 15,cor: 'amarelo'},
    { nome: 'Maria',gosto: 'nozes',peso: 5,ovos: 20,cor: 'marrom'},
    { nome: 'Fabio',gosto: 'cenora',peso: 2,ovos: 5,cor: 'laranja'},
    { nome: 'Macelo',gosto: 'maça',peso: 3,ovos: 10,cor: 'marrom'}
]


const nomes = bolo.map(function test(chamada){
    // chamada.ovos += 5
    return chamada.ovos
})
console.log(nomes)
