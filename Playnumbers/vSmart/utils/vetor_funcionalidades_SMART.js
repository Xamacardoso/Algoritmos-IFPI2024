import { clear_screen, get_number, get_number_in_range, get_number_min, get_string, random_number_range, show_menu } from "./io_utils.js";
import { filtrar, validar_lista, reduzir, resetar_vetor, executar, mapear, ordenar_elementos, embaralhar_elementos, salvar_lista, editar_valor_posicao, exibir_elementos, remover_por_index, existe_elemento, remover_por_valor, adicionar_valores, carregar_lista } from "./vetor_utils_SMART.js";
export const menu = [
    {
        text: "1  - Inicializar Vetor",
        canShow: () => true,
        executar: (lista) => {
            lista = inicialzar_lista(lista);
            console.log("Vetor inicializado com sucesso.")
            return lista
        },
        codigo: 1
    },
    {
        text: "2 - Exibir Valores do Vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            exibir_elementos(lista);
            return lista
        },
        codigo: 2
    },
    {
        text: "3 - Resetar Vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => resetar_vetor(lista),
        codigo: 3
    },
    {
        text: "4 - Exibir quantidade de itens do vetor",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(lista.length)
            return lista
        },
        codigo: 4
    },
    {
        text: "5 - Ver maior e menor valor (com posição de cada um)",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(maior_elemento(lista));
            console.log(menor_elemento(lista));
            return lista;
        },
        codigo: 5
    },
    {
        text: "6 - Exibir somatório dos valores",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(somatorio(lista));
            return lista;
        },
        codigo: 6
    },
    {
        text: "7 - Exibir média dos valores",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            console.log(media(lista));
            return lista;
        },
        codigo: 7
    },
    {
        text: "8 - Exibir valores positivos e sua quantidade.",
        canShow: (lista) => contar_elementos(lista, x => x>0) > 0,
        executar: (lista) => {
            exibir_filtrados(lista, x => x > 0, "positivos");
            return lista;
        },
        codigo: 8
    },
    {
        text: "9 - Exibir valores negativos e sua quantidade.",
        canShow: (lista) => contar_elementos(lista, x => x<0) > 0,
        executar: (lista) => {
            exibir_filtrados(lista, x => x < 0, "negativos");
            return lista;
        },
        codigo: 9
    },
    {
        text: "10 - Atualizar todos os valores da lista.",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            return atualizar_valores(lista);
        },
        codigo: 10
    },
    {
        text: "11 - Adicionar novos valores à lista.",
        canShow: (lista) => true,
        executar: (lista) => {
            adicionar_valores(lista)
            return lista;
        },
        codigo: 11
    },
    {
        text: "12 - Remover itens da lista por VALOR EXATO.",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            exibir_elementos(lista);
            const valor = get_number("Digite o valor da lista que deseja excluir: ");
            console.log(existe_elemento(lista, valor) ?
            `Todos os elementos com valor ${valor} foram removidos da lista` :
            "Não existe esse valor na lista!!");
            return remover_por_valor(lista, valor);
        },
        codigo: 12
    },
    {
        text: "13 - Remover itens da lista por POSIÇÃO.",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            let pos = get_number_in_range(0, lista.length, "Insira a posição do item que deseja remover: ");
            return remover_por_index(lista, pos);
        },
        codigo: 13
    },
    {
        text: "14 - Editar valor específico por posição.",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            return editar_valor_posicao(lista)
        },
        codigo: 14
    },
    {
        text: "15 - Salvar valores em arquivo.",
        canShow: (lista) => validar_lista(lista),
        executar: (lista) => {
            salvar_lista(lista)
            return lista;
        },
        codigo: 15
    },
]

