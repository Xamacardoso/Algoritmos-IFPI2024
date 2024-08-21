import { get_random_number, getnumber } from "./io_utils.js";

export function multiplicar_valores(lista, valor){
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        lista_nova.push(lista[i] * valor);
    }
    return lista_nova;
}

export function elevar_valores(lista, valor){
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        lista_nova.push(lista[i] ** valor);
    }
    return lista_nova;
}

export function exibir_valores(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(`${lista[i]} - Pos. ${i}`);
    }
}

export function exibir_qtd_lista(lista){
    console.log("Quantidade de itens da lista: ",lista.length);
}

export function exibir_maior_menor(lista){
    let maior = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] > maior){
            maior = lista[i];
        }if (lista[i] < menor){
            menor = lista[i];
        }
    }

    console.log(`O MAIOR valor da lista é ${maior}`);
    console.log(`O MENOR valor da lista é ${menor}`);
}

export function substituir_valores_negativos(lista){
    const lista_nova = [];
    const minimo = getnumber("Valor mínimo da substituição: ");
    const maximo = getnumber("Valor máximo da substituição: ");
    for (let i = 0; i < lista.length; i++){
        if (lista[i] < 0){
            lista_nova.push(get_random_number(minimo, maximo));
        }
        lista_nova.push(lista[i]);
    }
    return lista_nova;
}

export function somatorio_lista(lista){
    let soma = 0;
    for(let i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    
    return soma;
}

export function media_lista(lista){
    return somatorio_lista(lista)/lista.length;
}

