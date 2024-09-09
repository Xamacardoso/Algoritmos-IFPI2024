import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class HanoiRGB {
    public static void main(String[] args) {
        try (Scanner in = new Scanner(System.in)) {
            exibirDificuldades();
            Integer dificuldade = in.nextInt();
            Integer jogador1 = partidaHanoi('1', dificuldade);
//            Integer jogador2 = partidaHanoi('2', dificuldade);

        }
    }

    public static Integer partidaHanoi(char jogador, Integer dificuldade) {
        Integer turnos = 0;
        char[][] torres = new char[3][];

        switch (dificuldade){
            case 1 -> {
                torres[0] = torreRGB(9);
            }case 2 -> {
                for (int i = 0; i < torres.length; i++){
                    torres[i] = torreRGB(6);
                }
            }
        }
        System.out.println(torres.length);
        // Printa as arrays
        System.out.println(Arrays.toString(new String[]{Arrays.deepToString(torres)}));
        return turnos;
    }

    public static char[] torreRGB(Integer nElementos){
        // Torre começa sendo uma arraylist para poder dar push nos elementos
        List<Character> vetor = new ArrayList<>();

        for (int i =0; i< (nElementos/3); i++){
            vetor.add('R');
            vetor.add('G');
            vetor.add('B');
        }

        // Embaralha a torre
        Collections.shuffle(vetor);

        char[] torre = new char[nElementos];
        for (int i = 0; i < vetor.size(); i++){
            torre[i] = vetor.get(i);
        }
        return torre;

    }

    public static void exibirDificuldades(){
        System.out.println("""
                1 - Fácil (Só uma torre preenchida)
                2 - Médio (Mais torres preenchidas)
                3 - Difícil (Todas as torres preenchidas ao máximo)
                """);
    }

    public static boolean ganhou(char[][] torres){
        return torreSoTem(torres[0], 'R') && torreSoTem(torres[1], 'G') && torreSoTem(torres[2], 'B');
    }

    public static boolean torreSoTem(char[] torre, char elemento){
        char[] torreLista = Arrays.copyOfRange(torre, 0, torre.length-1);
        for (char pedaco: torreLista){
            if (pedaco != elemento) return false;
        }
        return true;
    }
}
