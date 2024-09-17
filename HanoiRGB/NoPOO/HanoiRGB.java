import java.util.*;

public class HanoiRGB {
    public static void main(String[] args) {
        try (Scanner in = new Scanner(System.in)) {
            showDifficulties();
            Integer difficulty = in.nextInt();
            in.nextLine();
            Character[][] towers1 = new Character[3][];
            towers1 = fillTowers(towers1, difficulty);
            Character[][] towers2 = copyTowers(towers1);

            Integer player1 = partidaHanoi('1', towers1, in);
            Integer player2 = partidaHanoi('2', towers2, in);
            clear();
            showWinner(player1,player2);

        }
    }

    // Preenche as torres baseado na dificuldade
    public static Character[][] fillTowers(Character[][] towers, Integer difficulty) {
        switch (difficulty) {
            case 1 -> {
                //towers[0] = torreRGB(9);
                towers[0] = new Character[]{'R','G','B',null,null,null,null,null,null};
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
        clear();
        return towers;
    }

    // Partida da torre hanoi RGB
    public static Integer partidaHanoi(char player, Character[][] towers, Scanner in) {
        Integer turnos = 0;
        System.out.println("Vez do jogador " + player);
        while (!playerWon(towers)) {
            clear();
            System.out.printf("Turno %d\n", turnos + 1);
            String[] play = requestMovement(in, towers);
            // Adicionar o ultimo elemento de uma torre em outra
            Character[] originTower = getTower(play[0], towers);
            Character[] destinyTower = getTower(play[1], towers);
            destinyTower[firstNullIndex(destinyTower)] = originTower[lastElementIndex(originTower)];
            originTower[lastElementIndex(originTower)] = null;

            turnos++;
        }
        showTowers(towers);
        System.out.printf("Parabéns, Jogador %c, você completou a torre de Hanoi RGB em %d movimentos.\n", player, turnos);
        pressEnter();

        return turnos;
    }

    // Pede um movimento ao usuário até ele ser válido
    public static String[] requestMovement(Scanner in, Character[][] towers) {
        showTowers(towers);
        System.out.print("Jogue: ");
        String play = in.nextLine().trim();
        String[] positions = play.split("");
        while (!validatemovent(positions[0], positions[1], towers)) {
            pressEnter();
            clear();
            showTowers(towers);
            System.out.print("Jogue: ");
            play = in.nextLine();
            positions = play.split("");
        }
        return positions;
    }

    // Valida o movimento
    public static boolean validatemovent(String pos1, String pos2, Character[][] towers) {
        // Se origem nao for nem R,G ou B e o destino não for nem R,G ou B
        if (!(pos1.equalsIgnoreCase("R") || pos1.equalsIgnoreCase("G") || pos1.equalsIgnoreCase("B"))
        || !(pos2.equalsIgnoreCase("R") || pos2.equalsIgnoreCase("G") || pos2.equalsIgnoreCase("B"))) {
            System.out.println("MOVIMENTO INVÁLIDO, DIGITE UM MOVIMENTO VÁLIDO. (Ex.: 'bg')");
            return false;

        // Se a origem for igual ao destino
        } if (pos1.equalsIgnoreCase(pos2)){
            System.out.println("MOVIMENTO INVÁLIDO, A TORRE DE ORIGEM NÃO PODE SER A MESMA DO DESTINO");
            return false;

        // Se a torre de origem for nula
        }if (towerOnlyHas(getTower(pos1, towers), null)) {
            System.out.println("MOVIMENTO INVÁLIDO, A ORIGEM NÃO PODE ESTAR VAZIA!");
            return false;

        // Se a torre origem estiver cheia
        }if (towerIsFull(getTower(pos2, towers))) {
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
        } else if (sel.equalsIgnoreCase("B")) {
            return towers[2];
        }
        return null;
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
    public static boolean playerWon ( Character[][] towers){
        return towerIsComplete(towers[0], 'R') && towerIsComplete(towers[1], 'G') && towerIsComplete(towers[2], 'B');
    }

    // Verificação para saber se a torre so tem um determinado caractere
    public static boolean towerOnlyHas ( Character[] tower, Character element){
        Character[] towerList = Arrays.copyOfRange(tower, 0, tower.length - 1);
        for (Character piece : towerList) {
            if (piece != element)
                return false; // Se nao for todos iguais a torre nao ta completa. Retorna falso nesse caso
        }
        return true;
    }

    // Verifica se os elementos não nulos de uma torre se igualam a um determinado valor
    public static boolean towerIsComplete(Character[] tower, Character element){
        for (Character piece: tower){
            if (piece != null && piece != element){
                return false;
            }
        }
        return true;
    }

    // Retorna o ultimo elemento não nulo da lista
    public static int lastElementIndex(Character[] tower){
        for (int i = tower.length-1; i >= 0; i--){
            if (tower[i] != null){
                return i; // Retorna o ultimo elemento não nulo;
            }
        }
        return 0; // Retorna 0 se não houver elementos não nulos
    }

    // Retorna o indice do primeiro elemento nulo da lista
    public static int firstNullIndex(Character[] tower){
        for (int i = 0; i < tower.length; i++){
            if (tower[i] == null){
                return i;
            }
        }
        return tower.length-1;
    }

    // Exibe uma torre
    public static void showTowers(Character[][] towers) {
        System.out.println("======== TORRES =========");
        Character[] initials = new Character[]{'R', 'G', 'B'};
        // Pra cada torre na lista de torres
        for (int i = 0; i < towers.length; i++){
            System.out.printf("%c | ",initials[i]);
            Character[] tower = towers[i];
            for (Character element: tower){
                System.out.print(element != null ? element : "-");
            }
            System.out.println();
        }
    }

    // Limpa a tela
    public static void clear () {
        for (int i = 0; i < 50; i++) {
            System.out.println();
        }
    }

    // Pressione enter para continuar
    public static void pressEnter(){
        Scanner entry = new Scanner(System.in);
        System.out.print("Aperte ENTER para continuar...");
        entry.nextLine();
    }

    // Copiar vetor
    public static Character[][] copyTowers(Character[][] towers){
        Character [][] copy = new Character[3][9];
        for (int i = 0; i < towers.length; i++){
            for (int j = 0; j < towers[i].length; j++){
                copy[i][j] = towers[i][j];
            }
        }
        return copy;
    }

    public static void showWinner(Integer p1, Integer p2){
        String result = "EMPATE!!!";
        if (p1 < p2){
            result = "JOGADOR 1 VENCEU!!";
        } else if (p2 < p1){
            result = "JOGADOR 2 VENCEU!!!";
        }
        System.out.printf("""
                ========== RESULTADO =========
                Jogador 1: %d movimentos
                Jogador 2: %d movimentos
                
                %s""", p1, p2, result);
    }
}


