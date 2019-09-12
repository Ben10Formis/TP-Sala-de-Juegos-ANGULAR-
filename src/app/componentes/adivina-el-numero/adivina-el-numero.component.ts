
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  intentos : number;

  jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  arrayResultados : Array<any> = new Array<any>();
 
  constructor() { 
    this.nuevoJuego = new JuegoAdivina("Adivina el Numero",false,this.jugador["mail"]);
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador=0;
    this.intentos = 3;
  }
  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      //this.nuevoJuego.numeroSecreto=0;
      this.arrayResultados.push(this.nuevoJuego);
      localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
      this.nuevoJuego = new JuegoAdivina("Adivina el Numero",false,this.jugador["mail"]);

    }else{
      //Solamente tenes 3 intentos para adivinar el numero!!
      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido";
          this.intentos -= this.contador;
          break;
        case 2:
          mensaje="Nop";
          this.intentos -= this.contador;
          break;
        case 3:
          //mensaje="No es, será la cuarta???";
          mensaje = "Ya agotaste las chances que tenias para ganar!";
          this.intentos -= this.contador;
          this.enviarJuego.emit(this.nuevoJuego);
          this.arrayResultados.push(this.nuevoJuego);
          localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
          this.nuevoJuego = new JuegoAdivina("Adivina el Numero",false,this.jugador["mail"]);
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="El que menos intenta menos lo logra!!!";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  ngOnInit() {
  }

}
