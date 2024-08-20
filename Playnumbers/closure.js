import { get_random_number} from "./utils/io_utils.js";

function gerar_lista(tam, inicio, fim){
    const lista = [];
    for (let i = 0; i < tam; i++){
        const numero = get_random_number(inicio,fim)
        lista.push(numero);

    }
    return lista;
}

function filtrar_impares(numeros){
    const lista_nova = [];
    for (let numero of numeros){
        if (numero % 2 !== 0){
            lista_nova.push(numero);
        }
    }
    return lista_nova;
}

function mostrar_itens(colecao){
    console.log(">>> Itens :");
    for (let i = 0; i < colecao.length; i++){
        console.log(colecao[i]);
    }
}

function filtrar_menores_q5(numeros){
    const lista_nova = [];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < 5){
            lista_nova.push(numeros[i]);
        }
    }
    return lista_nova
}

function filtrar(colecao,criterio){
    const nova_lista = [];
    for (let numero of colecao){
        if (criterio(numero) === true){
            nova_lista.push(numero);
        }
    }

    return nova_lista;
}

function eh_impar(numero){
    return numero % 2 !== 0;
}

function main(){
    const numeros = gerar_lista(10,1,10);
    mostrar_itens(numeros);
    const numeros_impares = filtrar(numeros, eh_impar);
    mostrar_itens(numeros_impares);
    const numeros_menor_q5 = filtrar_menores_q5(numeros_impares)
    mostrar_itens(numeros_menor_q5)

    // Estudar esse tipo de funcao hj
    const maiores_q5 = filtrar(numeros, (g) => {return g > 5});

    // Ou assim
    const maiores_q5_v2 = filtrar(numeros, g => g > 5);

    mostrar_itens(maiores_q5);
    mostrar_itens(maiores_q5_v2);

}

main();