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