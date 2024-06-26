function sum(a= 0,b=0){
    const numberum = Number(a)
    const numberdois = Number(b)

    if (isNaN(numberum) ||  isNaN(numberdois)){
           throw new Error('Esse valor não é numerico')
    }else{
       let res = numberum + numberdois
       return  res
    }
         

}
try{
console.log(sum(20,4))
console.log(sum(23, true))
console.log(sum(82,"true"))
console.log(sum(34 , 55))
}catch(e){
console.log('Tudo errado')
}
console.log("esse é o fim do meu código")