import { menu } from "./vetor_funcionalidades_SMART.js";
import { clear_screen, enter_to_continue, get_number } from "./io_utils.js";

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

export const validar_lista = (lista) =>  lista.length > 0;

export const resetar_vetor = (lista) => {
    let nova_lista = [];
    const valor_padrao = get_number("Digite o valor padrão da lista: ")
    for (let i = 0; i < lista.length; i++){
        nova_lista.push(valor_padrao);
    }
    return nova_lista;
}
export const executar = (lista, num, menu) => {
    for (let i = 0; i < menu.length; i++){
        if (menu[i].codigo == num){
            if (!menu[i].canShow(lista)){
                clear_screen();
                console.log("Opção inválida! Execute uma das opções exibidas!!");
                continue;
            }
            lista = menu[i].executar(lista);
        }
        
    }
    return lista;
}