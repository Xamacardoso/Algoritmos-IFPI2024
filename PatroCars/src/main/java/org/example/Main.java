package org.example;

import java.io.*;
import java.util.ArrayList;

import org.example.entities.Carmaker;

public class Main {
    public static void main(String[] args) {
        ArrayList<Carmaker> carmakers = loadCarmakers();//new ArrayList<Carmaker>();
        //carmakers.add(new Carmaker("1","Patrocaralhos","Canada",2022));
        showCarmakers(carmakers);
        saveCarmakers(carmakers);
    }

    public static void execute(int choice){
        if (choice == 0){
            System.out.println("Saindo...");
        }
    }

    // Exibe as montadoras de carros
    public static void showCarmakers(ArrayList<Carmaker> carmakers){
        for (Carmaker carmaker : carmakers){
            System.out.println(carmaker.toString());
        }
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
    public static void showMenu(){
        System.out.println("""
        1 - Listar montadoras
        2 - Adicionar montadora
        3 - Remover montadora
        
        0 - Sair""");
    }
}