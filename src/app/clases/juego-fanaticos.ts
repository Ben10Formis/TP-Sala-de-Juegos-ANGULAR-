import  { Juego } from '../clases/juego';

export class Fanaticos extends Juego {
    numImagen : number;
    nombreImagen : any;
    imgMostrar : any;
    respuestaIngresada : string;
    respCorrecta : string;
    respuesta : string;
    
    constructor(nombre?: string, gano?: boolean,jugador?:string){
        super("¿Nexflix ó Youtuber?",gano,jugador);
    }

    public comenzar(){
        this.numImagen = Math.floor( Math.random()*18)+1;
       // alert(this.numImagen);
        switch(this.numImagen){
            case 1 :
            this.nombreImagen = '1';
            this.respCorrecta = "merli";
            break;
            case 2 :
            this.nombreImagen = '2';
            this.respCorrecta = "la casa de papel";
            break;
            case 3 :
            this.nombreImagen = '3';
            this.respCorrecta = "las chicas del cable";
            break;
            case 4 :
            this.nombreImagen = '4';
            this.respCorrecta = "13 reasons why";
            break;
            case 5 :
            this.nombreImagen = '5';
            this.respCorrecta = "luis miguel";
            break;
            case 6 :
            this.nombreImagen = '6';
            this.respCorrecta = "stranger things";
            break;
            case 7 :
            this.nombreImagen = '7';
            this.respCorrecta = "black mirror";
            break;
            case 8 :
            this.nombreImagen = '8';
            this.respCorrecta = "breaking bad";
            break;
            case 9 :
            this.nombreImagen = '9';
            this.respCorrecta = "narcos";
            break;
            case 10 :
            this.nombreImagen = '10';
            this.respCorrecta = "vikingos";
            break;
            case 11 :
            this.nombreImagen = '11';
            this.respCorrecta = "deiGamer";
            break;
            case 12 :
            this.nombreImagen = '12';
            this.respCorrecta = "werevertumorro";
            break;
            case 13 :
            this.nombreImagen = '13';
            this.respCorrecta = "ceci de viaje";
            break;
            case 14 :
            this.nombreImagen = '14';
            this.respCorrecta = "yuya";
            break;
            case 15 :
            this.nombreImagen = '15';
            this.respCorrecta = "hola soy german";
            break;
            case 16 :
            this.nombreImagen = '16';
            this.respCorrecta = "ana vbon";
            break;
            case 17 :
            this.nombreImagen = '17';
            this.respCorrecta = "karely vlogs";
            break;
            case 18 :
            this.nombreImagen = '18';
            this.respCorrecta = "silvia muñoz";
            break;
        }
        this.imgMostrar = this.nombreImagen;
        this.respuesta = this.respCorrecta;
        //this.jugar();
    }

    public mostrarJugada(){
        alert( this.imgMostrar+ " " + this.respCorrecta);
      return this.imgMostrar;
        
    }

    public verificar() {
        //alert(" tu resp " +this.respuestaIngresada + " la correct " +this.respuesta);
        if (this.respuestaIngresada == this.respuesta) {
          this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }

}