export function reduzir(lista, agregadora, inicial){
    let acumulado = inicial;
    for (let i = 0; i < lista.length; i++){
        acumulado = agregadora(acumulado, lista[i]);
    }

    return acumulado;
}

export function filtrar(lista, criterio){
    const nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        if (criterio(lista[i])){
            nova_lista.push(lista[i]);
        }
    }
    return nova_lista;
}
export function mapear(lista, transformadora){
    const nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        nova_lista.push(transformadora(lista[i]));
    }

    return nova_lista;
}