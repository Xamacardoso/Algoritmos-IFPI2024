import { question } from "readline-sync";

export const get_number = (msg) => Number(question(msg));
export const get_string = (msg) => question(msg);
export const get_positive_number = () => {
    let x = get_number("Digite um número positivo: ");
    while(x < 1){
        console.log("Erro! O número digitado deve ser positivo!");
        x = get_number("Digite um número positivo: ");
    }
    return x;
}
export const random_number_range = (min, max) => Math.floor(Math.random() * (max+1 - min)) + min;
export const get_number_in_range = (min, max) => {
    let x = get_number("Digite um numero: ");
    while (x < min || x > max){
        console.log(`Valor inválido!! Digite um valor entre ${min} e ${max}.`);
        let x = get_number("Digite um numero: ");    
    }
    return x
}

export function show_menu(){
    console.log(
`
================== PLAYWORDS ===================
1  - Inicializar vetor
2  - Mostrar valores do vetor
3  - Resetar valor
4  - Exibir quantidade de itens do vetor
5  - Exibir maior e menor valor
6  - Somatório dos valores
7  - Média dos valores
8  - Mostrar positivos e quantidade deles

9  - Mostrar negativos e quantidade deles
10 - Atualizar todos os valores
11 - Adicionar novos valores
12 - Remover itens por valor exato
13 - Remover por posição
14 - Editar valor específico por posição
15 - Salvar valores em arquivo

0 - Sair
`
    )
}

export function clear_screen(){
    console.clear();
}