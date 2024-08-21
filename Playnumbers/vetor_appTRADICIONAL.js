import { enter_to_continue, get_number_in_range, getnumber, show_menu } from "./utils/io_utils.js";
import { exibir_maior_menor, exibir_valores } from "./utils/vetor_funcionalidades.js";
import { carregar_lista_de_arquivo, inicializar_vetor } from "./utils/vetor_utils.js";



function main(){
    let opcao = 99;
    let meu_vetor = [];
    while (opcao != 0){
        if (opcao===1){
            meu_vetor = inicializar_vetor();
            enter_to_continue()
        }else if (opcao === 2){
            exibir_valores(meu_vetor);
            enter_to_continue();
        }

        show_menu();
        opcao = get_number_in_range(0, 15, "Escolha: ");
    }
}

main();