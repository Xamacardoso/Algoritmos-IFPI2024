import { clear_screen, enter_to_continue, getnumber, getpositivenumber, getstring } from '../utils/io_utils.js'
import {filtrar, reduzir} from "./appUtils.js"

function main(){
    let movies = [
    {
        "nome": "Xama e os Laureados Mágicos",
        "ano": 2024,
        "imdb": 10,
        "bilheteria": 10000000
    },
    {
        "nome": "Xama Contra Ataca 2",
        "ano": 2022,
        "imdb": 9.8,
        "bilheteria": 150000000
    }
    ];
    let choice = 1;
    while (choice !== 0){
        showMenu()
        choice = getnumber("Escolha: ");
        clear_screen();
        movies = execute(choice, movies);
        enter_to_continue();
        clear_screen();
    }
}

function execute(choice, list){
    switch (choice){
        // Exibir movies
        case 1:
            showMovies(list, true);
            break;

        // Adicionar movie
        case 2:
            addMovie(list);
            console.log("Movie adicionado com sucesso!")
            break;

        // Remover movie
        case 3:
            showMovies(list)
            let removeIndex = getpositivenumber("Qual o numero do filme que deseja remover? ");
            list = removeMovie(list, removeIndex);
            console.log("Movie removido com sucesso!");
            break;
        
        // Modificar propriedade de um movie
        case 4:
            showMovies(list, true);
            const modIndex = getpositivenumber("Qual o numero do filme que deseja modificar ");
            const movie = list[modIndex-1];
            clear_screen();
            showMovieProperties(movie);
            const property = getnumber("Qual propriedade deseja modificar? ");
            modifyMovieProperty(movie, property);
            console.log("Propriedade modificada com sucesso!");
            
            break;
        
        // Filtros
        case 5:
            showFilters();
            const filterChoice = getnumber("Escolha: ")
            if (filterChoice > 0){
                list = filterMovies(list, filterChoice);
            }
            console.log(filterChoice > 0 ? "Movies filtrados!" : "Voltando...");
            break;

        // Reduções
        case 6:
            showReduces();
            const reduceChoice = getnumber("Escolha: ")
            if (reduceChoice > 0){
                reduceMovies(list, reduceChoice);
            }
            console.log("Voltando...")
            break;

        // Sair
        case 0:
            console.log("Saindo...\n");
            break;

        default:
            console.log("Erro! Selecione uma opção válida.");
            break;
    }
    return list
}

// Exibe o menu principal
function showMenu(){
    console.log(`
======== ROGER MOVIES =======
1 - Listar Movies
2 - Adicionar Movie
3 - Remover Movie
4 - Modificar Movie
5 - Filtrar Movies
6 - Reduce

0 - Sair
`);
}

// Exibe opções de redução
function showReduces(){
    console.log(`
======== ROGER MOVIES - REDUCES =======
1 - Exibir filme mais velho
2 - Exibir filme mais novo
3 - Exibir filme mais bem-avaliado na IMDB
4 - Exibir filme com pior avaliação na IMDB
5 - Exibir filme com maior arrecadação
6 - Exibir filme com menor arrecadação
            
0 - Sair
    `);
}

// Exibe as opções de filtro
function showFilters(){
    console.log(`
======== ROGER MOVIES - FILTROS =======
1 - Filtrar por ano (maior que x)
2 - Filtrar por ano (menor ou igual a x)
3 - Filtrar por nota IMDB (maior que x)
4 - Filtrar por arrecadação (maior que x)
    
0 - Sair
`);
}

// Filtra os movies baseado na escolha
function filterMovies(list, choice){
    let filterOption, aux;
    switch (choice){
        case 1:
            aux = getnumber("Mais novos que o ano de: ")
            filterOption = (x) => x['ano'] > aux;
            break;

        case 2:
            aux = getnumber("Mais velhos que o ano de: ")
            filterOption = (x) => x['ano'] <= aux;
            break;

        case 3:
            aux = getnumber("Nota maior que: ")
            filterOption = (x) => x['imdb'] > aux;
            break;

        case 4:
            aux = getnumber("Bilheteria maior que: ")
            filterOption = (x) => x['bilheteria'] > aux;
            break;
    }   

    list = filtrar(list, filterOption);

    return list
}

// Reduz os movies a um só valor, mas não modifica a lista
function reduceMovies(list, choice){
    let reduceOption, text;
    switch (choice){
        // Filme mais velho
        case 1:
            text = "Filme mais velho"
            reduceOption = (x, y) => x['ano'] < y['ano'] ? x : y;
            break;
        
        // Filme mais novo
        case 2:
            text = "Filme mais novo"
            reduceOption = (x, y) => x['ano'] > y['ano'] ? x : y;
            break;

        // Filme mais bem avaliado
        case 3:
            text = "Filme com melhor nota IMDB"
            reduceOption = (x, y) => x['imdb'] > y['imdb'] ? x : y;
            break;

        // Filme pior avaliado
        case 4:
            text = "Filme com pior nota IMDB"
            reduceOption = (x, y) => x['imdb'] < y['imdb'] ? x : y;
            break;
        
        // Filme com melhor bilheteria
        case 5:
            text = "Filme com melhor bilheteria"
            reduceOption = (x, y) => x['bilheteria'] > y['bilheteria'] ? x : y;
            break;
        
        // Filme com pior bilheteria
        case 6:
            text = "Filme com pior bilheteria"
            reduceOption = (x, y) => x['bilheteria'] < y['bilheteria'] ? x : y;
            break;
    }   

    const movieReduced = reduzir(list, reduceOption, list[0]);
    clear_screen();
    console.log(`${text}: ${movieReduced['nome']}`);

}

// Exibe os movies
function showMovies(list, detailed = false){
    console.log("========== MOVIES ===========")
    for (let i = 0; i < list.length; i++){
        const movie = list[i]
        console.log(`${i+1} - ${movie["nome"]}`)
        if (detailed){
            console.log(
`Ano       : ${movie["ano"]}
Nota IMDB : ${movie["imdb"]}
Bilheteria: ${movie["bilheteria"]}
`)
        }
    }
    console.log("=============================")
}

// Mostra as propriedades dos movies
function showMovieProperties(movie){
    movie = Object.entries(movie);
    console.log("====== PROPRIEDADES MOVIE =======")
    for (let i = 0; i < movie.length; i++){
        console.log(`${i+1} - ${movie[i][0]} \t: ${movie[i][1]}`)
    }
    console.log("=================================")
}

// Modifica a propriedade de um dos movies
function modifyMovieProperty(movie, property){
    const aux = Object.entries(movie);
    const prevValue = aux[property-1][1];
    const newValue = typeof prevValue === 'string' ?
    getstring("Novo valor: ") : getpositivenumber("Novo valor: ");

    movie[aux[property-1][0]] = newValue;
}

// Adiciona um movie
function addMovie(list){
    let movie = {};
    movie["nome"] = getstring("Nome: ");
    movie["ano"] = getnumber("Ano de lançamento: ");
    movie["imdb"] = getnumber("Nota IMDB: ");
    movie["bilheteria"] = getnumber("Arrecadação: ");

    list.push(movie);
}

// Remove um movie
function removeMovie(list, escolha){
    let new_list = [];
    for (let i = 0; i< list.length; i++){
        if (i+1 == escolha){
            continue;
        }
        new_list.push(list[i])
    } 
    return new_list;
}

main();