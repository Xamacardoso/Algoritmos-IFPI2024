def printMenu():
    print("""
=============== WORDPLAY =================
1 - Carregar arquivo
2 - Exibir palavras com mais de 20 letras.
3 - Exibir palavras sem a letra 'e'.
4 - Exibir palavras com n ou mais letras.
5 - Exibir palavras que não tem certas letras.          

0 - Sair.
""")


def avoids(arquivo):
    if arquivo == None:
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0

    letras_proibidas = input("Digite uma série de letras separadas por espaço: ").split(" ");
    for palavra in arquivo.readlines():
        if palavra_tem_letras(palavra, letras_proibidas):
            palavras += 1
                
        totalpalavras += 1
    
    print(f"\nExistem {palavras} palavras sem as letras na lista {letras_proibidas}.")
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")



def palavra_tem_letras(palavra, letras_proibidas):
    for letra in palavra:
        if letra in letras_proibidas:
            return False
    
    return True


def contar_letras(palavra):
    letras = 0
    for letra in palavra:
        if letra != " ":
            letras += 1;

    return letras
    

def nao_tem_e(palavra):
    for letra in palavra:
        if letra == "e":
            return False

    return True


def palavras_com_20(arquivo):
    if arquivo == None:
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0
    for palavra in arquivo.readlines():
        if contar_letras(palavra) > 20:
            palavras += 1
        
        totalpalavras += 1 
    
    print(f"\nExistem {palavras} palavras com mais de 20 letras");
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")


def palavras_sem_e(arquivo):
    if arquivo == None:
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0
    for palavra in arquivo.readlines():
        if nao_tem_e(palavra):
            palavras += 1

        totalpalavras += 1

    
    print(f"\nExistem {palavras} palavras sem a letra 'e'.")
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")


def palavras_com_n_mais(arquivo):
    if arquivo == None:
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    totalpalavras = 0
    palavras = 0
    n = int(input("Digite o valor de n: "))
    for palavra in arquivo.readlines():
        if contar_letras(palavra) >= n:
            palavras += 1 
        
        totalpalavras +=1 


    print(f"\nExistem {palavras} palavras com {n} letras ou mais.")
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")


def main():
    arquivo = None;
    printMenu();
    escolha = int(input("Escolha: "));

    while escolha != 0:
        if escolha == 1:
            print("\nArquivo carregado.")
            arquivo = open("words.txt", "r");
        elif escolha == 2:
            palavras_com_20(arquivo);
        elif escolha == 3:
            palavras_sem_e(arquivo);
        elif escolha == 4:
            palavras_com_n_mais(arquivo);
        elif escolha == 5:
            avoids(arquivo);


        input("\nPressione ENTER para continuar\n")
        arquivo = open("words.txt", "r");
        printMenu()
        escolha = int(input("Escolha: "));

    

main();