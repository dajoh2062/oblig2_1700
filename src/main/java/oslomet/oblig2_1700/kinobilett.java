package oslomet.oblig2_1700;

public class kinobilett {
    private String film, fornavn, etternavn, telefonnummer, email;
    private int antall;

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnummer() {
        return telefonnummer;
    }

    public void setTelefonnummer(String telefonnummer) {
        this.telefonnummer = telefonnummer;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public kinobilett(String film, String fornavn, String etternavn, String telefonnummer, String email, int antall) {
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnummer = telefonnummer;
        this.email = email;
        this.antall = antall;
    }

    @Override
    public String toString() {
        return "kinobilett{" +
                "film='" + film + '\'' +
                ", fornavn='" + fornavn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefonnummer='" + telefonnummer + '\'' +
                ", email='" + email + '\'' +
                ", antall=" + antall +
                '}';
    }
    public kinobilett(){}
}
