import { get_number_in_range, show_menu } from "./utils/io_utils.js";
import { menu } from "./utils/vetor_funcionalidades_SMART.js";
import { executar } from "./utils/vetor_utils_SMART.js";

function main(){
    let minha_lista = [];
    let opcao = 99;
    while(opcao != 0){
        show_menu(minha_lista);
        opcao = get_number_in_range(0,15, "Escolha: ");
        minha_lista = executar(minha_lista, opcao);
    }
}


main();