package AlgoritmosIFPI.entities;

public class School {
    private String name,city,uf,net,permanency,economic;
    private double average, languagesNote, mathNote, sciencesNote, socialsNote, essayNote;

    public School(String name, String city, String uf,
    String net, String permanency, String economic,
    double average, double languagesNote, double mathNote,
    double sciencesNote, double socialsNote, double essayNote){
        this.name = name;
        this.city = city;
        this.uf = uf;
        this.net = net;
        this.permanency = permanency;
        this.economic = economic;
        this.average = average;
        this.languagesNote = languagesNote;
        this.mathNote = mathNote;
        this.sciencesNote = sciencesNote;
        this.socialsNote = socialsNote;
        this.essayNote = essayNote;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getNet() {
        return net;
    }

    public void setNet(String net) {
        this.net = net;
    }

    public String getPermanency() {
        return permanency;
    }

    public void setPermanency(String permanency) {
        this.permanency = permanency;
    }

    public String getEconomic() {
        return economic;
    }

    public void setEconomic(String economic) {
        this.economic = economic;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    public double getLanguagesNote() {
        return languagesNote;
    }

    public void setLanguagesNote(double languagesNote) {
        this.languagesNote = languagesNote;
    }

    public double getMathNote() {
        return mathNote;
    }

    public void setMathNote(double mathNote) {
        this.mathNote = mathNote;
    }

    public double getSciencesNote() {
        return sciencesNote;
    }

    public void setSciencesNote(double sciencesNote) {
        this.sciencesNote = sciencesNote;
    }

    public double getSocialsNote() {
        return socialsNote;
    }

    public void setSocialsNote(double socialsNote) {
        this.socialsNote = socialsNote;
    }

    public double getEssayNote() {
        return essayNote;
    }

    public void setEssayNote(double essayNote) {
        this.essayNote = essayNote;
    }

    @Override
    public String toString() {
        return "School{" +
                "name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", uf='" + uf + '\'' +
                ", net='" + net + '\'' +
                ", permanency='" + permanency + '\'' +
                ", economic='" + economic + '\'' +
                ", average=" + average +
                ", languagesNote=" + languagesNote +
                ", mathNote=" + mathNote +
                ", sciencesNote=" + sciencesNote +
                ", socialsNote=" + socialsNote +
                ", essayNote=" + essayNote +
                '}';
    }
}
