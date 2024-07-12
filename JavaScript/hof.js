function elemento(elemento, indice,array,valor) {
    console.log({
        elemento,
        indice,
        array,
        valor: indice * indice,
    })
}
var lista = ['banana',' jaca', 'melao',' uva', 'maça', 'pera', 'kiwi', 'mamao',]

lista.forEach(elemento)
