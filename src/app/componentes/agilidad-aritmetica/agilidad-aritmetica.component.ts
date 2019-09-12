import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  private subscription: Subscription;
  Mensajes:string;
  jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  arrayResultados : Array<any> = new Array<any>();

  ngOnInit() { }

  constructor() {
    this.ocultarVerificar=true;
    this.Tiempo=10; 
    this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false,this.jugador["mail"]);
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
    console.info("Inicio agilidad: estoy en el constructor"); 
  }

  NuevoJuego() {
    this.ocultarVerificar=false; //como inicia el juego necesito que el usuario cheque si gano o no.
    this.nuevoJuego.generarOperacion();
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=15;
      }
    }, 900);
  }
  verificar(){
  this.ocultarVerificar=false;
  clearInterval(this.repetidor);
  if(this.nuevoJuego.verificar()) {
    this.MostarMensaje("Ganaste!",true);
  }
  else {
      this.MostarMensaje("Casi pero nop! Perdiste!",false);
      
  }
  this.ocultarVerificar = true;
  this.Tiempo = 10;
  this.arrayResultados.push(this.nuevoJuego);
  localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
  this.enviarJuego.emit(this.nuevoJuego);
  //Inicio un nuevo juego sin perder la partida
  this.nuevoJuego = new JuegoAgilidad("Agilidad Aritmetica",false,this.jugador["mail"]);
  }  

  MostarMensaje(mensaje:string="fc MostrarMensaje()",gano:boolean=false) {
  this.Mensajes=mensaje;    
  var x = document.getElementById("snackbar");
  if(gano)  {
    x.className = "show Ganador";
  }else{
    x.className = "show Perdedor";
  }
  var modelo=this;
  setTimeout(function(){ 
    x.className = x.className.replace("show", "");
    modelo.ocultarVerificar= true;
    }, 3000);
  console.info("objeto",x); 
  }
}