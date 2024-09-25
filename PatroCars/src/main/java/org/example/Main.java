package org.example;

import java.io.*;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

import org.example.entities.Carmaker;

public class Main {
    public static void main(String[] args) throws IllegalAccessException {
        ArrayList<Carmaker> carmakers = loadCarmakers();
        try (Scanner in = new Scanner(System.in)){
            int choice = 1;
            while (choice != 0) {
                //carmakers.add(new Carmaker("1","Patrocaralhos","Canada",2022));
                showMenu(carmakers);
                System.out.print("Escolha: ");
                choice = in.nextInt();
                execute(choice, in, carmakers);
                pressEnter();
                clearScreen();
            }
            saveCarmakers(carmakers);
        }
    }

    // Limpa a tela do terminal
    public static void clearScreen(){
        for (int i = 0; i < 50; i++){
            System.out.println();
        }
    }

    // Executa uma ação baseada numa escolha
    public static void execute(int choice, Scanner in, ArrayList<Carmaker> carmakers) throws IllegalAccessException {
        // Zera o buffer
        in.nextLine();
        if (choice == 0){
            System.out.println("Saindo...");

        // Mostra todas as montadoras de veículos
        }else if(choice == 1){
            showCarmakers(carmakers, false);

        // Adiciona uma montadora de veículos
        }else if(choice == 2){
            String name, country;
            int year;

            System.out.println("======= ADICIONANDO MONTADORA ========");
            System.out.print("Nome: ");
            name = in.nextLine();
            System.out.print("País: ");
            country = in.nextLine();
            System.out.print("Ano de Fundação: ");
            year = in.nextInt();
            carmakers.add(new Carmaker("",name,country,year));
            System.out.println("Montadora adicionada ;)");

        // Remove uma montadora de veículos
        }else if(choice == 3){
            showCarmakers(carmakers, true);
            System.out.print("Insira a posição da montadora que deseja REMOVER: ");
            int removeIndex = in.nextInt();
            carmakers.remove(removeIndex-1);
            in.nextLine();
            System.out.println("Montadora removida ;)");

        }else if (choice == 4){
            showCarmakers(carmakers, true);
            System.out.print("Insira a posição da montadora que deseja MODIFICAR: ");
            int modifyIndex = in.nextInt();
            modifyAttribute(carmakers.get(modifyIndex-1));
            in.nextLine();

        }else if (choice == 5) {
            //showSortedCarmakers(carmakers);
        } else if (choice == 6) {
            saveCarmakers(carmakers);
            System.out.println("Montadoras salvas em arquivo ;)");
        }
    }

    // Exibe as montadoras de carros
    public static void showCarmakers(ArrayList<Carmaker> carmakers, boolean indexed){
        for (int i = 0; i<carmakers.size(); i++){
            if (indexed){System.out.printf("========= MONTADORA %d =========\n", (i + 1));}
            System.out.println(carmakers.get(i).toString());
        }
    }

    // Exibe as montadoras de forma criterizada
    public static void showSortedCarmakers(ArrayList<Object> carmakers){
        Scanner in = new Scanner(System.in);
        Object obj = carmakers.get(0);
        Field[] fields = obj.getClass().getDeclaredFields();
        showAttributes(obj, fields);
        //System.out.print("Escolha: ");
        fields[0].setAccessible(true);

        // TODO: Acessar um atributo pra poder usar de filtro e fazer o reversed.

    }

    // Salva as montadoras de carros num arquivo .csv
    public static void saveCarmakers(ArrayList<Carmaker> carmakers){
        String path = "database/carmakers.csv";
        try (PrintWriter writer = new PrintWriter(new FileWriter(path))) {
            // Cabeçalho do CSV
            writer.println("id,name,country,year");

            // Dados do CSV
            for (Carmaker carmaker : carmakers) {
                writer.println(carmaker.infoToString());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    // Carrega as montadoras de carros a partir de um arquivo .csv
    public static ArrayList<Carmaker> loadCarmakers(){
        ArrayList<Carmaker> carmakers = new ArrayList<Carmaker>();
        // Caminho da base de dados que fica salvo os carros
        String path = "database/carmakers.csv";

        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            // Header
            String line = br.readLine();
            line = br.readLine();

            String[] linearr;
            // Enquanto ainda houver linhas no arquivo
            while (line != null){
                // Separe a linha em uma String[]
                linearr = line.split(",");
                // Atributos do carro
                String id = linearr[0]; // id
                String name = linearr[1]; // nome
                String country = linearr[2]; // pais
                int year = Integer.parseInt(linearr[3]); // ano de lancamento
                carmakers.add(new Carmaker(id,name,country,year));

                // Atualiza line com a próxima linha do arquivo
                line = br.readLine();
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return carmakers;
    }

    // Exibe o menu
    public static void showMenu(ArrayList<?> list){
        System.out.printf("""
        ======== PATROCARS ========
        %d montadoras disponíveis
        
        1 - Listar montadoras
        2 - Adicionar montadora
        3 - Remover montadora
        4 - Modificar montadora
        5 - Filtrar montadoras
        6 - Salvar montadoras
        
        0 - Sair\n\n""", list.size());
    }

    // Espera o usuário apertar enter para continuar
    public static void pressEnter(){
        Scanner entry = new Scanner(System.in);
        System.out.print("Pressione ENTER para continuar...");
        entry.nextLine();
    }

    public static void showAttributes(Object obj, Field[] fields){
        System.out.println("Atributos para filtrar: ");
        for (int i = 0; i < fields.length ; i++) {
            fields[i].setAccessible(true);
            System.out.println( i+1 + " - " + fields[i].getName());
        }
    }

    public static void modifyAttribute(Object obj) throws IllegalAccessException {
        // Pega os campos com os atributos do objeto
        Field[] fields = obj.getClass().getDeclaredFields();
        Scanner in = new Scanner(System.in);
        System.out.println("Atributos disponíveis para modificar: ");

        // Mostra o nome do campo do atributo pra cada atributo
        for (int i = 0; i < fields.length; i++){
            fields[i].setAccessible(true); // Permite eu acessar o atributo sem dar erro de acesso ilegal
            try { // Tenta acessar cada atributo e seu valor e o exibe
                System.out.println(i + 1 + " - " + fields[i].getName() + " = " + fields[i].get(obj));
            }catch (IllegalAccessException e){
                System.out.print("Erro: \n" + e);
            }
        }

        // Pede pro usuario qual atributo modificar
        System.out.print("Digite o atributo que quer modificar: ");
        int modifyChoice = in.nextInt();

        Field field = fields[modifyChoice-1]; // Pega o campo da modificação
        field.setAccessible(true); // Permite que eu acesse o setter do atributo do objeto sem erros
        Class<?> type = field.getType(); // Pega o tipo do atributo do objeto
        System.out.print("Novo valor para o atributo " + field.getName() + ": ");

        if (type == String.class){
            String newVal = in.next();
            field.set(obj, newVal);

        }else if(type == int.class){
            int newVal = in.nextInt();
            field.set(obj, newVal);

        }
        System.out.println("Atributo modificado ;)");


        //System.out.println(Arrays.toString(fields));

    }
}