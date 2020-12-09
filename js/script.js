// funkcija odbrojavanja na stranici dostava.html
function vratiPreostaloVreme(preostaloVreme) {
  const ukupno = Date.parse(preostaloVreme) - Date.parse(new Date());

  const sekunde = Math.floor((ukupno / 1000) % 60);
  const minuti = Math.floor((ukupno / 1000 / 60) % 60);
  const sati = Math.floor((ukupno / (1000 * 60 * 60)) % 24);
  const dani = Math.floor(ukupno / (1000 * 60 * 60 * 24));

  return {
    ukupno,
    dani,
    sati,
    minuti,
    sekunde,
  };
}

function satFunkcija(id, preostaloVreme) {
  const sat = document.getElementById(id);
  const daniSpan = sat.querySelector(".dani");
  const satiSpan = sat.querySelector(".sati");
  const minutiSpan = sat.querySelector(".minuti");
  const sekundeSpan = sat.querySelector(".sekunde");

  function azurirajSat() {
    const t = vratiPreostaloVreme(preostaloVreme);

    daniSpan.innerHTML = t.dani;
    satiSpan.innerHTML = ("0" + t.sati).slice(-2);
    minutiSpan.innerHTML = ("0" + t.minuti).slice(-2);
    sekundeSpan.innerHTML = ("0" + t.sekunde).slice(-2);

    if (t.ukupno <= 0) {
      clearInterval(vremenskiInterval);
    }
  }

  azurirajSat();
  const vremenskiInterval = setInterval(azurirajSat, 1000);
}

const duzinaOdbrojavanja = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
satFunkcija("odbrojavanje", duzinaOdbrojavanja);




//funkcija validacije forme na stranici dostava.html
function validacija(){
  var vrednostImena;

  //validacija obaveznog unosa imena
  vrednostImena = document.forms["forma"]["ime"].value;
  if(vrednostImena==""){
    alert("Obavezan unos imena i prezimena!");
    return false;
  }
//validacija obaveznog unosa mejla
  var vrednostEmaila;
  var formatEmaila =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  vrednostEmaila = document.forms["forma"]["email"].value;

  if(vrednostEmaila==""){
    alert("Obavezan unos emaila.");
    return false;
  }
  else if(document.forms["forma"]["email"].value.match(formatEmaila)){
    //dobro definisan mejl
  }
  else{
    alert("Los format email adrese.");
  }
//validacija obaveznog unosa adrese
  var vrednostAdrese;
  vrednostAdrese = document.forms["forma"]["adresa"].value;

  if(vrednostAdrese==""){
    alert("Obavezan unos adrese!");
    return false;
  }
//validacija bar tri cekirane knedle

var brojac = 0;

if(document.getElementById("knedla1").checked == true){
  alert("cekirano");
  brojac++;
}
if(document.getElementById("knedla2").checked == true){
  brojac++;
}
if(document.getElementById("knedla3").checked == true){
  brojac++;
}
if(document.getElementById("knedla4").checked == true){
  brojac++;
}
if(document.getElementById("knedla5").checked == true){
  brojac++;
}
if(document.getElementById("knedla6").checked == true){
  brojac++;
}
if(document.getElementById("knedla7").checked == true){
  brojac++;
}
if(document.getElementById("knedla8").checked == true){
  brojac++;
}
if(document.getElementById("knedla9").checked == true){
  brojac++;
}
if(document.getElementById("knedla10").checked == true){
  brojac++;
}
if(document.getElementById("knedla11").checked == true){
  brojac++;
}
if(document.getElementById("knedla12").checked == true){
  brojac++;
}
if(document.getElementById("knedla13").checked == true){
  brojac++;
}
if(document.getElementById("knedla14").checked == true){
  brojac++;
}
if(document.getElementById("knedla15").checked == true){
  brojac++;
}if(document.getElementById("knedla16").checked == true){
  brojac++;
}if(document.getElementById("knedla17").checked == true){
  brojac++;
}if(document.getElementById("knedla18").checked == true){
  brojac++;
}if(document.getElementById("knedla19").checked == true){
  brojac++;
}if(document.getElementById("knedla20").checked == true){
  brojac++;
}

  if(brojac<3){
    alert("Morate naručiti barem 3 knedle!");
    return false;
  }

}

//funkcija za hover na tekst na pocetnoj strani

function asideFunction1(){
  document.getElementById("img1").src = "images/slika5.jpg";
  document.getElementById("img2").src = "images/slika6.jpg";
  document.getElementById("img3").src = "images/slika7.jpg";
  document.getElementById("img4").src = "images/slika8.jpg";
}
function asideFunction2(){
  document.getElementById("img1").src = "images/slika1.jpg";
  document.getElementById("img2").src = "images/slika2.jpg";
  document.getElementById("img3").src = "images/slika3.jpg";
  document.getElementById("img4").src = "images/slika4.jpg";
}