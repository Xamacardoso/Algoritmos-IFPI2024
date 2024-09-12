import javax.sound.midi.Soundbank;
import java.sql.SQLOutput;
import java.util.*;

public class HanoiRGB {
    public static void main(String[] args) {
        try (Scanner in = new Scanner(System.in)) {
            showDifficulties();
            Integer difficulty = in.nextInt();
            Character[][] towers1 = new Character[3][];
            towers1 = fillTowers(towers1, difficulty);
            Character[][] towers2 = towers1.clone();

            Integer jogador1 = partidaHanoi('1', towers1, in);
//            Integer jogador2 = partidaHanoi('2', dificuldade);

        }
    }

    // Preenche as torres baseado na dificuldade
    public static Character[][] fillTowers(Character[][] towers, Integer difficulty) {
        switch (difficulty) {
            case 1 -> {
                towers[0] = torreRGB(9);
                towers[1] = new Character[9];
                towers[2] = new Character[9];
            }
            case 2 -> {
                for (int i = 0; i < towers.length; i++) {
                    towers[i] = torreRGB(6);
                }
            }
            case 3 -> {
                for (int i = 0; i < towers.length; i++) {
                    towers[i] = torreRGB(8);
                }
            }
        }
        System.out.println(towers.length);
        // Exibe as arrays
        System.out.println(Arrays.toString(new String[]{Arrays.deepToString(towers)}));
        return towers;
    }

    // Partida da torre hanoi RGB
    public static Integer partidaHanoi(char player, Character[][] towers, Scanner in) {
        Integer turnos = 0;
        System.out.println("Vez do jogador " + player);
        System.out.printf("Turno %d\n", turnos + 1);
        String play = requestMovement(in, towers);


        System.out.println("jogou no jotinha");
        turnos++;
        return turnos;
    }

    // Pede um movimento ao usuário até ele ser válido
    public static String requestMovement(Scanner in, Character[][] towers) {
        in.nextLine();
        String play = in.nextLine();
        String[] positions = play.split("");
        while (!validatemovent(positions[0], positions[1], towers)) {
            play = in.nextLine();
            positions = play.split("");
        }

        return play;
    }

    // Valida o movimento
    public static boolean validatemovent(String pos1, String pos2, Character[][] towers) {
        if (!(pos1.equalsIgnoreCase("R") || pos1.equalsIgnoreCase("G") || pos1.equalsIgnoreCase("B"))
                && !(pos2.equalsIgnoreCase("R") || pos2.equalsIgnoreCase("G") || pos2.equalsIgnoreCase("B"))) {
            System.out.println("MOVIMENTO INVÁLIDO, DIGITE UM MOVIMENTO VÁLIDO. (Ex.: 'bg')");
            return false;
        } else if (pos1 == pos2) {
            System.out.println("MOVIMENTO INVÁLIDO, A TORRE DE ORIGEM NÃO PODE SER A MESMA DO DESTINO");
            return false;
        } else if (getTower(pos1, towers) == null) {
            System.out.println("MOVIMENTO INVÁLIDO, A ORIGEM NÃO PODE ESTAR VAZIA!");
            return false;
        } else if (towerIsFull(getTower(pos2, towers))) {
            System.out.println("MOVIMENTO INVÁLIDO, A ORIGEM NÃO PODE ESTAR VAZIA!");
            return false;
        }

        return true;
    }

    // Retorna se a torre está cheia ou não
    public static boolean towerIsFull(Character[] tower) {
        for (Character c : tower) {
            if (c == null) return false;
        }
        return true;
    }

    // Pega uma torre baseada na string
    public static Character[] getTower(String sel, Character[][] towers) {
        if (sel.equalsIgnoreCase("R")) {
            return towers[0];
        } else if (sel.equalsIgnoreCase("G")) {
            return towers[1];
        }
        return towers[2];
    }

    // Gera uma torre RGB aleatória
    public static Character[] torreRGB (Integer nElements){
        Character[] tower = new Character[9];

        // Letras possíveis
        char[] letters = new char[]{'R', 'G', 'B'};

        // Preenchendo a torre aleatoriamente
        for (int i = 0; i < nElements; i++) {
            // Pega uma letra aleatoria e coloca ele na torre
            int index = randomNumberInRange(0, 2);
            tower[i] = letters[index];
        }

        return tower;
    }

    // Mostra as dificuldades
    public static void showDifficulties () {
        System.out.println("""
                1 - Fácil (Só uma torre preenchida)
                2 - Médio (Mais torres preenchidas)
                3 - Difícil (Todas as torres preenchidas ao máximo)
                """);
    }

    // Gerar numero aleatorio
    public static int randomNumberInRange ( int min, int max){
        return (int) (Math.random() * (max - min + 1)) + min;
    }

    // Condição de vitoria do jogador
    public static boolean playerWon ( char[][] towers){
        return towerOnlyHas(towers[0], 'R') && towerOnlyHas(towers[1], 'G') && towerOnlyHas(towers[2], 'B');
    }

    // Verificação para saber se a torre so tem um determinado caractere
    public static boolean towerOnlyHas ( char[] tower, char element){
        char[] towerList = Arrays.copyOfRange(tower, 0, tower.length - 1);
        for (char piece : towerList) {
            if (piece != element)
                return false; // Se nao for todos iguais a torre nao ta completa. Retorna falso nesse caso
        }
        return true;
    }

    // Limpa a tela
    public static void clear () {
        for (int i = 0; i < 50; i++) {
            System.out.println();
        }
    }
}


