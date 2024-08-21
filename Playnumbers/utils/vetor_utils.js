import { get_number_in_range, get_random_number, getnumber, getpositivenumber, getstring } from "./io_utils.js";
import fs from "fs";

export function inicializar_vetor(){
    console.log(
    `
    1 - Inserir números manualmente
    2 - Inserir valores aleatorios no array
    3 - Carregar valores a partir de um arquivo
    `)
    const lista_nova = [];
    const opcao = get_number_in_range(1,3);

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

    let nome_arquivo = getstring("Nome do arquivo .txt (Ex: valores.txt): ");
    while (!fs.existsSync(nome_arquivo)){
        console.log("Arquivo não encontrado! Digite um arquivo existente nessa pasta.");
        nome_arquivo = getstring("Nome do arquivo .txt (Ex: valores.txt): ");
    }

    return carregar_lista_de_arquivo(nome_arquivo);

}

export function adicionar_valor(lista){
    const qtd = getpositivenumber("Quantos números deseja adicionar? ");
    for (let i = 0; i < qtd; i++){
        let num = getnumber(`Número ${i+1}: `)
        lista.push(num);
    }

}

export function remover_por_index(lista, index){
    const lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i === index){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    return lista_nova
}

export function remover_por_valor(lista, valor){
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === valor){
            continue;
        }
        lista_nova.push(lista[i]);
    }
    return lista_nova
}

export function editar_por_posicao(lista){
    const novo_val = getnumber("Novo número: ");
    const posicao = getnumber("Posição do número que deseja substituir: ");
    let lista_nova = [];
    for (let i = 0; i < lista.length; i++){
        if (i == posicao){
            lista_nova.push(novo_val);
            continue;
        }
        lista_nova.push(lista[i]);
    }
}

export function salvar_lista_em_arquivo(lista){
    const lista_convertida = lista.join("\n");
    fs.writeFileSync("arquivo.txt", lista_convertida);
}

export function carregar_lista_de_arquivo(arquivo){
    let lista_arquivo = fs.readFileSync(arquivo, "utf8").split("\n");
    for (let i = 0; i < lista_arquivo.length; i++){
        lista_arquivo[i] = Number(lista_arquivo[i]);
    }
    return lista_arquivo;
}