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
    let check = document.getElementById("tablazat").innerHTML;
    let tablazat = "";
    if(check == ""){
        let tablazat = "<table><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
        for(let i = 0; i<filmAdatai.length; i++){
            tablazat += "<tr><td>"+filmek[i].nev+"</td>";
            tablazat += "<tr><td>"+filmek[i].rendezo+"</td>";
            tablazat += "<tr><td>"+filmek[i].kiadas+"</td></tr>";
        }
        tablazat += "</table>";
        document.getElementById("tablazat").innerHTML = tablazat;
    }
    else {
        document.getElementById("tablazat").innerHTML = "";
    }
}