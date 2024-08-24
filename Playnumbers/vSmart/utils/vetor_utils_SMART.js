import { maior_elemento, menor_elemento } from "./vetor_funcionalidades_SMART.js";
import { clear_screen, get_number, get_number_in_range, get_number_min, get_string, random_number_range } from "./io_utils.js";
import fs, { existsSync } from 'fs'


export function reduzir(lista, agregadora, inicial){
    let acumulado = inicial;
    for (let i = 0; i < lista.length; i++){
        acumulado = agregadora(acumulado, lista[i]);
    }

    return acumulado;
}

export function filtrar(lista, criterio){
    const nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        if (criterio(lista[i])){
            nova_lista.push(lista[i]);
        }
    }
    return nova_lista;
}
export function mapear(lista, transformadora){
    const nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        nova_lista.push(transformadora(lista[i]));
    }

    return nova_lista;
}

export const validar_lista = (lista) =>  lista.length > 0;

export const resetar_vetor = (lista) => {
    let nova_lista = [];
    const valor_padrao = get_number("Digite o valor padrão da lista: ")
    for (let i = 0; i < lista.length; i++){
        nova_lista.push(valor_padrao);
    }
    return nova_lista;
}
export const executar = (lista, num, menu) => {
    for (let i = 0; i < menu.length; i++){
        if (menu[i].codigo == num){
            if (!menu[i].canShow(lista)){
                clear_screen();
                console.log("Opção inválida! Execute uma das opções exibidas!!");
                continue;
            }
            lista = menu[i].executar(lista);
        }
        
    }
    return lista;
}

export const ordenar_elementos = (lista) => {
    const reverse = get_string("Deseja fazer a ordenação em reverso? (S/N): ")
        let lista_ordenada = [];
        while(lista.length > 0){
            if (reverse.toLowerCase() == "s"){
                lista_ordenada.push(maior_elemento(lista));
                lista.splice(lista.findIndex((x) => x==maior_elemento(lista)),1);
                continue;
            }

            lista_ordenada.push(menor_elemento(lista));
            lista.splice(lista.findIndex((x) => x==menor_elemento(lista)),1);
        }
        return lista_ordenada;
}

export const embaralhar_elementos = (lista) => {
    let lista_embaralhada = [];
    while (lista.length > 0){
        let randomIndex = random_number_range(0,lista.length-1);
        lista_embaralhada.push(lista[randomIndex]);
        lista = remover_por_index(lista, randomIndex);
    }
    return lista_embaralhada;
}

export const remover_por_index = (lista, index) => {
    let nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        if (i==index){
            continue;
        }
        nova_lista.push(lista[i]);
    }
    return nova_lista;
}

export const remover_por_valor = (lista, valor) => {
    let nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == valor){
            continue;
        }
        nova_lista.push(lista[i]);
    }
    return nova_lista;

}

export const adicionar_valores = (lista) => {
    const qtd = get_number_min(0, "Digite quantos numeros quer inserir na lista: ");
    for (let i = 0; i < qtd; i++){
        lista.push(get_number(`${i+1}° Numero: `));
    }
}

export const exibir_elementos = (lista) => {
    console.log("=========== ELEMENTOS DA LISTA ===========")
    for (let i = 0; i < lista.length; i++){
        console.log(`${lista[i]}`)
    }
    console.log("==========================================")
}

export const exibir_elementos_com_index = (lista) => {
    console.log("=========== ELEMENTOS DA LISTA ===========")
    for (let i = 0; i < lista.length; i++){
        console.log(`Idx. ${i} -> ${lista[i]}`)
    }
    console.log("==========================================")
}

export const editar_valor_posicao = (lista) => {
    exibir_elementos_com_index(lista);
    const pos = get_number_in_range(0, lista.length-1, "Insira qual posicao deseja editar: ");
    const num = get_number("Deseja substituir por qual valor? ");
    let nova_lista = [];
    for (let i = 0; i < lista.length; i++){
        i == pos ? nova_lista.push(num) : nova_lista.push(lista[i]) 
    }
    return nova_lista;
}

export const salvar_lista = (lista) => {
    let nomeArquivo = get_string("Digite o nome do arquivo para salvar a lista (ex. minhalista.txt): ");
    fs.writeFileSync(nomeArquivo, lista.join("\n"));
    console.log(`Lista salva em ${nomeArquivo}.txt .`);
}

export const carregar_lista = () => {
    let nomeArquivo = get_string("Qual o nome do arquivo .txt pra carregar a lista? (ex. minhalista.txt): ");
    while(!existsSync(nomeArquivo)){
        console.log("Arquivo inválido!! Digite o nome de um arquivo que existe e esteja na mesma pasta!");
        nomeArquivo = get_string("Digite o nome do arquivo novamente: ")
    }
    let lista = mapear(fs.readFileSync(nomeArquivo,"utf-8").split("\n"),Number)
    return lista;
}


export const existe_elemento = (lista, num) => {
    for(let i = 0; i < lista.length; i++){
        if (lista[i] == num){
            return true;
        }
    }
    return false;
}