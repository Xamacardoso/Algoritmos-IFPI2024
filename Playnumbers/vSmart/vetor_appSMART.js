

function main(){
    
    let opcao = 99;
    let meu_vetor = [];
    let arquivo_vetor = "arquivo.txt";
    
    while (opcao != 0){

        if (opcao===1){
            clear_screen();
            opcoes_inicializar_vetor();
            let opcao_vetor = get_number_in_range(1,3, "Escolha: ");
            if (opcao_vetor == 3){
                arquivo_vetor = pedir_nome_arquivo();
                meu_vetor = inicializar_vetor(opcao_vetor, arquivo_vetor);
            }else{
                meu_vetor = inicializar_vetor(opcao_vetor);
            }

        }else if (opcao === 2){
            exibir_valores(meu_vetor);

        }else if (opcao == 3){
            clear_screen();
            meu_vetor = [];
            console.log("Lista redefinida para uma lista vazia [].");

        }else if (opcao == 4){
            exibir_qtd_lista(meu_vetor);

        }else if (opcao == 5){
            exibir_maior_menor(meu_vetor);

        }else if (opcao == 6){
            clear_screen();
            console.log(`O somatório de todos os valores dessa lista é ${somatorio_lista(meu_vetor)}`);

        }else if (opcao == 7){
            clear_screen();
            console.log(`A média de todos os valores dessa lista é ${media_lista(meu_vetor).toFixed(1)}`);

        }else if (opcao == 8){
            exibir_positivos(meu_vetor);

        }else if (opcao == 9){
            exibir_negativos(meu_vetor);
        
        }else if(opcao == 10){
            meu_vetor = atualizar_valores_vetor(meu_vetor);

        }else if (opcao == 11){
            adicionar_valor(meu_vetor);

        }else if (opcao == 12){
            meu_vetor = remover_por_valor(meu_vetor);
            
        }else if (opcao == 13){
            meu_vetor = remover_por_index(meu_vetor);

        }else if (opcao == 14){
            meu_vetor = editar_por_posicao(meu_vetor);

        }else if (opcao == 15){
            salvar_lista_em_arquivo(meu_vetor, arquivo_vetor);
        }
        if (opcao !== 99){
            enter_to_continue();
        }
        clear_screen();

        show_menu();
        opcao = get_number_in_range(0, 15, "Escolha: ");
    }
    salvar_lista_em_arquivo(meu_vetor, arquivo_vetor);
}

main();
