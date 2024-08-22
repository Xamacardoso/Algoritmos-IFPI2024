import { question } from "readline-sync";
import { menu } from "./vetor_funcionalidades_SMART.js";

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
export const get_number_in_range = (min, max, msg) => {
    let x = get_number(msg);
    while (x < min || x > max){
        console.log(`Valor inválido!! Digite um valor entre ${min} e ${max}.`);
        x = get_number(msg);    
    }
    return x
}

export function show_menu(lista){
    console.log(`=============== PLAYWORDS SMART ================`)
    for (let i = 0; i < menu.length; i++){
        if (menu[i].canShow(lista)){
            console.log(menu[i].text);
        }
    }
}

export function clear_screen(){
    console.clear();
}