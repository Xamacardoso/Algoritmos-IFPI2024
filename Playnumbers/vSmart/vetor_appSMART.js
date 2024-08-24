import { clear_screen, enter_to_continue, get_number_in_range, show_menu } from "./utils/io_utils.js";
import { menu } from "./utils/vetor_funcionalidades_SMART.js";
import { executar, salvar_lista } from "./utils/vetor_utils_SMART.js";

function main(){
    let minha_lista = [];
    let opcao = 99;
    while(opcao != 0){
        clear_screen();
        show_menu(minha_lista, menu);
        opcao = get_number_in_range(0,15, "Escolha: ");
        clear_screen();
        minha_lista = executar(minha_lista, opcao, menu);
        opcao > 0 ? enter_to_continue() : 0;
    }
    console.log("SAINDO DA APLICAÇÃO, POR FAVOR, SALVE A LISTA.")
    salvar_lista(minha_lista);
    clear_screen();
}


main();