import { Component, OnInit } from '@angular/core';
import { Fanaticos } from '../../clases/juego-fanaticos';

@Component({
  selector: 'app-fanaticos',
  templateUrl: './fanaticos.component.html',
  styleUrls: ['./fanaticos.component.css']
})
export class FanaticosComponent implements OnInit {
  mostrarJuego : boolean;
  nuevoJuego : Fanaticos;
  miImagen : any;
  respuestaIngresada : string;
  ganoperdio : boolean = false;
  msjAcerto : string;
  Mensajes : string;
  ocultarVerificar:boolean;
  next : boolean;

  constructor() {
    this.nuevoJuego = new Fanaticos();//ya puedo mostrar el nombre
    this.mostrarJuego = false;
    console.info("Inicio Fanaticos");
    this.miImagen = '1';
    this.next = true;
  }

  proximo(){
    this.nuevoJuego.comenzar();
    this.miImagen = this.nuevoJuego.imgMostrar;
    this.nuevoJuego.respuesta;
  }

  ComenzarJuego(){
    console.log(this.mostrarJuego); 
    this.nuevoJuego.comenzar();
    this.mostrarJuego = !this.mostrarJuego;
    this.miImagen = this.nuevoJuego.imgMostrar;
    this.nuevoJuego.respuesta;
    //this.miImagen.jugar();
  }

  netflix(){
    this.nuevoJuego.respuestaIngresada="Netflix";
    console.log(this.nuevoJuego.respuestaIngresada);   
    if(this.nuevoJuego.netflix()){
      this.ganoperdio = true;
      this.msjAcerto = "Correcto!";
      this.MostarMensaje("Ganaste!",true);
      console.log(this.msjAcerto);
    }
    else{      
      this.ganoperdio = false;
      this.msjAcerto = "Perdiste!";
      this.MostarMensaje("nop, perdiste!",false);  
      console.log(this.msjAcerto);    
      //this.mostrarJuego = false;
    } 
    this.nuevoJuego.gano = false;  
  }
  youtuber(){
    this.nuevoJuego.respuestaIngresada="Youtuber";
    console.log(this.nuevoJuego.respuestaIngresada); 
    if(this.nuevoJuego.youtuber()){
      this.ganoperdio = true;
      this.msjAcerto = "Correcto!";
      this.MostarMensaje("Ganaste!",true);
      console.log(this.msjAcerto);
    }
    else{      
      this.ganoperdio = false;
      this.msjAcerto = "Perdiste!";
      this.MostarMensaje("nop, perdiste!",false);  
      console.log(this.msjAcerto);    
      //this.mostrarJuego = false;
    } 
    this.nuevoJuego.gano = false;  

  }

  verificar(){
    if(this.nuevoJuego.verificar()){      
      this.ganoperdio = true;
      this.msjAcerto = "Correcto!";
      this.MostarMensaje("Ganaste!",true);
      console.log(this.msjAcerto);
    }
    else{      
      this.ganoperdio = false;
      this.msjAcerto = "Perdiste!";
      this.MostarMensaje("nop, perdiste!",false);  
      console.log(this.msjAcerto);    
      //this.mostrarJuego = false;
    } 
    this.nuevoJuego.gano = false;   
  }
/*  verificar()
  {
    this.contador++;
    this.ocultarVerificar=true;
    if (this.nuevoJuego.verificar()){
      this.MostarMensaje("Sos un Genio!!!",true);
    }else{
      this.mensaje = "Ooops, casi lo lograste!";
      this.MostarMensaje(this.mensaje); 
    }
    console.info("Gano: ",this.nuevoJuego.gano);  
  }  */
  asignarImagen(){
    //llama a la funcion que va a cargar la img desde la clase JuegoQueVes
    this.miImagen.comenzar();//'';//lo que me retorne
  }

  ngOnInit() {
  }

  MostarMensaje(mensaje:string,gano:boolean=false) {
    this.Mensajes = mensaje;    
    var x = document.getElementById("snackbar");
    if(gano)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }

    var modelo = this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   } 
}

