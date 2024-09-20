package org.example;
import com.github.f4b6a3.ulid.UlidCreator;
import java.util.ArrayList;
import java.util.Arrays;

import org.example.objects.Carmaker;

public class Main {
    public static void main(String[] args) {
        ArrayList<Carmaker> carmakers = new ArrayList<Carmaker>();
        carmakers.add(new Carmaker("Fiat", "Alemanha", 2024));
        carmakers.add(new Carmaker("BYD", "Canadá", 2012));
        for (Carmaker carmaker: carmakers){
            System.out.println(carmaker.toString());
        }
    }

    public static void showCarmakers(Carmaker[] carmakers){
        for (Carmaker carmaker : carmakers){
            System.out.println(carmaker.toString());
        }
    }
}