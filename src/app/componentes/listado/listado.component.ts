/*import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;}
  
  ngOnInit() {
    
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  juegoElegido : string;
   miServicioJuego:JuegoServiceService;
   opcionSeleccionar : boolean;
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;
    this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));  
    this.opcionSeleccionar = true;
  }
  
  ngOnInit() {
    
  }
  verTodos()
  {
    this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
  }

  verGanadores()
  {
    this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));  
    this.listadoParaCompartir = this.listadoParaCompartir.filter(function(valor)
  {
    return valor.gano == true;
  });
  }

  verPerdedores()
  {
    this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));  
    this.listadoParaCompartir = this.listadoParaCompartir.filter(function(valor)
    {
      return valor.gano == false;
    });
  }

  filtrarPorJuego(juego : string)
  {
    if(juego == "0")
      {
        alert("Eliga un juego. Por favor!!");
      }
      else
        {
          this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));  
          this.listadoParaCompartir = this.listadoParaCompartir.filter(function(valor)
          {
            return valor.nombre == juego; 
          });
        }
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }
}
