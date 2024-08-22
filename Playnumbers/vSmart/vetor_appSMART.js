import { clear_screen, get_number_in_range, get_positive_number, random_number_range, show_menu } from "./utils/io_utils.js";
import { exibir_positivos, maior_elemento, menor_elemento,opcoes } from "./utils/vetor_funcionalidades_SMART.js";


function main(){
    let opcao = 99;
    let meu_vetor = [];
    let arquivo = "arquivo.txt";
    
    while (opcao != 0){
        meu_vetor = opcoes(opcao);

        clear_screen();
        show_menu();
        console.log(meu_vetor)
        opcao = get_number_in_range(0,15);
    }
}

main();