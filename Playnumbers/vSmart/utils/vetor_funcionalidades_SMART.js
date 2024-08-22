import { filtrar, validar_lista, reduzir } from "./vetor_utils_SMART.js";
export const menu = [
    {
        text: "New game",
        canShow: () => true,
        executar: (lista) => {
            lista = [1, 2, 3, 4, 5]
        },
        codigo: 1
    },
    {
        text: "continue",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => console.log("lista: ", lista),
        codigo: 2
    }
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