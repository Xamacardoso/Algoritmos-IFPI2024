var numero = 39

function persistence(num) {
    let mults = 0
    while (String(num).length > 1){
        console.log("Entrou")
        num = String(num).split('').map(Number).reduce((x, y) => x*y)
        console.log(num)
        mults++
    }
    return mults
  }

console.log(persistence(numero))