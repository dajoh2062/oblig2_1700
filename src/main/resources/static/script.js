// liste med biletter //
$(function (){
    visbiletter()
})
function fjernError() {
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("antallError").textContent = "";}



/*nedenfor er funkjsoner som skjekker om hvertinputfelt har riktig format fyllt in. Vet ikke om dette er
* den enkleste måten å gjøre det på men ja */
let fornavnErFeil=true;
$("#fornavn").change(function fornavnError () {
    const fornavn = document.getElementById("fornavn").value;
    const patternFornavn = /^[A-Za-z]+$/;
    if (!patternFornavn.test(fornavn)) {
        document.getElementById("fornavnError").textContent = "Fornavnet er ikke gyldig";
        fornavnErFeil=true;


    }
    else if (patternFornavn.test(fornavn)){
        document.getElementById("fornavnError").textContent = "";
        fornavnErFeil=false;

    }

})
let etternavnErFeil = true;
$("#etternavn").change(function etternavnError() {
    const etternavn = document.getElementById("etternavn").value;
    const patternEtternavn = /^[A-Za-z]+$/;
    if (!patternEtternavn.test(etternavn)) {
        document.getElementById("etternavnError").textContent = "Etternavnet er ikke gyldig";
        etternavnErFeil=true;
    } else if (patternEtternavn.test(etternavn)) {
        document.getElementById("etternavnError").textContent = "";
        etternavnErFeil=false;

    }
})
let telefonErFeil = true;
$("#telefon").change(function telefonError(){
    const telefon = document.getElementById("telefon").value;
    const patternTelefon = /^\d{8}$/;
    if (!patternTelefon.test(telefon)) {
        document.getElementById("telefonError").textContent="Nummeret er ikke gyldig";
        telefonErFeil = true;


    }
    else if (patternTelefon.test(telefon)) {
        document.getElementById("telefonError").textContent = "";
        telefonErFeil = false;

    }
})
let emailErFeil = true;
$("#email").change(function emailError(){
    const email = document.getElementById("email").value;
    const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z.]$/;
    if (!patternEmail.test(email)) {
        document.getElementById("emailError").textContent="Eposten er ikke gyldig";
        emailErFeil = true;

    }
    else if (patternEmail.test(email)){
        document.getElementById("emailError").textContent="";
        emailErFeil = false;

    }


})
let antallErFeil = true;
$("#antall").change(function antallError(){
    const antall = document.getElementById("antall").value;
    if (antall>0 || antall<=15) {

        document.getElementById("antallError").textContent="";
        antallErFeil = false;

    }
    else {

        document.getElementById("antallError").textContent = "Skriv antall biletter mellom 1 og 15";
        antallErFeil = true;
    }
})





/*funksjon som legger bilettene som objekter i et array, skjekker om alle feltene er fylt, og om de er riktig
* tømmer ogsa error beskjeder og feltene hvis det stemmer, og viser bilettene neders i liste*/
$("#kjop").click(function kjopbilett() {
    const film = document.getElementById("velgFilm").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;
    const antall = document.getElementById("antall").value;


    if (!film || !fornavn || !etternavn || !telefon || !email || !antall) {
        alert("Vennligst fyll ut alle feltene");

    }


//skjekker etter error//
    if (fornavnErFeil===false && etternavnErFeil===false && telefonErFeil===false && emailErFeil===false && antallErFeil===false) {
        let bilett = {
            film: film,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnummer: telefon,
            email: email,
            antall: antall
        }
        $.post("/lagreBilett", bilett, function () {
            visbiletter();
            tomfelter();
            fjernError();
        });


    }})


//viser bilettene i en uordnet liste //
function visbiletter() {
    const billetListe = document.getElementById("biletter");
    billetListe.innerHTML = "";

    $.get("/hentBilett", function (biletter){

        for (let indeks = 0; indeks < biletter.length; indeks++) {
            const bilett = biletter[indeks];

            const li = document.createElement("li");
            li.textContent =
                "Billett" +
                (indeks + 1) +
                ": " +
                bilett.film +
                " - " +
                bilett.fornavn +
                " " +
                bilett.etternavn +
                " (" +
                bilett.email +
                ", +47 " +
                bilett.telefonnummer +
                ") antall: " +bilett.antall
            ;
            li.classList.add("list-group-item");
            billetListe.appendChild(li);
        }

    })

}
//Funksjon som gjoer strengene tomme//
function tomfelter() {
    document.getElementById("antall").value = "";
    document.getElementById("velgFilm").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";
}
//tømmer arrayet for biletter//
function slettBiletter() {
    $.get("/slettAlle",function (){
        visbiletter();
    })

}
//fjerner errorbeskjeder når infoen er rikitg//

