import { filtrar, validar_lista, reduzir, resetar_vetor } from "./vetor_utils_SMART.js";
export const menu = [
    {
        text: "1  - Inicializar Vetor",
        canShow: () => true,
        executar: (lista) => [1,2,3,4,5],
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
]

export const somatorio = (lista) => reduzir(lista,(acc, x) => acc+x ,0);
export const media = (lista) => somatorio(lista)/lista.length;
export const maior_elemento = (lista) => reduzir(lista,(x, y) => x > y ? x : y ,lista[0]);
export const menor_elemento = (lista) => reduzir(lista,(x, y) => x < y ? x : y ,lista[0]);
export const exibir_positivos = (lista) => {
    for (let i = 0; i < lista.length; i++){
        if (lista[i] > 0){
             console.log(`Index ${i} -> ${lista[i]}`);
        }
    }
}