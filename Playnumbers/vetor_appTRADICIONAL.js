import { getnumber } from "./utils/io_utils.js";
import fs, { readFile } from "fs"

function salvar_lista_em_arquivo(lista){
    const lista_convertida = lista.join("\n");
    fs.writeFileSync("arquivo.txt", lista_convertida);
    console.log(lista_convertida)
}

function carregar_lista_de_arquivo(arquivo){
    let lista_arquivo = fs.readFileSync(arquivo, "utf8").split("\n");
    for (let i = 0; i < lista_arquivo.length; i++){
        lista_arquivo[i] = Number(lista_arquivo[i]);
    }
    console.log(lista_arquivo);
}

function main(){
    const data = [1,2,3];
    carregar_lista_de_arquivo("arquivo.txt");
}

main();