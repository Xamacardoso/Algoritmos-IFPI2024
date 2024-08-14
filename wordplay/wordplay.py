def clear():
    import os
    os.system("cls" if os.name == "nt" else "clear")

def printMenu():
    print("""
=============== WORDPLAY =================
1 - Carregar arquivo
2 - Exibir palavras com mais de 20 letras.
3 - Exibir palavras sem a letra 'e'.
4 - Exibir palavras com n ou mais letras.
5 - Exibir palavras que não tem certas letras.
6 - Exibir palavras que usam certas letras pelo menos uma vez.
7 - Exibir palavras que utilizam somente certas letras.
8 - Exibir palavras que estão com as letras ordenadas alfabeticamente.          
9 - Exibir palavras palíndromas.
          
0 - Sair.
""")


def eh_letra(letra):
    if letra == " " or letra == "\n" or letra == "\r":
        return False
    
    return True


def eh_palindromo(palavra):
    palavra_reversa = ""
    for letra in palavra:
        if eh_letra(letra):
            palavra_reversa = letra + palavra_reversa

    if palavra_reversa == palavra.strip():
        return True
    
    return False


def palavras_palindromas(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    total_palavras = 0
    for palavra in arquivo.readlines():
        if eh_palindromo(palavra):
            palavras += 1
        
        total_palavras += 1
    
    clear()
    print(f"\nExistem {palavras} palavras que são palíndromas.")
    print(f"Esse valor corresponde a {(palavras/total_palavras * 100):.2f}% de todas as palavras")


def uses_only(palavra, letras):
    for letra in palavra:
        if letra not in letras and eh_letra(letra):
            return False

    return True


def so_usam(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    letras_obrigatorias = input("Digite uma série de letras obrigatórias separadas por espaço: ").split(" ")
    palavras = 0
    total_palavras = 0
    for palavra in arquivo.readlines():
        if uses_only(palavra, letras_obrigatorias):
            palavras += 1
        
        total_palavras += 1
    
    clear()
    print(f"\nExistem {palavras} palavras que contém as SOMENTE letras na lista {letras_obrigatorias}.")
    print(f"Esse valor corresponde a {(palavras/total_palavras * 100):.2f}% de todas as palavras")


def palavras_ordenadas(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    total_palavras = 0
    for palavra in arquivo.readlines():
        if is_abecedarian(palavra):
            print(palavra)
            palavras += 1

        total_palavras += 1

    clear()
    print(f"\nExistem {palavras} palavras que contém as letras em ordem alfabetica.")
    print(f"Esse valor corresponde a {(palavras/total_palavras * 100):.2f}% de todas as palavras")

def is_abecedarian(palavra):
    for indexLetra in range(contar_letras(palavra)):
        if indexLetra > 0 and ord(palavra[indexLetra-1]) > ord(palavra[indexLetra]):
            return False

    return True
    
def uses_all(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    letras_proibidas = input("Digite uma série de letras obrigatórias separadas por espaço: ").split(" ")
    palavras = 0
    total_palavras = 0
    for palavra in arquivo.readlines():
        listaLetras = letras_proibidas[:]
        for letra in palavra:
            if letra in listaLetras:
                listaLetras.remove(letra);
        
        if listaLetras == []:
            palavras += 1
        
        total_palavras += 1
    
    clear()
    print(f"\nExistem {palavras} palavras que contém as letras na lista {letras_proibidas}.")
    print(f"Esse valor corresponde a {(palavras/total_palavras * 100):.2f}% de todas as palavras")
        
            



def avoids(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0

    letras_proibidas = input("Digite uma série de letras separadas por espaço: ").split(" ");
    for palavra in arquivo.readlines():
        if palavra_tem_letras(palavra, letras_proibidas):
            palavras += 1
                
        totalpalavras += 1
    
    clear()
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
        if eh_letra(letra):
            letras += 1;

    return letras
    

def nao_tem_e(palavra):
    for letra in palavra:
        if letra == "e":
            return False

    return True


def palavras_com_20(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0
    for palavra in arquivo.readlines():
        if contar_letras(palavra) > 20:
            palavras += 1

        
        totalpalavras += 1 
    
    clear()
    print(f"\nExistem {palavras} palavras com mais de 20 letras");
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.3f}% de todas as palavras")


def palavras_sem_e(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    palavras = 0
    totalpalavras = 0
    for palavra in arquivo.readlines():
        if nao_tem_e(palavra):
            palavras += 1

        totalpalavras += 1

    
    clear()
    print(f"\nExistem {palavras} palavras sem a letra 'e'.")
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")


def palavras_com_n_mais(arquivo):
    if arquivo == None:
        clear()
        print("ERRO - Não há nenhum arquivo carregado. Carregue um arquivo através do menu.")
        return
    
    totalpalavras = 0
    palavras = 0
    n = int(input("Digite o valor de n: "))
    for palavra in arquivo.readlines():
        if contar_letras(palavra) >= n:
            palavras += 1 
        
        totalpalavras +=1 

    clear()
    print(f"\nExistem {palavras} palavras com {n} letras ou mais.")
    print(f"Esse valor corresponde a {(palavras/totalpalavras * 100):.2f}% de todas as palavras")


def main():
    arquivo = None;
    printMenu();
    escolha = int(input("Escolha: "));

    while escolha != 0:
        if escolha == 1:
            arquivo = open("words.txt", "r");
            clear()
            print("\nArquivo carregado.")
        elif escolha == 2:
            palavras_com_20(arquivo);
        elif escolha == 3:
            palavras_sem_e(arquivo);
        elif escolha == 4:
            palavras_com_n_mais(arquivo);
        elif escolha == 5:
            avoids(arquivo);
        elif escolha == 6:
            uses_all(arquivo);
        elif escolha == 7:
            so_usam(arquivo);
        elif escolha == 8:
            palavras_ordenadas(arquivo);
        elif escolha == 9:
            palavras_palindromas(arquivo)


        input("\nPressione ENTER para continuar\n")
        clear();
        arquivo = open(arquivo.name, "r") if arquivo != None else None;
        printMenu()
        escolha = int(input("Escolha: "));

    arquivo.close()

main();