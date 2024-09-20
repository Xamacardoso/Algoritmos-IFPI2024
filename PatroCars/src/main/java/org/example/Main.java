package org.example;
import com.github.f4b6a3.ulid.UlidCreator;

public class Main {
    public static void main(String[] args) {
        String ulid = UlidCreator.getUlid().toString();
        System.out.println(ulid);
    }
}