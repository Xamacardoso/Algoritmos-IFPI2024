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



export function enter_to_continue(){
    get_text('Enter to continue...');

} 
  
export function clear_screen(){
    console.clear();

}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (min*max) + min)
}