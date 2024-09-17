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
export const get_number_min = (min, msg) => {
    let x = get_number(msg);
    while (x < min){
        console.log(`Erro! O número digitado deve ser maior que ${min}`);
        x = get_number(`Digite um número maior que ${min}: `);
    }
    return x
}
export const get_number_in_range = (min, max, msg) => {
    let x = get_number(msg);
    while (x < min || x > max){
        console.log(`Valor inválido!! Digite um valor entre ${min} e ${max}.`);
        x = get_number(msg);    
    }
    return x
}

export const enter_to_continue = () => get_string("Pressione ENTER para continuar...")

export function show_menu(lista, menu){
    console.log(`=============== PLAYWORDS SMART ================`);
    for (let i = 0; i < menu.length; i++){
        if (menu[i].canShow(lista)){
            console.log(menu[i].text);
        }
    }
    console.log(`================================================`);
}

export function clear_screen(){
    console.clear();
}