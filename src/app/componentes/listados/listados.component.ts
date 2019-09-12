import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { ArchivosjugadoresService } from '../../servicios/archivosjugadores.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {


  users : any;
  mostrar : boolean = true;
  motrarFilt : boolean = true;
  filtrado : any;
  aux : any;
mostrarSmarTable:boolean;

  private source: LocalDataSource;
  private usuarios:Array<any> = [];
 

  constructor(private archivo : ArchivosjugadoresService, private filtro : JugadoresService) { 
    this.listar();

  this.source = new LocalDataSource();
  this.mostrarSmarTable=true;
  this.archivo.getUsers()
  .subscribe(
    data => this.usuarios = data,
    error => console.error("Error: " + error),
    () => this.source.load(this.usuarios)
  );
  console.log(this.usuarios);
  }

  listar()
  {
    this.archivo.httpGetPromise("usuarios.json")
    .then( data => { this.users = data;  })
    .catch( error => console.error(error) );
  }

  SmarTable(){
   this.mostrarSmarTable=true;
  }
  filtrar(modo : string)
  {
    this.filtro.filtrar("usuarios.json",modo)
    .then(data => { this.filtrado = data;console.log("data"+data);this.aux=JSON.stringify(this.filtrado);console.log("aux"+this.aux)
  
  })
    .catch(error=>console.error(error));
    console.log(this.aux);
  }
  ngOnInit() {
    this.listar();        
  }
  

  filtTrue()
  {
    this.mostrarSmarTable=false;
    this.filtrar("gano"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }
    console.log(this.filtrado);
  }

  filtFalse()
  {
    this.mostrarSmarTable=false;
    this.filtrar("perdio"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }
    console.log(this.filtrado);
  }

  Show()
  {
    this.mostrarSmarTable=false;
    this.filtrar("todos"); 
    
    this.mostrar = true;
    if(this.motrarFilt == false)
    {
      this.motrarFilt = true;
    }  
    else
    {
      this.motrarFilt = false;
    }
    console.log(this.filtrado);
  }

  settings = {
    columns: {
      usuario: {
        title: 'Usuario'
      },
      email: {
        title: 'Email'
      },
      puntaje: {
        title: 'Puntaje'
      },
      fecha: {
        title: 'Fecha'
      },
      gano: {
        title: 'Gano '
      }
    }
  };

  data = this.aux;

}