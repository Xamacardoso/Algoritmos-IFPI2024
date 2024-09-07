import java.util.Arrays;
import java.util.Scanner;

public class While {
    public static void main(String[] args){
        try (Scanner in = new Scanner(System.in)) {
            while (true) {
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
    public static void executar(Integer escolha, Scanner in) {
        switch (escolha) {
            case 1 -> System.out.println("O resultado é " + fatorial(in));
            case 2 -> fib(in);
            case 3 -> sequencia(in);
            case 4 -> somasSucessivas(in);
            case 5 -> exponencial(in);
            case 6 -> vetorAleatorio(in);
            case 7 -> vogaisConsoantes(in);
            case null, default -> {
                return;
            }
        }
    }

    // Fatorial de um número
    public static Integer fatorial(Scanner in) {
        System.out.print("Digite qual número deseja calcular o fatorial: ");
        int n = in.nextInt();
        if (n == 0 || n == 1) {
            return 1;
        }
        int resultado = 1;
        for (int i = 1; i <= n; i += 1) {
            resultado *= i;
        }
        return resultado;
    }

    // Fibonacci com n elementos
    public static void fib(Scanner in) {
        System.out.print("Digite quantos números terá a sequência: ");
        int n = in.nextInt();
        int x1 = 0;
        int x2 = 1;
        int aux;

        System.out.println("Sequência: ");
        int i = 0;
        while (i < n) {
            String comp = (i == n - 1) ? "\n" : " ";
            System.out.print(x1 + comp);
            aux = x2;
            x2 += x1;
            x1 = aux;
            i++;
        }
    }

    // Sequencia simples de A até B
    public static void sequencia(Scanner in) {
        System.out.print("Numero mínimo da sequência: ");
        int a = in.nextInt();
        System.out.print("Numero máximo da sequência: ");
        int b = in.nextInt();

        int i = a;
        while (i <= b) {
            String comp = (i == b) ? "\n" : " ";
            System.out.print(i + comp);
            i++;
        }
    }

    // Exponencial
    public static void exponencial(Scanner in) {
        System.out.print("Numero Base: ");
        int a = in.nextInt();
        System.out.print("Número Expoente: ");
        int b = in.nextInt();

        int resultado = a;
        int i = 1;
        while (i < b) {
            resultado *= a;
            i++;
        }

        System.out.printf("%d ^ %d = %d\n", a, b, resultado);
    }

    // Multiplicações usando somatório
    public static void somasSucessivas(Scanner in) {
        System.out.print("Fator 1 (Número a ser multiplicado): ");
        final int fator1 = in.nextInt();
        System.out.print("Fator 2 (Número que irá multiplicar): ");
        final int fator2 = in.nextInt();

        int resultado = 0;
        int i = 0;
        while (i < fator2) {
            resultado += fator1;
            i++;
        }

        System.out.printf("%d * %d = %d\n", fator1, fator2, resultado);
    }

    // Somatorio vetor aleatorio
    public static void vetorAleatorio(Scanner in) {
        System.out.print("Numero de elementos do vetor: ");
        final int n = in.nextInt();
        System.out.print("Valor mínimo dos números do vetor: ");
        final int min = in.nextInt();
        System.out.print("Valor máximo dos números do vetor: ");
        final int max = in.nextInt();

        Integer[] vetor = new Integer[n];
        Integer somatorio = 0;
        // Substituindo os valores da array por valores aleatorios
        int i = 0;
        while (i < vetor.length) {
            vetor[i] = (int) (Math.random() * (max - (min - 1))) + min;
            somatorio += vetor[i];
            i++;
        }
        System.out.println("Vetor: " + Arrays.toString(vetor));
        System.out.println("Somatório: " + somatorio);

    }

    // Vogais e Consoantes de uma frase
    public static void vogaisConsoantes(Scanner in) {
        System.out.println("Digite uma frase.");
        in.nextLine();
        String frase = in.nextLine();
        int vogais = 0;
        int consoantes = 0;

        int i = 0;
        char[] fraseArray = frase.toCharArray();
        while (i < fraseArray.length) {
            if (ehLetra(fraseArray[i])) {
                if (ehVogal(fraseArray[i])) {
                    vogais++;
                    i++;
                    continue;
                }
                i++;
                consoantes++;
            }
        }
        System.out.println("O número de vogais nessa frase é de: " + vogais);
        System.out.println("O número de consoantes nessa frase é de: " + consoantes);
    }

    public static boolean ehLetra(char letra) {
        int cod = (int) letra;
        return (cod >= 65 && cod <= 90 || cod >= 97 && cod <= 122);
    }

    public static boolean ehVogal(char letra) {
        char[] vogais = new char[]{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        int i = 0;
        while (i < vogais.length) {
            if (letra == vogais[i]) return true;
            i++;
        }
        return false;
    }

    // Menu
    public static void exibirEscolhas() {
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
