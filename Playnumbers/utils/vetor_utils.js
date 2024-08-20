import { getnumber } from "./io_utils";

export function remover_por_index(lista, index){
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i === index){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    return lista_nova
}

export function remover_por_valor(lista, valor){
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === valor){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    return lista_nova
}

export function editar_por_posicao(lista){
    const novo_val = getnumber("Novo número: ");
    const posicao = getnumber("Posição do número que deseja substituir: ");
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i == posicao){
            lista_nova.push(novo_val);
            continue;
        }
        lista_nova.push(lista[i]);

    }





}