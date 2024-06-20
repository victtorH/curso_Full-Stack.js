function pessoa(nome, idade, cheiros){
    this.nome = nome
    this.idade = idade
    this.cheiros = cheiros
    this.invalores = 0
    this.pagamento = false
    this.addinvalores = function(aumentando){
            this.invalores += aumentando
    }
}

    let Kelly = new pessoa ('Kelly',43,'perfume')
    Kelly.addinvalores(30)
    Kelly.pagamento = true
    Kelly.saldo = 2000
    console.log(Kelly)


    var victtor = new pessoa('victtor',17,'creme')
    victtor.compras = {
        maça: 30,
        pera: 5,
    }
    console.log(victtor)

    victtor.compras.maça = 10
    console.log(victtor.compras)