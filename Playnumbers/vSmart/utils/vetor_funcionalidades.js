import { clear_screen, get_number_in_range, get_random_number, getnumber } from "./io_utils.js";

export function atualizar_valores_vetor(lista){
    clear_screen();
    let lista_nova = [];
    console.log(
    `
1. Multiplicar por um valor
2. Elevar a um valor (exponenciação)
3. Substituir valores negativos por um número aleatórios da uma faixa(min, max)
    `
    )
    const opcao = get_number_in_range(1,3);
    if (opcao == 1){
        lista_nova = multiplicar_valores(lista);

    }else if (opcao == 2){
        lista_nova = elevar_valores(lista);

    }else if (opcao == 3){
        lista_nova = substituir_valores_negativos(lista);

    }
    return lista_nova
}

export function multiplicar_valores(lista){
    clear_screen();
    const valor = getnumber("Digite o valor para multiplicar cada elemento da lista: ")
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        lista_nova.push(lista[i] * valor);
    }
    return lista_nova;
}

export function elevar_valores(lista){
    clear_screen();
    const valor = getnumber("Digite o valor para elevar cada elemento da lista: ")
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        lista_nova.push(lista[i] ** valor);
    }
    return lista_nova;
}

export function exibir_valores(lista){
    clear_screen();
    for (let i = 0; i < lista.length; i++){
        console.log(`Pos. ${i} = ${lista[i]}`);
    }
}

export function exibir_qtd_lista(lista){
    clear_screen();
    console.log("Quantidade de itens da lista: ",lista.length);
}

export function exibir_maior_menor(lista){
    clear_screen();
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
    clear_screen()
    const lista_nova = [];
    const minimo = getnumber("Valor mínimo da substituição: ");
    const maximo = getnumber("Valor máximo da substituição: ");
    for (let i = 0; i < lista.length; i++){
        if (lista[i] < 0){
            lista_nova.push(get_random_number(minimo, maximo));
            continue;
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

export function exibir_positivos(lista){
    clear_screen();
    console.log("===== NUMEROS POSITIVOS ======")
    let count = 0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] > 0){
            count++
            console.log(lista[i]);
        }
    }
    console.log(`A quantidade de elementos positivos dessa lista é ${count}`);
}

export function exibir_negativos(lista){
    clear_screen();
    console.log("===== NUMEROS NEGATIVOS ======")
    let count =0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i] < 0){
            count++
            console.log(lista[i]);
        }
    }
    console.log(`A quantidade de elementos negativos dessa lista é ${count}`);
}
