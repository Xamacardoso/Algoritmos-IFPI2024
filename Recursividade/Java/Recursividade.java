import java.util.Arrays;
import java.util.Scanner;

public class Recursividade {
    public static void main(String[] args) {
        try (Scanner in = new Scanner(System.in)){
            while (true){
                exibirEscolhas();
                System.out.print("Escolha: ");
                Integer escolha = in.nextInt();
                if (escolha != 0) executar(escolha, in);
                else break;
                enterToContinue(in);
            }
        }
    }

    // Enter to continue
    public static void enterToContinue(Scanner in) {
        System.out.print("Pressione ENTER para continuar...");
        in.nextLine();
        in.nextLine();
    }

    // Executa uma função entre as escolhas
    public static void executar(Integer escolha, Scanner in){
        switch (escolha){
            case 1 -> {
                System.out.print("Digite o número que deseja calcular o fatorial: ");
                Integer n = in.nextInt();
                System.out.printf("O fatorial de %d é %d.\n", n, fatorial(n));
            }
            case 2 -> {
                System.out.print("Digite quantos números terá a sequência: ");
                int n = in.nextInt();
                System.out.println("Sequência: ");
                if (n > 0){
                    for (int i = 1; i <= n; i++){
                        System.out.printf("%d ", fib(i));
                    }
                }
                System.out.println();
            }
            case 3 -> {
                System.out.print("Digite o número mínimo da sequência: ");
                int minimo = in.nextInt();
                System.out.print("Digite o número máximo da sequência: ");
                int maximo = in.nextInt();
                for (int i = minimo; i <= maximo; i++) {
                    System.out.printf("%d ", sequencia(minimo, maximo, i));
                }
                System.out.println();
            }
            case 4 -> {
                System.out.print("Fator 1 (Número a ser multiplicado): ");
                final int fator1 = in.nextInt();
                System.out.print("Fator 2 (Número que irá multiplicar): ");
                final int fator2 = in.nextInt();
                System.out.printf("%d * %d = %d\n", fator1, fator2, somasSucessivas(fator1, fator2));
            }
            case 5 -> {
                System.out.print("Número Base: ");
                final int fator1 = in.nextInt();
                System.out.print("Número Expoente: ");
                final int fator2 = in.nextInt();
                System.out.printf("%d ^ %d = %d\n", fator1, fator2, exponencial(fator1, fator2));
            }
            case 6 -> {
                System.out.print("Numero de elementos que o vetor terá: ");
                final int numElementos = in.nextInt();
                System.out.print("Valor mínimo dos valores do vetor: ");
                final int min = in.nextInt();
                System.out.print("Valor máximo dos valores do vetor: ");
                final int max = in.nextInt();

                Integer[] meuVetor = vetorAleatorio(max, min, numElementos);
                System.out.println(Arrays.toString(meuVetor));
                Integer somatorio = somatorioVetor(meuVetor.length-1, meuVetor);

                System.out.println("Somatório do vetor: " + somatorio);
            }
            case 7 -> {
                System.out.println("Digite uma frase.");
                in.nextLine();
                String frase = in.nextLine();
                Integer[] resultado = vogaisConsoantes(frase.toCharArray(),0,0,0);
                int vogais = resultado[0];
                int consoantes = resultado[1];
                System.out.println("O número de vogais nessa frase é de: " + vogais);
                System.out.println("O número de consoantes nessa frase é de: " + consoantes);
            }
            case null, default -> {
                return;
            }
        }
    }

    // Fatorial de um número
    public static Integer fatorial(Integer n){
        if (n == 0 || n == 1){
            return 1;
        }

        return n * fatorial(n-1);
    }

    // Fibonacci com n elementos
    public static Integer fib(Integer n) {
        if (n == 1){
            return 0;
        }else if (n == 2){
            return 1;
        }

        return fib(n-1) + fib(n-2);
    }

    // Sequencia simples de A até B
    public static Integer sequencia(Integer min, Integer max, Integer atual) {
        if (atual == min){
            return min;
        }
        if (atual == max){
            return max;
        }

        return atual-1;
    }

    // Exponencial
    public static Integer exponencial(Integer fator1, Integer fator2) {
        if (fator2 == 1){
            return fator1;
        }if (fator2 == 0){
            return 0;
        }
        return fator1 * somasSucessivas(fator1, fator2-1);
    }

    // Multiplicações usando somatório
    public static Integer somasSucessivas(Integer fator1, Integer fator2) {
        if (fator2 == 1){
            return fator1;
        }if (fator2 == 0){
            return 0;
        }
        return fator1 + somasSucessivas(fator1, fator2-1);
    }

    // Somatorio vetor aleatorio
    public static Integer[] vetorAleatorio(Integer max, Integer min, Integer n) {
        Integer[] vetor = new Integer[n];
        // Substituindo os valores da array por valores aleatorios
        for (int i = 0; i < vetor.length; i++){
            vetor[i] = (int) (Math.random() * (max - (min - 1))) + min;
        }
        return vetor;
    }

    public static Integer somatorioVetor(Integer i, Integer[] vetor){
        if (i == 0){
            return vetor[0];
        }
        return vetor[i] + somatorioVetor(i-1, vetor);
    }

    // Vogais e Consoantes de uma frase
    public static Integer[] vogaisConsoantes(char[] frase, int index, int numVogais, int numConsoantes) {
        // Caso base: se o índice está fora dos limites da string, retorna o resultado
        if (index >= frase.length) {
            return new Integer[]{numVogais, numConsoantes};
        }

        // Verifica se o caractere é uma letra depois se é vogal
        if (ehLetra(frase[index])) {
            if (ehVogal(frase[index])) {
                numVogais++;
            } else {
                numConsoantes++;
            }
        }

        // Chama ela mesma recursivamente
        return vogaisConsoantes(frase, index + 1, numVogais, numConsoantes);
    }

    public static boolean ehLetra(char letra) {
        int cod = (int) letra;
        return (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122);
    }

    public static boolean ehVogal(char letra){
        char[] vogais = new char[]{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        for (char vogal : vogais){
            if (letra == vogal) return true;
        }
        return false;
    }

    // Menu
    public static void exibirEscolhas(){
        System.out.println("""
                1 - Calcular o Fatorial de um número N.
                2 - Imprimir uma Sequência Fibonacci de comprimento C.
                3 - Função que imprime uma Sequência Simples de A até B.
                4 - Calcular o Produto (multiplicação) nas forma de somas sucessivas.
                5 - Calcular Exponencial de um Número N elevado a expoente E.
                6 - Dado um intervalo A e B, calcular o somatório de um Vetor de N Elementos Aleatórios.
                7 - Contar Vogais e Consoantes de Frase.
                
                0 - Sair""");
    }
}
