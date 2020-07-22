//calculo de masa coorporal 
let Peso = 0;
let Altura =0;

Peso = prompt("Cual es su peso: ");
Altura = prompt("Cual es su altura: ");

let i= calcIMC(Peso, Altura);
var IMC;

function calcIMC(Peso, Altura){
    IMC=Peso/(Math.pow(Altura, 2));
    console.log(Peso, Altura, IMC);
    if(IMC<=15){
         return 1;
        }else if(IMC<=15.9){
            return 2;
            }else if(IMC<=18.4){
                return 3;
                }else if(IMC<=24.9){
                    return 4;
                    }else if(IMC<=29.9){
                        return 5;
                        }else if(IMC<=34.9){
                            return 6;
                                }else if(IMC>34.9){
                                    return 7;
                                  }else{
                                      return 0;
                                  } 
                 
}
      console.log(i);
    if(Peso==0&&Altura==0){
        i=0
    }
    switch (i){
        case 1:
            document.write("Su IMC es de " +IMC+ " Y tiene Delgadez muy Severa");
            break;
        case 2:
            document.write("Su IMC es de " +IMC+ " Y tiene Delgadez Severa");
            break;
        case 3:
            document.write("Su IMC es de " +IMC+ " Y tiene Delgadez");
            break;
        case 4:
            document.write("Su IMC es de " +IMC+ " Y tiene Peso Saludable");
            break;
        case 5:
            document.write("Su IMC es de " +IMC+ " Y tiene Sobrepeso");
            break;
        case 6:
            document.write("Su IMC es de " +IMC+ " Y tiene Obesidad Severa");
            break;
        case 7:
            document.write("Su IMC es de " +IMC+ " Y tiene Obesidad Morbida");
            break;
        case 8:
            document.write("Datos invalidos");
            break;
        default:
            alert("No digito datos");
            break;
    }
            



