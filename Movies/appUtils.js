export function filtrar(lista, filtro){
    let nova_lista = [];
    for (let item of lista){
        filtro(item) ? nova_lista.push(item) : 0;
    }
    return nova_lista;
}

export function reduzir(lista, agregadora, acc){
    for (let i = 0; i < lista.length; i++){
        acc = agregadora(acc, lista[i]);
    }
    return acc;
}

