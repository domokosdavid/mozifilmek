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
    let kiadasiEv = document.getElementById("kiadas").value;
    let f1 = new Film(nev,rendezo,kiadasiEv);
    filmAdatai.push(f1);
    console.log(filmAdatai);
}

function listazFunction(){
    let check = document.getElementById("tablazatom").innerHTML;
    let tablazat = "";
    if(check == ""){
        let tablazat = "<table><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
            for (let j = 0; j < filmAdatai.length; j++){
                tablazat += "<tr><td>"+filmAdatai[j].nev+"</td>"+"<td>"+filmAdatai[j].rendezo+"</td>"+"<td>"+filmAdatai[j].kiadasiEv+"</td></tr>";
            }
        tablazat +="</table>";
        document.getElementById("tablazatom").innerHTML = tablazat;
    }
    else {
        document.getElementById("tablazatom").innerHTML = "";
    }
}