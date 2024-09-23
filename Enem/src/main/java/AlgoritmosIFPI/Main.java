package AlgoritmosIFPI;

import AlgoritmosIFPI.entities.School;
import AlgoritmosIFPI.utils.FileUtils;
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<School> schools = FileUtils.loadSchools();
        int choice = 1;
        try (Scanner in = new Scanner(System.in)){
            while (choice != 0) {
                showMenu();
                choice = in.nextInt();
                execute(choice, schools, in);
                pressEnter();
                clearScreen();
            }
        }

    }

    // Pressione enter para continuar
    public static void pressEnter(){
        Scanner entry = new Scanner(System.in);
        System.out.print("Aperte ENTER para continuar...");
        entry.nextLine();
    }


    public static void execute(int choice, ArrayList<School> schools, Scanner in){

        if (choice==0) {
            System.out.println("Saindo...");
        }
        else if (choice == 1) {
            System.out.print("Digite quantas escolas deseja exibir: ");
            int top = in.nextInt();
            for (int i = 0; i < top; i++) {
                System.out.println(schools.get(i).toString());
            }
        }
        else if (choice == 2) {
            System.out.print("Digite quantas escolas deseja exibir: ");
            int topn = in.nextInt();
            in.nextLine();
            System.out.print("Qual a sigla do estado? ");
            String estado = in.nextLine();
            int i = 0;
            while (i < topn) {
                for (School school : schools) {
                    if (school.getUf().equalsIgnoreCase(estado) && i < topn) {
                        System.out.println(school.toString());
                        i++;
                    }
                }
            }
        }
        else if (choice == 3) {
            System.out.print("Digite quantas escolas deseja exibir: ");
            int top = in.nextInt();
            in.nextLine();
            System.out.print("Qual a sigla do estado? ");
            String estado = in.nextLine();
            System.out.print("""
            ------ Redes ------
            Municipal
            Estadual
            Federal
            Privada
            
            Digite a rede que procura: """);
            String rede = in.nextLine();
            int i = 0;
            while (i < top) {
                for (School school : schools) {
                    if (school.getUf().equalsIgnoreCase(estado) && i < top && school.getNet().equalsIgnoreCase(rede)) {
                        System.out.println(school.toString());
                        i++;
                    }
                }
            }
        }
    }

    public static void clearScreen(){
        for (int i = 0; i < 50; i++){
            System.out.println();
        }
    }


    public static void showMenu(){
        System.out.println("""
        ============== ENEM SCHOOLS ==============
        1 - Mostrar as Top N escolas do Brasil
        2 - Mostrar as Top N escolas por Estado
        3 - Mostrar as Top N escolas por Estado e Rede (Publica ou Privada)
        4 - Busca por parte do nome
        
        0 - Sair""");
    }
}