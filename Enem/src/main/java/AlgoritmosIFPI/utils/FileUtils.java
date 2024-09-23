package AlgoritmosIFPI.utils;
import AlgoritmosIFPI.entities.School;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;


public class FileUtils {
    public static ArrayList<School> loadSchools(){
        ArrayList<School> schools = new ArrayList<>();
        String path = "database/enem2014_notas.csv";

        try (BufferedReader br =  new BufferedReader(new FileReader(path))){
            String line = br.readLine(); // header
            line = br.readLine();
            String[] linearr;

            while (line != null){
                line = line.replace(",", "."); // Troca os , por . para nao dar erro de conversao
                linearr = line.split(";");
                School novaEscola = getSchool(linearr);
                schools.add(novaEscola);
                // Atualiza com a proxima linha do arquivo
                line = br.readLine();
            }
        }
        catch (IOException e){
            throw new RuntimeException(e);
        }
        return schools;
    }

    private static School getSchool(String[] linearr) {
        String name = linearr[1];
        String city = linearr[2];
        String uf = linearr[3];
        String net = linearr[4];
        String permanency = linearr[5];
        String economic = linearr[6];
        double average = Double.parseDouble(linearr[7]);
        double languagesNote = Double.parseDouble(linearr[8]);
        double mathNote = Double.parseDouble(linearr[9]);
        double sciencesNote = Double.parseDouble(linearr[10]);
        double socialsNote = Double.parseDouble(linearr[11]);
        double essayNote = Double.parseDouble(linearr[12]);
        School novaEscola = new School(
                name,
                city,
                uf,
                net,
                permanency,
                economic,
                average,
                languagesNote,
                mathNote,
                sciencesNote,
                socialsNote,
                essayNote
        );
        return novaEscola;
    }

}
