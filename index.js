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

  //Liaison des boutons 
  
  const btnSubmit = document.querySelector("#btn-submit");
  
  btnSubmit.addEventListener("click", function(){
    //Vérifiication !chaine vide
    const intNum = document.querySelector("#in-num");
    
    if(!intNum.value){
      alert("Place enter the number!!");

    }else if(intNum.value < 0){
      alert("Error!! Enter the positive number.");

    } else if( intNum.value > 999999999){
      alert("Enter a lower number 999999999");

    } else{
      let tempNum = parseInt(intNum.value) ;
      let resultNum = document.querySelector(".result");
    
      if (document.querySelector("#binary").checked ) {
        resultNum.textContent = binaryB(tempNum);

      }else if(document.querySelector("#octal").checked) {
        resultNum.textContent = octalB(tempNum);
        
      }else if(document.querySelector("#hexadecimal").checked) {
        resultNum.textContent = hexadecimalB(tempNum);
      }else{
        alert("Please!! Enter the base to convert.");
      }

    }
  })
  //Fonction de calcul de la moyenne 
  