//Ecriture des fonctions de convertion

//Fonction de conversion en base 2
function binaryB(decimal) {
    let binary = "";
    
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    
    return binary;
  }
//Fonction de conversion en base 8
  function octalB(decimal){
    let octal ="";

    while(decimal > 0){
      octal = (decimal % 8) + octal;
      decimal = Math.floor(decimal / 8);
    }

    return octal;
  }
//Fonction de conversion en base 16
  function hexadecimalB(decimal) {
    let hexadecimal = "";

    hexadecimal = decimal.toString(16);
    return hexadecimal;
  }
