import { question } from "readline-sync";

export function write(message){
    console.log(message)
}
export function getnumber(message){
    return Number(question(message))
}

export function getstring(message){
    return String(question(message))
}

export function getpositivenumber(message){
    const num = Number(question(message))
    if(num <= 0){
        write('O numero deve ser positivo!')
        return getpositivenumber(message)
    }
    return num
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

export function get_number_in_range(min, max, msg){
    let num = getnumber(msg);
    if (num < min || num > max){
        console.log(`Numero inválido! Digite um valor entre ${min} e ${max}`);
        return get_number_in_range(min, max, msg);
    }
    return num;
}

export function getnegativenumber(message){
    const num = Number(question(message))
    if(num >= 0){
        write('O numero deve ser negativo!')
        return getnegativenumber(message)
    }
    return num
}


export function enter_to_continue(){
    getstring('Enter to continue...');

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