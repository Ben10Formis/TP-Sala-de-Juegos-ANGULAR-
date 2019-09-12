/*import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class ArchivosJugadoresService {

  api="http://localhost:8080/jugadoresarchivo/apirestjugadores/";
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    
  }


  public   traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.api+ruta)
    .toPromise()
    .then( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
 

  
  }



}*/
import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ArchivosjugadoresService {

  constructor(private http : Http) { }
  
    public httpGetPromise(url: string){
      return this.http
      .get("./assets/datosadicionales/usuarios.json")
      .toPromise()
      .then(this.extraerDatos)
      .catch(this.handleError);
    }
  
    private extraerDatos(resp:Response) 
    {
        return resp.json() || {};    
    }
    private handleError(error:Response | any) 
    {
        return error;
    }

    

    getUsers() {        
        return this.http.get("./assets/datosadicionales/usuarios.json")        
        .map(response => response.json());        
    }
        
    
    
}

