/*import { Injectable } from '@angular/core';
import { ArchivosJugadoresService}from './archivos-jugadores.service'
@Injectable()
export class JugadoresService {

  //peticion:any;
  constructor( public miHttp: ArchivosJugadoresService ) {
   // this.peticion = this.miHttp.traerJugadores();
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }


filtrado:any;

  traertodos(ruta : string,filtro: string) 
  {
    return this.miHttp.traerJugadores(ruta).then(data=>{
      console.info("jugadores service",data);

      this.filtrado=data;

     let  ganador: boolean;
      if(filtro=="ganadores")
      {
        ganador= true;
      }
      else
      {
        ganador= false;
      }

      this.filtrado =this.filtrado.filter(
        data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
      )
      .catch(errror=>{console.log("error")
      


    return this.filtrado;
      

    });
  }

}*/
import { ArchivosjugadoresService } from './archivosjugadores.service';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
//mi-http.service
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class JugadoresService {

  userFIlt : any;
  constructor(public http : Http, private archivo : ArchivosjugadoresService) { }

  public filtrar(url: string,filtro : string){
    let modo;
    if(filtro == "gano")
    modo = true;
    if(filtro == "perdio")
    modo = false;
    
    if(filtro == "todos")
    {
      return this.archivo
      .httpGetPromise(url)    
      .then(data => {return data}
      )
      .catch(this.handleError);
    }
    
    return this.archivo
    .httpGetPromise(url)    
    .then(data => {this.userFIlt = data.filter(
      data => data.gano === modo); return this.userFIlt}
    )
    .catch(this.handleError);
  }

  private extraerDatos(resp:Response) 
  {   
         
      return    resp.json() || {}; 
  }
  private handleError(error:Response | any) 
  {
      return error;
  }
}
