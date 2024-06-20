var book = {
    estoke: 350,
    marmita: 30,
    predro: ['loiro','alto','branco','magro'],
    henrique: {
        nome:'henrique',
        apelido:'oreia',
        sobrenome:'almeida',
        idade:23,
    },
    comida:'abacaxi',
     addonestoke(produto){
       this.estoke += produto
    }

}
console.log(book)
book.addonestoke(50)
book.save = function( ){
    //savar no banco de dados
}
console.log(book)