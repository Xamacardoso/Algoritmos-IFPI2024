package org.example.objects;
import com.github.f4b6a3.ulid.UlidCreator;

public class Carmaker {
    // (id: ULID, nome: string, pais: string, ano_fundacao: int)
    private String id;
    private String name;
    private String country;
    private int year;

    public Carmaker (String id, String name, String country, int year){
        this.id = id.length() == 26 ? id : UlidCreator.getUlid().toString();
        this.name = name;
        this.country = country;
        this.year = year;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return name + ": \n" +
        "ID: " + id + "\n" +
        "País: " + country + "\n" +
        "Ano de fundação: " + year + "\n";
    }

    public String infoToString(){
        return id+","+name+","+country+","+year;
    }
}