const menu_valores = [
    {
        text: "1 - Multiplicar todos os elementos por um valor",
        canShow: () => true,
        executar: (lista) => {
            const numero = get_number("Valor para multiplicar todos os elementos da lista: ")
            console.log(`Valores da lista multiplicados por ${numero}`)
            return mapear(lista, x => x*numero);
        },
        codigo: 1
    },
    {
        text: "2 - Exponenciar todos os elementos por um valor",
        canShow: () => true,
        executar: (lista) => {
            const numero = get_number("Valor para exponenciar todos os elementos da lista: ")
            console.log(`Valores da lista elevados a ${numero}.`)
            return mapear(lista, x => x**numero);
        },
        codigo: 2
    },
    {
        text: "3 - Reduzir a uma fração",
        canShow: () => true,
        executar: (lista) => {
            let fracao = get_string("Digite a fração que será aplicada em todos os números (ex: 1/2): ")
            let [numerador, denominador] = mapear(fracao.split("/"), Number);
            while (denominador == 0){
                console.log("Fração inválida!! Digite novamente.");
                const fracao = get_string("Digite a fração que será aplicada em todos os números (ex: 1/2): ")
                [numerador, denominador] = mapear(fracao.split("/"), Number);
            }
            return mapear(lista, x => x*numerador/denominador);
        },
        codigo: 3
    },
    {
        text: "4 - Substituir valores negativos por um número aleatórios de uma faixa",
        canShow: () => true,
        executar: (lista) => {
            const min = get_number("Valor minimo dos elementos que serao substituidos: ");
            const max = get_number_min(min, `Valor máximo dos elementos substituidos (min. ${min}): `)
            console.log("Valores negativos da lista substituídos!");
            return mapear(lista, x => x >=0 ? x : random_number_range(min, max));
        },
        codigo: 4
    },
    {
        text: "5 - Ordenar valores da lista",
        canShow: () => true,
        executar: (lista) => {
            return ordenar_elementos(lista);
        },
        codigo: 5
    },
    {
        text: "6 - Embaralhar valores da lista",
        canShow: () => true,
        executar: (lista) => {
            console.log(`Valores da lista ordenados!`);
            return embaralhar_elementos(lista);
        },
        codigo: 6
    },

]

const menu_inicializar = [
    {
        text: "1 - Inicializar lista com números aleatórios.",
        canShow: () => true,
        executar: (lista) => {
            const num_valores = get_number_min(0, "Quantos números aleatorios deseja inserir na lista? ");
            const min = get_number("Qual o valor MÍNIMO da lista? ");
            const max = get_number_min(min, "Qual o valor MÁXIMO da lista? ");
            for (let i = 0; i<num_valores; i++){
                lista.push(random_number_range(min,max));
            }
            return lista;
        },
        codigo: 1
    },
    {
        text: "2 - Inicializar lista informando cada valor.",
        canShow: () => true,
        executar: (lista) => {
            adicionar_valores(lista);
            return lista;
        },
        codigo: 2
    },
    {
        text: "3 - Inicializar lista a partir de um arquivo",
        canShow: () => true,
        executar: (lista) => {
            return carregar_lista(lista);
        },
        codigo: 3
    },
]

export const somatorio = (lista) => reduzir(lista,(acc, x) => acc+x ,0);
export const media = (lista) => somatorio(lista)/lista.length;
export const maior_elemento = (lista) => reduzir(lista,(x, y) => x > y ? x : y ,lista[0]);
export const menor_elemento = (lista) => reduzir(lista,(x, y) => x < y ? x : y ,lista[0]);
export const exibir_filtrados = (lista, criterio, msg_filtro) => {
    console.log(`Existem ${filtrar(lista, criterio).length} valores ${msg_filtro} na lista`)
    for (let i = 0; i < lista.length; i++){
        if (criterio(lista[i])){
            console.log(`Index ${i} -> ${lista[i]}`);
        }
    }
}


export const contar_elementos = (lista, criterio) => {
    lista = filtrar(lista, criterio);
    return lista.length;
}

export const atualizar_valores = (lista) =>{
    show_menu(lista, menu_valores);
    const opcao = get_number_in_range(1,6, "Escolha: ");
    clear_screen();
    return executar(lista, opcao, menu_valores);
}

export const inicialzar_lista = (lista) =>{
    show_menu(lista, menu_inicializar);
    const opcao = get_number_in_range(1,3, "Escolha: ");
    clear_screen();
    return executar(lista, opcao, menu_inicializar);
}