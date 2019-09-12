//export class JuegoAgilidad { }
import { Juego } from '../clases/juego';

export class JuegoAgilidad extends Juego {

    primer : number;
    operador : string;
    segundo : number;
    resultado: number;
    numeroIngresado: number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad mental",gano,jugador);        
    }


    public generarOperacion() {
        this.primer = this.numeroAleatorio(1, 10);
        this.segundo = this.numeroAleatorio(1, 10);
        let aleatorio = this.numeroAleatorio(1, 2);
        switch(aleatorio) {
            case 1:
                this.operador = '+';
                this.resultado = this.primer + this.segundo;
                break;
            case 2:
                this.operador = '-';
                this.resultado = this.primer - this.segundo;
                break;
        }
    }

   public numeroAleatorio(min:number, max:number) {
        return Math.round(Math.random() * (max - min) + min);
    }
    
    public verificar() {
        if(this.numeroIngresado == this.resultado)
        this.gano = true
        else
        this.gano = false;
        return this.gano;
    }
}
