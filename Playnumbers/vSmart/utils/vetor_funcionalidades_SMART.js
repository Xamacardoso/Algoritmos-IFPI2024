import { clear_screen, enter_to_continue, get_number, get_number_in_range, show_menu } from "./io_utils.js";
import { filtrar, validar_lista, reduzir, resetar_vetor, executar, mapear } from "./vetor_utils_SMART.js";
export const menu = [
    {
        text: "1  - Inicializar Vetor",
        canShow: () => true,
        executar: (lista) => {
            console.log("Vetor inicializado com sucesso.")
            return [-1,-2,-3,0,1,2,3]},
        codigo: 1
    },
    {
        text: "2 - Exibir Valores do Vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log("lista: ", lista)
            return lista
        },
        codigo: 2
    },
    {
        text: "3 - Resetar Vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => resetar_vetor(lista),
        codigo: 3
    },
    {
        text: "4 - Exibir quantidade de itens do vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(lista.length)
            return lista
        },
        codigo: 4
    },
    {
        text: "5 - Ver maior e menor valor (com posição de cada um)",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(maior_elemento(lista));
            console.log(menor_elemento(lista));
            return lista;
        },
        codigo: 5
    },
    {
        text: "6 - Exibir somatório dos valores",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(somatorio(lista));
            return lista;
        },
        codigo: 6
    },
    {
        text: "7 - Exibir média dos valores",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(media(lista));
            return lista;
        },
        codigo: 7
    },
    {
        text: "8 - Exibir valores positivos e sua quantidade.",
        canShow: (lista) => contar_elementos(lista, x => x>0) > 0,
        executar: (lista) => {
            exibir_filtrados(lista, x => x > 0, "positivos");
            return lista;
        },
        codigo: 8
    },
    {
        text: "9 - Exibir valores negativos e sua quantidade.",
        canShow: (lista) => contar_elementos(lista, x => x<0) > 0,
        executar: (lista) => {
            exibir_filtrados(lista, x => x < 0, "negativos");
            return lista;
        },
        codigo: 9
    },
    {
        text: "10 - Atualizar todos os valores da lista ",
        canShow: (lista) => contar_elementos(lista, x => x<0) > 0,
        executar: (lista) => {
            return atualizar_valores(lista);
        },
        codigo: 10
    },
]

const menu_valores = [
    {
        text: "1 - Multiplicar por um valor",
        canShow: () => true,
        executar: (lista) => {
            const numero = get_number("Valor para multiplicar todos os elementos da lista: ")
            console.log(`Valores da lista multiplicados por ${numero}`)
            return mapear(lista, x => x*numero);
        },
        codigo: 1
    },

]

export const somatorio = (lista) => reduzir(lista,(acc, x) => acc+x ,0);
export const media = (lista) => somatorio(lista)/lista.length;
export const maior_elemento = (lista) => reduzir(lista,(x, y) => x > y ? x : y ,lista[0]);
export const menor_elemento = (lista) => reduzir(lista,(x, y) => x < y ? x : y ,lista[0]);
export const exibir_filtrados = (lista, criterio, msg_filtro) => {
    console.log(`Existem ${filtrar(lista, criterio).length} valores ${msg_filtro} na lista`)
    for (let i = 0; i < lista.length; i++){
        if (criterio(lista[i])){
            console.log(`Index ${i} -> ${lista[i]}`);
        }
    }
}

export const contar_elementos = (lista, criterio) => {
    lista = filtrar(lista, criterio);
    return lista.length;
}

export const atualizar_valores = (lista) =>{
    show_menu(lista, menu_valores);
    const opcao = get_number_in_range(1,6, "Escolha: ");
    clear_screen();
    return executar(lista, opcao, menu_valores);
}