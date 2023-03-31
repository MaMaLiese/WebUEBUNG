console.log("Test");

//KOmment
/**
 * Multiline comment
 * 
 * Prozeduren:
 */
//um gewisse Features auszulagern, macht man mit funktion (in Java wär das eine Methode)
//funktion mit drei argumenten
function calcZins() {
   // return k * p * t /36000;//content of function
   let k= document.getElementById("k");
   let p= document.getElementById("p");
   let t = document.getElementById("t");
// comment
}

//funktion aufrufen indem ich eine Variable deklariere
var result = calcZins(200, 2, 360); //var ist globale Variale, man sucht grundsätzlich globale Variablen zu vermeiden
console.log(result);
    
