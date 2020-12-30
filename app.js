function provera(){

    var korisnicko_ime=document.MojaForma.ime.value;
    var lozinka=document.MojaForma.lozinka.value;
    var email=document.MojaForma.mail.value;
    var telefon=document.MojaForma.telefon.value;
    var Pol=document.MojaForma.Pol.value;
    var Uslovi=document.MojaForma.Uslovi.value;
    

    

    if (korisnicko_ime === "" || korisnicko_ime === null) {
        alert("Niste uneli korisnicko ime!");
        return false;
    }
    else if (lozinka === "" || lozinka === null) {
        alert("Niste uneli lozinku");
        return false;
    }
    else if (email === "" || email === null) {
        alert("Niste uneli email!");
        return false;
    }
    else if (telefon === "" || telefon === null) {
        alert("Niste uneli telefon!");
        return false;
    }
    else if (Pol === "" || Pol === null) {
        alert("Niste uneli pol!");
        return false;
    }
    else if (Uslovi === "" || Uslovi === null) {
        alert("Niste prihvatili uslove!");
        return false;
    }
    else{
        alert("Uspesno ste popunili formu");
        return true;

    }


}