function gerar_soma_com(valor){
    function interna(num){
        return num + valor
    }
}

function main(){
    const soma_com_5 = gerar_soma(5)
    const soma_com_2 = gerar_soma(2)

    

    const resultado = soma_com_5(10)
    console.log(resultado)
}

main();