class Film {
    constructor(nev, rendezo, kiadasiEv) {
      this.nev = nev;
      this.rendezo = rendezo;
      this.kiadasiEv = kiadasiEv;
    }
  }

var filmAdatai = [];

function hozzaadFunction(){
    let nev = document.getElementById("name").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiadas = document.getElementById("kiadas").value;
    filmAdatai.push(nev,rendezo,kiadas);
    console.log(filmAdatai);
    
}
function listazFunction(){
    var tablazat = document.getElementById("tablazatom");
          document.getElementById("3").innerHTML = nev;
}