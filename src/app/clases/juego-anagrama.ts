import { Juego } from '../clases/juego';

export class JuegoAnagrama extends Juego {
    respuestaIngresada : string;
    respuesta : string;
    palabraOrdenada="";
    palabraDesordenada="";
    palabraIngresada="";

    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super("Anagrama",gano,jugador);
    }

    arrayDePalabras : Array <any >= [
        { ordenada:"marta",desordenada:" matar" },
        { ordenada:"narciso",desordenada:"cornisa" },
        { ordenada:"praga",desordenada:"pagar" },
        { ordenada:"panel",desordenada:"nepal" },
        { ordenada:"teros",desordenada:"terso" },
        { ordenada:"retos",desordenada:"resto" },
        { ordenada:"aries",desordenada:"aires" },
        { ordenada:"bulliciosamente",desordenada:"escabullimiento" },
        { ordenada:"cosa",desordenada:"saco" },
        { ordenada:"materialismo",desordenada:"memorialista" },
        { ordenada:"ecuador",desordenada:"acuerdo" }

    ];

    public asignarPalabra() {       
        let indice;
        indice =Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada=this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada=this.arrayDePalabras[indice]["ordenada"];
    }

    public verificar() {
        if (this.palabraIngresada == this.palabraOrdenada ) 
        {
          this.gano = true;
          this.palabraOrdenada="";
          this.palabraDesordenada="";
          this.palabraIngresada=""; 
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }

}

