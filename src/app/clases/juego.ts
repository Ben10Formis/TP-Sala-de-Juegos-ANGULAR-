/*export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  public user = JSON.parse(localStorage.getItem("usuario"));
  
  constructor(nombre?: string, gano?: boolean,jugador?:string) {
  /*  if (nombre)
      this.nombre = nombre;
    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
    else
      this.jugador= "natalia natalia";*/

/*    if (nombre)
      this.nombre = nombre;
    if(this.user == null){
     this.jugador = "Invitado@admin.com";
    }
    else{
      this.jugador=this.user.email;
    }
    if (gano)
    this.gano = gano;
  }

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
*/
export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
    else
      this.jugador= "testeo usuario";
  }


  

  public abstract verificar():boolean; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
