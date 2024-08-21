import { clear_screen, get_number_in_range, get_random_number, getnumber, getpositivenumber, getstring } from "./io_utils.js";
import fs from "fs";
import { exibir_valores } from "./vetor_funcionalidades.js";

export function pedir_nome_arquivo(){
    let nome = getstring("Digite o nome do arquivo .txt (Ex: valores.txt): ")
    while (!fs.existsSync(nome)){
        console.log("Arquivo não encontrado! Digite um arquivo existente nessa pasta.");
        nome = getstring("Digite o nome do arquivo .txt (Ex: valores.txt): ");
    }
    return nome;
}

export function inicializar_vetor(opcao, nome_arquivo = ''){
    const lista_nova = [];
    if (opcao != 3){
        const tamanho_array = getpositivenumber("Tamanho da lista: ");
        const minimo_array = getnumber("Valor mínimo da lista: ");
        const maximo_array = getnumber("Valor máximo da lista: ");

        if (opcao == 2){
            for (let i = 0; i < tamanho_array; i++){
                lista_nova.push(get_random_number(minimo_array, maximo_array));
            }
            return lista_nova;
        }
        for (let i = 0; i < tamanho_array; i++){
            lista_nova.push(get_number_in_range(minimo_array, maximo_array, `${i+1}° elemento: `));
        }
        return lista_nova;
    }

    console.log(`Arquivo carregado!! (${nome_arquivo})`)
    return carregar_lista_de_arquivo(nome_arquivo);

}

export function criar_lista_aleatoria(){
    const lista_nova = [];
    const tamanho_array = getpositivenumber("Tamanho da lista: ");
    const minimo_array = getnumber("Valor mínimo da lista: ");
    const maximo_array = getnumber("Valor máximo da lista: ");

    for (let i = 0; i < tamanho_array; i++){
        lista_nova.push(get_number_in_range(minimo_array, maximo_array, `${i+1}° Número: `))
    }
    return lista_nova;
}

export function pedir_lista(){
    const lista_nova = [];
    const tamanho_array = getpositivenumber("Tamanho da lista: ");
    const minimo_array = getnumber("Valor mínimo da lista: ");
    const maximo_array = getnumber("Valor máximo da lista: ");

    for (let i = 0; i < tamanho_array; i++){
        lista_nova.push(get_number_in_range(minimo_array, maximo_array, `${i+1}° Número: `))
    }
    return lista_nova;
}

export function adicionar_valor(lista){
    clear_screen();
    const qtd = getpositivenumber("Quantos números deseja adicionar? ");
    for (let i = 0; i < qtd; i++){
        let num = getnumber(`Número ${i+1}: `)
        lista.push(num);
    }
    console.log("Novos valores adicionados na sua lista.")
}

export function remover_por_index(lista){
    clear_screen();
    exibir_valores(lista);
    const index = get_number_in_range(0, lista.length, "Digite a posição onde está o número que deseja remover: ");
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i === index){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    console.log("Lista atualizada.")
    return lista_nova
}

export function remover_por_valor(lista){
    clear_screen()
    exibir_valores(lista);
    let valor = getnumber("Valor que deseja excluir da lista: ");
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === valor){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    console.log("Lista atualizada.")
    return lista_nova
}

export function editar_por_posicao(lista){
    clear_screen();
    exibir_valores(lista);
    const posicao = getnumber("Posição do número que deseja substituir: ");
    const novo_val = getnumber("Novo número: ");
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i == posicao){
            lista_nova.push(novo_val);
            continue;
        }
        lista_nova.push(lista[i]);
    }

    console.log("Lista atualizada.")
    return lista_nova;
}

export function salvar_lista_em_arquivo(lista, nome_arquivo = "arquivo.txt"){
    clear_screen();
    const lista_convertida = lista.join("\n");
    fs.writeFileSync(nome_arquivo, lista_convertida);
    console.log(`Lista salva em ${nome_arquivo}.`)
}

export function carregar_lista_de_arquivo(arquivo){
    let lista_arquivo = fs.readFileSync(arquivo, "utf8").split("\n");
    for (let i = 0; i < lista_arquivo.length; i++){
        lista_arquivo[i] = Number(lista_arquivo[i]);
    }
    return lista_arquivo;
}

export function mapear(lista, func_transformadora){
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        lista_nova.push(func_transformadora(lista[i]));
    }
    return lista_nova;
}
