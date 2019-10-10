webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    -ms-flex: 1 1 auto;\r\n        flex: 1 1 auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n<!--<mat-toolbar color=\"primary\">      \n        <mat-toolbar-row>\n          <span>Third Line</span>\n          <span class=\"example-spacer\"></span>\n          <mat-icon class=\"example-icon\">favorite</mat-icon>\n          <mat-icon class=\"example-icon\">delete</mat-icon>\n        </mat-toolbar-row>\n      </mat-toolbar>-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__ = __webpack_require__("../../../../../src/app/componentes/listados/listados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__ = __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_input_jugadores_input_jugadores_component__ = __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_sexo_pipe__ = __webpack_require__("../../../../../src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_fanaticos_fanaticos_component__ = __webpack_require__("../../../../../src/app/componentes/fanaticos/fanaticos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__material__ = __webpack_require__("../../../../../src/app/material.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




 // ArchivosjugadoresService








// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/

















//https://material.angular.io/guide/getting-started
 //animaciones integradas

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_listados_listados_component__["a" /* ListadosComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_cabecera_cabecera_component__["a" /* CabeceraComponent */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__componentes_input_jugadores_input_jugadores_component__["a" /* InputJugadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pipes_sexo_pipe__["a" /* SexoPipe */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_35__componentes_fanaticos_fanaticos_component__["a" /* FanaticosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_18__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_36_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_31__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
            }),
            // NgbModule.forRoot(MiRuteo),
            // importo el ruteo
            // RouterModule.forRoot(MiRuteo),
            __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_38__material__["a" /* MaterialModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__servicios_juego_service_service__["a" /* JuegoServiceService */], __WEBPACK_IMPORTED_MODULE_8__servicios_mi_http_mi_http_service__["a" /* MiHttpService */], __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__["a" /* PaisesService */], __WEBPACK_IMPORTED_MODULE_11__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */], __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__["a" /* JugadoresService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//export class JuegoAgilidad { }

var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        return _super.call(this, "Agilidad mental", gano, jugador) || this;
    }
    JuegoAgilidad.prototype.generarOperacion = function () {
        this.primer = this.numeroAleatorio(1, 10);
        this.segundo = this.numeroAleatorio(1, 10);
        var aleatorio = this.numeroAleatorio(1, 2);
        switch (aleatorio) {
            case 1:
                this.operador = '+';
                this.resultado = this.primer + this.segundo;
                break;
            case 2:
                this.operador = '-';
                this.resultado = this.primer - this.segundo;
                break;
        }
    };
    JuegoAgilidad.prototype.numeroAleatorio = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    JuegoAgilidad.prototype.verificar = function () {
        if (this.numeroIngresado == this.resultado)
            this.gano = true;
        else
            this.gano = false;
        return this.gano;
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, "Anagrama", gano, jugador) || this;
        _this.palabraOrdenada = "";
        _this.palabraDesordenada = "";
        _this.palabraIngresada = "";
        _this.arrayDePalabras = [
            { ordenada: "marta", desordenada: " matar" },
            { ordenada: "narciso", desordenada: "cornisa" },
            { ordenada: "praga", desordenada: "pagar" },
            { ordenada: "panel", desordenada: "nepal" },
            { ordenada: "teros", desordenada: "terso" },
            { ordenada: "retos", desordenada: "resto" },
            { ordenada: "aries", desordenada: "aires" },
            { ordenada: "bulliciosamente", desordenada: "escabullimiento" },
            { ordenada: "cosa", desordenada: "saco" },
            { ordenada: "materialismo", desordenada: "memorialista" },
            { ordenada: "ecuador", desordenada: "acuerdo" }
        ];
        return _this;
    }
    JuegoAnagrama.prototype.asignarPalabra = function () {
        var indice;
        indice = Math.floor(Math.random() * this.arrayDePalabras.length);
        console.log(this.arrayDePalabras[indice]["ordenada"]);
        this.palabraDesordenada = this.arrayDePalabras[indice]["desordenada"];
        this.palabraOrdenada = this.arrayDePalabras[indice]["ordenada"];
    };
    JuegoAnagrama.prototype.verificar = function () {
        if (this.palabraIngresada == this.palabraOrdenada) {
            this.gano = true;
            this.palabraOrdenada = "";
            this.palabraDesordenada = "";
            this.palabraIngresada = "";
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-fanaticos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fanaticos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Fanaticos = (function (_super) {
    __extends(Fanaticos, _super);
    function Fanaticos(nombre, gano, jugador) {
        return _super.call(this, "¿Nexflix ó Youtuber?", gano, jugador) || this;
    }
    Fanaticos.prototype.comenzar = function () {
        this.numImagen = Math.floor(Math.random() * 18) + 1;
        // alert(this.numImagen);
        switch (this.numImagen) {
            case 1:
                this.nombreImagen = '1';
                this.respCorrecta = "merli";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 2:
                this.nombreImagen = '2';
                this.respCorrecta = "la casa de papel";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 3:
                this.nombreImagen = '3';
                this.respCorrecta = "las chicas del cable";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 4:
                this.nombreImagen = '4';
                this.respCorrecta = "13 reasons why";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 5:
                this.nombreImagen = '5';
                this.respCorrecta = "luis miguel";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 6:
                this.nombreImagen = '6';
                this.respCorrecta = "stranger things";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 7:
                this.nombreImagen = '7';
                this.respCorrecta = "black mirror";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 8:
                this.nombreImagen = '8';
                this.respCorrecta = "breaking bad";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 9:
                this.nombreImagen = '9';
                this.respCorrecta = "narcos";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 10:
                this.nombreImagen = '10';
                this.respCorrecta = "vikingos";
                this.tipoNetflixYoutuberCorrecta = "Netflix";
                break;
            case 11:
                this.nombreImagen = '11';
                this.respCorrecta = "deiGamer";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 12:
                this.nombreImagen = '12';
                this.respCorrecta = "werevertumorro";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 13:
                this.nombreImagen = '13';
                this.respCorrecta = "ceci de viaje";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 14:
                this.nombreImagen = '14';
                this.respCorrecta = "yuya";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 15:
                this.nombreImagen = '15';
                this.respCorrecta = "hola soy german";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 16:
                this.nombreImagen = '16';
                this.respCorrecta = "ana vbon";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 17:
                this.nombreImagen = '17';
                this.respCorrecta = "karely vlogs";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
            case 18:
                this.nombreImagen = '18';
                this.respCorrecta = "silvia muñoz";
                this.tipoNetflixYoutuberCorrecta = "Youtuber";
                break;
        }
        this.imgMostrar = this.nombreImagen;
        this.respuesta = this.respCorrecta;
        this.tipoNetflixYoutuber = this.tipoNetflixYoutuberCorrecta;
        //this.jugar();
    };
    Fanaticos.prototype.mostrarJugada = function () {
        alert(this.imgMostrar + " " + this.respCorrecta);
        return this.imgMostrar;
    };
    Fanaticos.prototype.verificar = function () {
        //alert(" tu resp " +this.respuestaIngresada + " la correct " +this.respuesta);
        if (this.respuestaIngresada == this.respuesta) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    Fanaticos.prototype.netflix = function () {
        //alert(" tu resp " +this.respuestaIngresada + " la correct " +this.tipoNetflixYoutuber);
        if (this.respuestaIngresada == this.tipoNetflixYoutuber) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    Fanaticos.prototype.youtuber = function () {
        //alert(" tu resp " +this.respuestaIngresada + " la correct " +this.tipoNetflixYoutuber);
        if (this.respuestaIngresada == this.tipoNetflixYoutuber) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    return Fanaticos;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-fanaticos.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoPiedraPapelTijera = (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, "Piedra Papel o Tijera", gano, jugador) || this;
        _this.ContadorDeEmpates = 0;
        _this.ContadorDeGanadas = 0;
        _this.ContadorDePerdidas = 0;
        _this.numeroSecreto = null;
        _this.comenzar();
        return _this;
    }
    JuegoPiedraPapelTijera.prototype.comenzar = function () {
        this.numeroSecreto = Math.floor(Math.random() * 3) + 1; //RANDOM entre 1 y 3
        // alert(this.numeroSecreto+ ' secreto'); 
        switch (this.numeroSecreto) {
            case 1:
                // alert(this.numeroSecreto);
                this.eleccionMaquina = 'piedra';
                break;
            case 2:
                this.eleccionMaquina = 'papel';
                break;
            case 3:
                this.eleccionMaquina = 'tijera';
                break;
        }
    }; //end funcion comenzar
    JuegoPiedraPapelTijera.prototype.piedra = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "piedra ";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate. ";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "tijera") {
            this.mensaje = " Ganaste! ";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " La Máquina ganó ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion piedra
    JuegoPiedraPapelTijera.prototype.papel = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "papel";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "piedra") {
            this.mensaje = " Ganaste! ";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " La Máquina ganó ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion  papel
    JuegoPiedraPapelTijera.prototype.tijera = function () {
        this.msjEleccionMaquina = "La máquina eligió: " + this.eleccionMaquina;
        this.eleccionHumano = "tijera";
        if (this.eleccionHumano == this.eleccionMaquina) {
            this.mensaje = " Empate.";
            this.ContadorDeEmpates++;
        }
        else if (this.eleccionMaquina == "papel") {
            this.mensaje = " Ganaste! ";
            this.ContadorDeGanadas++;
        }
        else {
            this.mensaje = " La Máquina ganó ";
            this.ContadorDePerdidas++;
        }
        this.comenzar();
        return this.msjEleccionMaquina;
    }; //end funcion tijera
    JuegoPiedraPapelTijera.prototype.mostarResultado = function () {
        return this.mensajeResultado = 'Ganados: ' + this.ContadorDeGanadas + '\ Empatados: ' + this.ContadorDeEmpates +
            ' \n Perdidos: ' + this.ContadorDePerdidas;
    };
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        if (this.gano) {
            alert("gano");
            return true;
        }
        else {
            alert("perdió");
            return false;
        }
    };
    JuegoPiedraPapelTijera.prototype.resetear = function () {
        this.eleccionMaquina = "";
        this.eleccionHumano = "";
        this.ContadorDeEmpates = 0;
        this.ContadorDeGanadas = 0;
        this.ContadorDePerdidas = 0;
        this.numeroSecreto = null;
        this.mensaje = "";
        this.msjEleccionMaquina = "";
        this.mensajeResultado = "";
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
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
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "testeo usuario";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n#snackbar {\n    visibility: hidden;\n    min-width: 250px;\n    margin-left: -125px;\n   \n    color: #fff;\n    text-align: center;\n    border-radius: 2px;\n    padding: 16px;\n    position: fixed;\n    z-index: 1;\n    left: 50%;\n    bottom: 30px;\n    font-size: 17px;\n}\n#snackbar.Ganador {\n    background-color: #059F2F;\n}\n#snackbar.Perdedor {\n    background-color: #FF0000;\n}\n#snackbar.show {\n    visibility: visible;\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n    from {bottom: 0; opacity: 0;}\n    to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadeout {\n    from {bottom: 30px; opacity: 1;}\n    to {bottom: 0; opacity: 0;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--app-menu></app-menu-->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div style=\"text-align:center\">\n  <h1>\n    {{nuevoJuego.nombre}}!\n  </h1>\n </div>\n<h2></h2>\n<form name=\"juego\">\n\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\n \n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n \n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n \n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n\n\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
        this.arrayResultados = new Array();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Adivina el Numero", false, this.jugador["mail"]);
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
        this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
        this.intentos = 3;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            //this.nuevoJuego.numeroSecreto=0;
            this.arrayResultados.push(this.nuevoJuego);
            localStorage.setItem("Resultados", JSON.stringify(this.arrayResultados));
            this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Adivina el Numero", false, this.jugador["mail"]);
        }
        else {
            //Solamente tenes 3 intentos para adivinar el numero!!
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido";
                    this.intentos -= this.contador;
                    break;
                case 2:
                    mensaje = "Nop";
                    this.intentos -= this.contador;
                    break;
                case 3:
                    //mensaje="No es, será la cuarta???";
                    mensaje = "Ya agotaste las chances que tenias para ganar!";
                    this.intentos -= this.contador;
                    this.enviarJuego.emit(this.nuevoJuego);
                    this.arrayResultados.push(this.nuevoJuego);
                    localStorage.setItem("Resultados", JSON.stringify(this.arrayResultados));
                    this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Adivina el Numero", false, this.jugador["mail"]);
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "El que menos intenta menos lo logra!!!";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    return AdivinaElNumeroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \n<h1> listado </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () { };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        //console.info("en app",this.listadoParaCompartir);
    };
    return AdivinaMasListadoComponent;
}());
AdivinaMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-adivina-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdivinaMasListadoComponent);

//# sourceMappingURL=adivina-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".estilosContainer{\r\n    background-color: rgb(245, 12, 129);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    background-size: cover;\r\n    margin:0 auto;\r\n    padding:5%;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 20px 20px;\r\n    margin: 9px 0;\r\n    display: inline-block;\r\n    border: 1px solid rgb(59, 21, 129);\r\n    box-sizing: border-box;\r\n}\r\n\r\nform {\r\n    background-color: grey;\r\n    text-align: center;\r\n    border: 2px solid wheat;\r\n    padding:0px;\r\n    margin: 0 auto;\r\n    background-position: center;\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgb(224, 192, 9);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<!--app-menu></app-menu-->\n<!-- index.html -->\n<div class=\"container estilosContainer\">\n  \n<h1>{{nuevoJuego.nombre}}</h1>\n<form name=\"juego\">\n<ul>\n   <li>\n   Primer número: <input [(ngModel)]=\"nuevoJuego.primer\" placeholder=\"Primer número\" name=\"primer\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n  \n  </li>\n  <li>\n   Operador: <input [(ngModel)]=\"nuevoJuego.operador\" placeholder=\"Operador\" name=\"op\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.segundo\" placeholder=\"Segundo número\" name=\"segundo\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\n    \n  </li>\n  <li>\n    Ingrese la respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese número\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n     \n   </li>\n  <li>\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar en {{Tiempo}} </button></h2>\n  </li>\n  <li>\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo juego</button></h2>\n  </li>\n  <li *ngIf=\"nuevoJuego.primer != null\">\n       \n    <h2 [hidden]=\"ocultarVerificar\"><p> <i class=\"fa fa-spinner fa-spin\"></i> Esperando numero...</p></h2>\n   <!-- <h2 [hidden]=\"ocultarVerificar\"><p> <mat-spinner>.</mat-spinner><br />    Esperando número...</p></h2>-->\n\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\n  </li>\n\n</ul>\n</form>\n<div id=\"snackbar\">{{Mensajes}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.jugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
        this.arrayResultados = new Array();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]("Agilidad Aritmetica", false, this.jugador["mail"]);
        this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
        console.info("Inicio agilidad: estoy en el constructor");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () { };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false; //como inicia el juego necesito que el usuario cheque si gano o no.
        this.nuevoJuego.generarOperacion();
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 15;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Ganaste!", true);
        }
        else {
            this.MostarMensaje("Casi pero nop! Perdiste!", false);
        }
        this.ocultarVerificar = true;
        this.Tiempo = 10;
        this.arrayResultados.push(this.nuevoJuego);
        localStorage.setItem("Resultados", JSON.stringify(this.arrayResultados));
        this.enviarJuego.emit(this.nuevoJuego);
        //Inicio un nuevo juego sin perder la partida
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]("Agilidad Aritmetica", false, this.jugador["mail"]);
    };
    AgilidadAritmeticaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (mensaje === void 0) { mensaje = "fc MostrarMensaje()"; }
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = true;
        }, 3000);
        console.info("objeto", x);
    };
    return AgilidadAritmeticaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \n<h1> Listado de Resultados </h1>\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = (function () {
    function AgilidadMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    return AgilidadMasListadoComponent;
}());
AgilidadMasListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-agilidad-mas-listado',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AgilidadMasListadoComponent);

//# sourceMappingURL=agilidad-mas-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nform {\r\n    /*border: 10px solid rgb(243, 15, 156);*/\r\n    padding: 10px;\r\n    background:rgb(233, 28, 165);\r\n}\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(17, 215, 230, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(255, 0, 106);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center\">    \n    <div class=\"row content\">\n      <div class=\"col-sm-2 sidenav\">\n      </div>\n      <div class=\"col-sm-8 text-left\"> \n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n        <div style=\"text-align:center\">\n          <h1>\n            {{nuevoJuego.nombre}}\n          </h1>\n         </div>\n        <h2></h2>\n        <form name=\"juego\" >\n          <div class=\"row\">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-7\">\n                <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n                \n                <p> </p> \n                  <h1>Palabra desordenada:  </h1>\n                  <h2> {{nuevoJuego.palabraDesordenada}} </h2> \n                  <br /> <input [(ngModel)]=\"nuevoJuego.palabraIngresada\" placeholder=\"ingrese la palabra ordenada\" name=\"palabraOrdenadaa\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n              \n                  <!-- <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.esperando!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>    -->        \n                  <h2><button *ngIf=\"ocultarComenzar\" (click)=\"generarPalabra()\"  class=\"btn btn-info btn-lg\">Comenzar</button></h2> \n\n                  <!---->\n                  <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\n                  \n                     <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\n                  \n                  <!--<h2><p *ngIf=\"!ocultarVerificar\" ><mat-spinner>.</mat-spinner>Esperando que ingrese una palabra</p></h2>-->\n                  <h2><p *ngIf=\"!ocultarVerificar\" ><p> <i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese una palabra</p></h2>\n            </div>\n            <div class=\"col-sm-3\"></div>\n          </div>\n\n        </form>\n        <div id=\"snackbar\">{{Mensajes}}</div> \n      <div class=\"col-sm-2 sidenav\">        \n      </div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnagramaComponent = (function () {
    function AnagramaComponent() {
        this.ocultarComenzar = true;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
        this.ocultarVerificar = true;
    }
    AnagramaComponent.prototype.generarPalabra = function () {
        this.nuevoJuego.asignarPalabra();
        this.contador = 0;
        this.ocultarVerificar = false;
        this.nuevoJuego.gano = false;
        this.Mensajes = "";
        this.ocultarComenzar = false;
    };
    AnagramaComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.MostarMensaje("Sos un Genio!!!", true);
        }
        else {
            this.mensaje = "nop. Perdiste";
            this.MostarMensaje(this.mensaje);
            this.nuevoJuego.palabraIngresada = "";
            this.nuevoJuego.palabraDesordenada = "";
        }
        console.info("Gano: ", this.nuevoJuego.gano);
        this.ocultarComenzar = true;
    };
    AnagramaComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            //modelo.ocultarVerificar=false;
        }, 3000);
        console.info("objeto", x);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnagramaComponent);

//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel\n{\n    height: 200px;\n    background-image: url(\"/saladejuegoRomi/src/assets/imagenes/cabecera.png\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n\n.hero-text {\ntext-align: center;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\ncolor: #3E06B0;\n}\n\n.hero-text a {\nborder: none;\noutline: 0;\ndisplay: inline-block;\npadding: 10px 25px;\ncolor: black;\nbackground-color: #ddd;\ntext-align: center;\ncursor: pointer;\n}\n\n.hero-text a:hover {\nbackground-color: #555;\ncolor: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"hero-text\">\n      <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n      <p>Romina Ibarra</p>\n      <a href=\"https://github.com/ben10formis\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n      <a  routerLink=\"/QuienSoy\" >Quien Soy? <i class=\"fa fa-user\"></i></a>\n  </div>\n  <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user\"></span>Registrarse</a></li>\n          <li><a  routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/cabecera/cabecera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabeceraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    return CabeceraComponent;
}());
CabeceraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cabecera',
        template: __webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/cabecera/cabecera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CabeceraComponent);

//# sourceMappingURL=cabecera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-default\">\n    <div class=\"hero-text\">\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\n        <p>Romina Ibarra</p>\n        <a href=\"https://github.com/ben10formis\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\n          </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/fanaticos/fanaticos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.color-fondo{\r\n    background-color:#ffff;\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n#snackbar.Ganador {\r\n    background-color: rgba(5, 70, 24, 0.973);\r\n}\r\n#snackbar.Perdedor {\r\n    background-color: rgb(243, 12, 12);\r\n}\r\n#snackbar.show {\r\n    visibility: visible;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Gloria Hallelujah', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/fanaticos/fanaticos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p> fanaticos works! </p>-->\n\n<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \n<div class=\"container-fluid text-center\">    \n  <div class=\"row content\">\n    <div class=\"col-sm-1 sidenav\">\n    </div>\n    <div class=\"col-sm-10 text-left\"> \n      <div class=\"content\">\n        <div class=\"well color-fondo\">\n          <div style=\"text-align:center\">\n            <h1 class=\"fuente\">\n              {{nuevoJuego.nombre}}\n            </h1>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4\" style=\"text-align:center\"> \n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"ComenzarJuego()\" >{{ mostrarJuego ? 'Nueva partida' : '   Empezar   '}}</button><br />\n                <br />\n                <div *ngIf=\"mostrarJuego\"  class=\"well\">\n                    <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"proximo()\"  >Next</button><br />\n                    <br />\n                    <div class=\"row margen-izq\">  \n                      <div class=\"col-md-12\">\n                        <img alt='Icono Piedra' src=\"./assets/imagenes/{{miImagen}}.jpg\"><br /><br /><br />\n                        <!--<p style=\"text-align:left\">\n                            Respuesta: <input [(ngModel)]=\"nuevoJuego.respuestaIngresada\" placeholder=\" Ingrese respuesta\" name=\"respuestaIngresada\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\n                        </p>-->\n                      </div>\n                    </div>\n                    <!--<button type=\"button\" mat-raised-button color=\"accent\" (click)=\"verificar()\" >Verificar</button>-->\n                    <button type=\"button\" mat-raised-button color=\"accent\" (click)=\"netflix()\" >Netflix</button>\n                    <button type=\"button\" mat-raised-button color=\"accent\" (click)=\"youtuber()\" >YouTuber</button>\n   \n                </div>\n                <br />\n                 \n              <!-- <h1 [hidden]=\"!this.nuevoJuego.gano\" style=\"text-align:center\">Ganaste! </h1>\n              <h1 [hidden]=\"!this.perdio\">Perdiste!</h1> -->\n            </div>\n            <div class=\"col-sm-3\"></div>\n          </div> \n          <div id=\"snackbar\">{{Mensajes}}</div> \n      \n        </div>\n      </div>\n    <div class=\"col-sm-2 sidenav\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/fanaticos/fanaticos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FanaticosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_fanaticos__ = __webpack_require__("../../../../../src/app/clases/juego-fanaticos.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FanaticosComponent = (function () {
    function FanaticosComponent() {
        this.ganoperdio = false;
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_fanaticos__["a" /* Fanaticos */](); //ya puedo mostrar el nombre
        this.mostrarJuego = false;
        console.info("Inicio Fanaticos");
        this.miImagen = '1';
        this.next = true;
    }
    FanaticosComponent.prototype.proximo = function () {
        this.nuevoJuego.comenzar();
        this.miImagen = this.nuevoJuego.imgMostrar;
        this.nuevoJuego.respuesta;
    };
    FanaticosComponent.prototype.ComenzarJuego = function () {
        console.log(this.mostrarJuego);
        this.nuevoJuego.comenzar();
        this.mostrarJuego = !this.mostrarJuego;
        this.miImagen = this.nuevoJuego.imgMostrar;
        this.nuevoJuego.respuesta;
        //this.miImagen.jugar();
    };
    FanaticosComponent.prototype.netflix = function () {
        this.nuevoJuego.respuestaIngresada = "Netflix";
        console.log(this.nuevoJuego.respuestaIngresada);
        if (this.nuevoJuego.netflix()) {
            this.ganoperdio = true;
            this.msjAcerto = "Correcto!";
            this.MostarMensaje("Ganaste!", true);
            console.log(this.msjAcerto);
        }
        else {
            this.ganoperdio = false;
            this.msjAcerto = "Perdiste!";
            this.MostarMensaje("nop, perdiste!", false);
            console.log(this.msjAcerto);
            //this.mostrarJuego = false;
        }
        this.nuevoJuego.gano = false;
    };
    FanaticosComponent.prototype.youtuber = function () {
        this.nuevoJuego.respuestaIngresada = "Youtuber";
        console.log(this.nuevoJuego.respuestaIngresada);
        if (this.nuevoJuego.youtuber()) {
            this.ganoperdio = true;
            this.msjAcerto = "Correcto!";
            this.MostarMensaje("Ganaste!", true);
            console.log(this.msjAcerto);
        }
        else {
            this.ganoperdio = false;
            this.msjAcerto = "Perdiste!";
            this.MostarMensaje("nop, perdiste!", false);
            console.log(this.msjAcerto);
            //this.mostrarJuego = false;
        }
        this.nuevoJuego.gano = false;
    };
    FanaticosComponent.prototype.verificar = function () {
        if (this.nuevoJuego.verificar()) {
            this.ganoperdio = true;
            this.msjAcerto = "Correcto!";
            this.MostarMensaje("Ganaste!", true);
            console.log(this.msjAcerto);
        }
        else {
            this.ganoperdio = false;
            this.msjAcerto = "Perdiste!";
            this.MostarMensaje("nop, perdiste!", false);
            console.log(this.msjAcerto);
            //this.mostrarJuego = false;
        }
        this.nuevoJuego.gano = false;
    };
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
    FanaticosComponent.prototype.asignarImagen = function () {
        //llama a la funcion que va a cargar la img desde la clase JuegoQueVes
        this.miImagen.comenzar(); //'';//lo que me retorne
    };
    FanaticosComponent.prototype.ngOnInit = function () {
    };
    FanaticosComponent.prototype.MostarMensaje = function (mensaje, gano) {
        if (gano === void 0) { gano = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (gano) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    return FanaticosComponent;
}());
FanaticosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fanaticos',
        template: __webpack_require__("../../../../../src/app/componentes/fanaticos/fanaticos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/fanaticos/fanaticos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FanaticosComponent);

//# sourceMappingURL=fanaticos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  input-jugadores works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/input-jugadores/input-jugadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputJugadoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    return InputJugadoresComponent;
}());
InputJugadoresComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-input-jugadores',
        template: __webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/input-jugadores/input-jugadores.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InputJugadoresComponent);

//# sourceMappingURL=input-jugadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.bg-1 { \r\n    color:rgb(1, 10, 1);\r\n    font-size: 75px;\r\n    font-family:'Comfortaa', cursive;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-menu></app-menu>\n<div style=\"text-align:center\" class=\"container-fluid bg-1 text-center\">\n  <h1>\n      Sala de Juegos\n  </h1>\n </div>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    return JuegosComponent;
}());
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JuegosComponent);

//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\n</ul>\n\n\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>usuario</th>\n      <th>cuit</th>\n      <th>sexo</th>\n      <th>gano</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of listado\" >\n      <td>{{jugador.usuario}} </td>\n      <td>{{jugador.cuit}} </td> \n      <td>{{jugador.sexo | sexo| uppercase}} </td> \n      <td>{{jugador.gano}} </td> \n      \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    return JugadoresListadoComponent;
}());
JugadoresListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _a || Object])
], JugadoresListadoComponent);

var _a;
//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    return ListadoDePaisesComponent;
}());
ListadoDePaisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
], ListadoDePaisesComponent);

var _a;
//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr{\r\n    text-align: center;\r\n}\r\nth{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\n\n<p> {{juego.nombre}} </p>\n<p> {{juego.jugador}} </p>\n\n</div-->\n\n<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Juego</th>\n        <th>Jugador</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <!-- <tr *ngFor=\"let juego of listado\" class=\"success\">\n        <td>{{juego.nombre}} </td>\n        <td>{{juego.jugador}} </td> \n        <td *ngIf=\"juego.gano\">Gano </td>   \n        <td *ngIf=\"!juego.gano\">Perdio</td>     \n      </tr> -->\n      <ng-container *ngFor=\"let juego of listado\">\n        <tr *ngIf=\"juego.gano\" class=\"success\">\n          <td>{{juego.nombre}} </td>\n          <td>{{juego.jugador}} </td> \n          <td *ngIf=\"juego.gano\">Gano </td>   \n          <td *ngIf=\"!juego.gano\">Perdio</td>\n        </tr>\n        <tr *ngIf=\"!juego.gano\" class=\"danger\">\n            <td>{{juego.nombre}} </td>\n            <td>{{juego.jugador}} </td> \n            <td *ngIf=\"juego.gano\">Gano </td>   \n            <td *ngIf=\"!juego.gano\">Perdio</td>\n          </tr>        \n      </ng-container>\n     \n    </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "listado", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoDeResultadosComponent);

//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}\n\nbutton {\n    /*background-color: #4CAF50;*/\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    border-radius: 50px;\n    border: 1px solid #f1f1f1;\n    width: 45%;\n}\n\n.select{\n    width: 200px;\n    height: 30px;\n    border: 1px solid #ddd;\n    line-height: 30px;\n    position: relative;\n    margin-bottom: 40px;\n}\n\n/* цвет фона и рамки навигационного меню */\n.navbar-default {\n    background-color: #a6dd0e;\n    border-color: #3f51b5;\n}\n.form-control{\n    background-color: #a6dd0e;\n}\n\n/* цвет текста, содержащий название сайта или бренда */\n.navbar-default .navbar-brand {\n    color: white;\n}\n/* цвет текста (название сайта или бренда), при поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n    color: #a5aed8;\n}\n/* Цвет пунктов навигационного меню */\n.navbar-default .navbar-nav > li > a {\n    color: white;\n}\n/* Цвет пункта меню, при поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n    color: #a5aed8;\n}\n/* Цвет и фон активного пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-default .navbar-nav > .active > a, \n.navbar-default .navbar-nav > .active > a:hover, \n.navbar-default .navbar-nav > .active > a:focus {\n    color: #a5aed8;\n    background-color: black;\n}\n/* Цвет и фон открытого пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-default .navbar-nav > .open > a, \n.navbar-default .navbar-nav > .open > a:hover, \n.navbar-default .navbar-nav > .open > a:focus {\n    color: #555;\n    background-color: #D5D5D5;\n}\n/* Цвет стрелочки (треугольничка) у раскрывающихся пунктов меню */\n.navbar-default .navbar-nav > .dropdown > a .caret {\n    border-top-color: #777;\n    border-bottom-color: #777;\n}\n/* Цвет стрелочки (треугольничка) при поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\n.navbar-default .navbar-nav > .dropdown > a:focus .caret {\n    border-top-color: #333;\n    border-bottom-color: #333;\n}\n/* Цвет стрелочки (треугольничка), открывшегося пункта меню */\n.navbar-default .navbar-nav > .open > a .caret, \n.navbar-default .navbar-nav > .open > a:hover .caret, \n.navbar-default .navbar-nav > .open > a:focus .caret {\n    border-top-color: #555;\n    border-bottom-color: #555;\n}\n/* CSS стили для мобильных устройств */\n/* Цвет рамки у кнопки, которая открывает меню */\n.navbar-default .navbar-toggle {\n    border-color: #DDD;\n}\n/* Цвет фона кнопки (которая открывает меню) при поднесении к ней курсора мышки или при нахождении её в фокусе */\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n    background-color: #DDD;\n}\n/* Цвет полосочек в кнопочке, которая открывает меню */\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #CCC;\n}\n \n@media (max-width: 767px) {\n/* Цвет пунктов меню в раскрывающихся списках */\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n        color: #777;\n    }\n/* Цвет и фон пункта меню в раскрывающихся списках, при поднесении к нему курсора мышки или при нахождении его в фокусе */\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<!-- Centered Pills -->\n<!-- <ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n  </ul>\n  \n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados> -->\n\n<!--<app-listados></app-listados>-->\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \n\n<app-menu></app-menu>\n<!-- Centered Pills -->\n<!--<ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\n</ul>-->\n\n<nav class=\"navbar  navbar-default\"> \n      <ul class=\"nav navbar-nav\">\n        <li><a  (click)=\"verTodos()\">Ver Todos</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n        <li><a  (click)=\"verGanadores()\">Ver Ganadores</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n          <li><a  (click)=\"verPerdedores()\">Ver Perdedores</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\" >\n          <div select class=\"form-control\"  >\n              <select [(ngModel)]=\"juegoElegido\">\n                <option value=\"0\"  [selected]=\"juegoElegido == 0\">Seleccionar</option>\n                <option value=\"Fanaticos\">Fanáticos</option>\n                <option value=\"Anagrama\">Anagrama</option>\n                <option value=\"Agilidad Aritmética\">Agilidad Aritmética</option>\n                <option value=\"Adivina el número\">Adivina el número</option>\n                <option value=\"Piedra, Papel o Tijera\">Piedra, Papel o Tijera</option>\n              </select>\n          </div>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n          <li><a  (click)=\"filtrarPorJuego(juegoElegido)\">Ver Por Juegos</a></li>\n      </ul>\n  </nav>\n\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\n<br><br><br>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
        this.opcionSeleccionar = true;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.verTodos = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
    };
    ListadoComponent.prototype.verGanadores = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
        this.listadoParaCompartir = this.listadoParaCompartir.filter(function (valor) {
            return valor.gano == true;
        });
    };
    ListadoComponent.prototype.verPerdedores = function () {
        this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
        this.listadoParaCompartir = this.listadoParaCompartir.filter(function (valor) {
            return valor.gano == false;
        });
    };
    ListadoComponent.prototype.filtrarPorJuego = function (juego) {
        if (juego == "0") {
            alert("Eliga un juego. Por favor!!");
        }
        else {
            this.listadoParaCompartir = JSON.parse(localStorage.getItem("Resultados"));
            this.listadoParaCompartir = this.listadoParaCompartir.filter(function (valor) {
                return valor.nombre == juego;
            });
        }
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.html":
/***/ (function(module, exports) {

module.exports = "    \n   <ul class=\"nav nav-pills nav-justified\">\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\n    \n    <li><a (click)=\"SmarTable()\">Smart Table</a></li>\n    <li><a (click)=\"Show()\">Mostrar Todos</a></li>\n    <li><a (click)=\"filtTrue()\">Ganadores</a></li>\n    <li><a (click)=\"filtFalse()\">Perdedores</a></li>\n  </ul>    \n  \n\n<div  class=\"container\"  >\n  <div [hidden]=\"mostrarSmarTable\" >\n\n  <table class=\"table\" [hidden]=\"mostrar\">\n      <thead>\n        <th>Usuario</th>\n        <th>email</th>\n        <th>fecha</th>\n        <th>puntaje</th>\n        <th>gano?</th>\n      </thead>\n      <tbody *ngFor=\"let us of users\">\n        <td>{{us.usuario}}</td>\n        <td>{{us.email}}</td>\n        <td>{{us.fecha}}</td>              \n        <td>{{us.puntaje}}</td>\n        <td>{{us.gano}}</td>\n        \n      </tbody>\n    </table>\n  \n    <table class=\"table\" [hidden]=\"mostrarFilt\">\n      <thead>\n        <th>Usuario</th>\n        <th>email</th>\n        <th>fecha</th>\n        <th>puntaje</th>\n        <th>gano</th>\n        \n      </thead>\n      <tbody *ngFor=\"let us of filtrado\">\n        <td>{{us.usuario}}</td>\n        <td>{{us.email}}</td>\n        <td>{{us.fecha}}</td>      \n\n        <td>{{us.puntaje}}</td>\n        <td>{{us.gano}}</td>\n        \n      </tbody>\n    </table>\n\n  </div>\n\n  </div>\n  <div  [hidden]=\"mostrarSmarTable==false\">\n<ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n</div>\n\n\n  \n  "

/***/ }),

/***/ "../../../../../src/app/componentes/listados/listados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListadosComponent = (function () {
    function ListadosComponent(archivo, filtro) {
        var _this = this;
        this.archivo = archivo;
        this.filtro = filtro;
        this.mostrar = true;
        this.motrarFilt = true;
        this.usuarios = [];
        this.settings = {
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
        this.data = this.aux;
        this.listar();
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */]();
        this.mostrarSmarTable = true;
        this.archivo.getUsers()
            .subscribe(function (data) { return _this.usuarios = data; }, function (error) { return console.error("Error: " + error); }, function () { return _this.source.load(_this.usuarios); });
        console.log(this.usuarios);
    }
    ListadosComponent.prototype.listar = function () {
        var _this = this;
        this.archivo.httpGetPromise("usuarios.json")
            .then(function (data) { _this.users = data; })
            .catch(function (error) { return console.error(error); });
    };
    ListadosComponent.prototype.SmarTable = function () {
        this.mostrarSmarTable = true;
    };
    ListadosComponent.prototype.filtrar = function (modo) {
        var _this = this;
        this.filtro.filtrar("usuarios.json", modo)
            .then(function (data) {
            _this.filtrado = data;
            console.log("data" + data);
            _this.aux = JSON.stringify(_this.filtrado);
            console.log("aux" + _this.aux);
        })
            .catch(function (error) { return console.error(error); });
        console.log(this.aux);
    };
    ListadosComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ListadosComponent.prototype.filtTrue = function () {
        this.mostrarSmarTable = false;
        this.filtrar("gano");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
        console.log(this.filtrado);
    };
    ListadosComponent.prototype.filtFalse = function () {
        this.mostrarSmarTable = false;
        this.filtrar("perdio");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
        console.log(this.filtrado);
    };
    ListadosComponent.prototype.Show = function () {
        this.mostrarSmarTable = false;
        this.filtrar("todos");
        this.mostrar = true;
        if (this.motrarFilt == false) {
            this.motrarFilt = true;
        }
        else {
            this.motrarFilt = false;
        }
        console.log(this.filtrado);
    };
    return ListadosComponent;
}());
ListadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listados',
        template: __webpack_require__("../../../../../src/app/componentes/listados/listados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados/listados.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_archivosjugadores_service__["a" /* ArchivosjugadoresService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_jugadores_service__["a" /* JugadoresService */]) === "function" && _b || Object])
], ListadosComponent);

var _a, _b;
//# sourceMappingURL=listados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform {\n    border: 10px solid #f1f1f1;\n    padding: 10px;\n    background:gray;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\nbutton:hover {\n    opacity: 0.8;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n.aceptbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #3664F4;\n}\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n    padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n.bg-1 { \n    background-color: #bca91a; /* Green */\n    color: #ffffff;\n    padding-bottom: 100px;\n}\n\n.login{\n    max-width: 400px;\n    padding: 15px;\n  \n  }\n  #avatar{\n    width: 96px;\n    height: 96px;\n    margin: 0px auto 10px;\n    display: block;\n    border-radius: 50%;\n    border-style: solid;\n    border-width: 5px;\n    border-color: white;\n  }\n  form{\n    width: 450;\n    margin: auto;\n    background: rgba(0,0,0,0.4);\n    padding: 10px 20px;\n    \n    margin-top: 20px;\n    border-radius: 7px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      Usuario\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 5px\">\n    <div class=\"col-lg-6\">\n      Clave\n    </div>\n    <div class=\"col-lg-6\">\n      <input type=\"password\" [(ngModel)]=\"clave\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\n    <div class=\"col-lg-12\">\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\n    </div>\n  </div>\n</div-->\n<!--login original del profesor\n <div class=\"container\" >\n  <div class=\"jumbotron\" style=\"padding:50px;\">\n    <form action=\"return true;\">\n      <div class=\"imgcontainer\">\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\" >\n      </div>\n\n      <div class=\"container\">\n        <label><b>Usuario</b></label>\n        <input type=\"text\" placeholder=\"Usuario\"  [(ngModel)]=\"usuario\"  name=\"uname\" required>\n\n        <label><b>Clave</b></label>\n        <input type=\"password\" placeholder=\"Clave\"  [(ngModel)]=\"clave\" name=\"psw\" required>\n            \n        <button *ngIf=\"logeando\"  (click)=\"MoverBarraDeProgreso()\" >Ingresar</button>\n       \n        <div *ngIf=\"!logeando\" class=\"progress\">\n            <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n              {{progresoMensaje}} - {{progreso}}%\n            </div>\n        </div>\n       \n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\n      </div>\n\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\" >Registrarse</button>\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\n      </div>\n     \n    </form>\n  </div>\n</div>\n-->\n\n<!--opcion de login-->\n<!--Encabezado-->\n<div class=\"container\">\n  <!--  <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/Principal\">Sala De Juegos</a>\n    </div>-->\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink=\"/Registro\">Registrarse</a></li>\n      </ul>\n    </div>\n</div>\n\n<!-- First Container -->\n<div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\n    <div *ngIf=\"!logeando\" class=\"progress\">\n        <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n          {{progresoMensaje}} - {{progreso}}%\n        </div>\n    </div>\n    <div class=\"formIngreso animated bounceIn\">                  \n        <form id=\"login\" class=\"login\">\n          <img  src=\"./assets/imagenes/login1.jpg\"class=\"img-responsive\" id=\"avatar\">\n          <div class=\"form-group\">\n            <label>Usuario</label>\n            <input type=\"email\" class=\"form-control\" name=\"usuario\" id=\"usuario\" value=\"usuario\" [(ngModel)]=\"usuario\" placeholder=\"Usuario\" required=\"required\" autofocus=\"autofocus\">\n          </div>\n          <div class=\"form-group\">\n            <label>Contraseña</label>\n            <input type=\"password\" class=\"form-control\" name=\"clave\" id=\"clave\" [(ngModel)]=\"clave\" placeholder=\"Contraseña\" required=\"required\"> \n          </div>\n\n          <button *ngIf=\"logeando\" (click)=\"CargarAdministrador()\">Entrar como Usuario Administrador</button>\n          \n          <div class=\"form-group\">\n            <label>\n              <!-- <input class=\"\" id=\"recordarme\" type=\"checkbox\" checked> Recuerdame -->\n              <mat-checkbox type=\"checkbox\" checked=\"checked\"> Recordar mis datos!</mat-checkbox>\n            </label>\n          </div>\n          <input type=\"submit\" id=\"logIn\" class=\"btn btn-block btn-success\" (click)=\"MoverBarraDeProgreso()\" value=\"Ingresar\">      \n        \n          <button type=\"button\" class=\"btn btn-info\" routerLink=\"/Registro\" >Registrarse</button>\n         \n        </form>\n      </div>\n  <h2></h2>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    /*constructor(
      private route: ActivatedRoute,
      private router: Router) {
        this.progreso=0;
        this.ProgresoDeAncho="0%";
      }*/
    function LoginComponent(route, router, servicioJuego) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.arrayUsuarios = new Array();
        this.arrayResultados = new Array();
        this.logeando = true;
        this.recordar = false;
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.miJuegoServicio = servicioJuego;
        this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
        this.usuarioJugador = JSON.parse(localStorage.getItem("usuarioEnLinea"));
        console.log(this.arrayUsuarios);
        if (this.usuarioJugador != null) {
            if (this.usuarioJugador["recordar"] == true) {
                this.router.navigate(['/Principal']);
            }
            else {
                localStorage.removeItem("usuarioEnLinea");
                this.usuarioJugador = null;
            }
        }
        if (this.arrayUsuarios == null) {
            this.arrayUsuarios = new Array();
            this.arrayUsuarios.push({ mail: "administrador@outlook.com", clave: "1234" });
            this.arrayUsuarios.push({ mail: "romi@hotmail.com", clave: "1234" });
        }
        var usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
        if (usuarioRegistrado != null) {
            this.arrayUsuarios.push(usuarioRegistrado);
            if (this.arrayUsuarios.includes(usuarioRegistrado)) {
                console.log("El usuario registrado esta en el array");
            }
            else {
                console.log("Agregue el ultimo usuario registrado");
                this.arrayUsuarios.push("usuarioRegistrado");
            }
        }
        var resultadosPrevios = JSON.parse(localStorage.getItem("Resultados"));
        console.log(resultadosPrevios);
        if (resultadosPrevios == null) {
            console.log("Llame a servicio juegos porque no hay resultados cargados");
            this.arrayResultados = this.miJuegoServicio.listar();
            localStorage.setItem("Resultados", JSON.stringify(this.arrayResultados));
        }
        localStorage.setItem("Usuarios", JSON.stringify(this.arrayUsuarios));
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.CargarAdministrador = function () {
        this.usuario = "administrador@outlook.com";
        this.clave = "1234";
    };
    /*Entrar() {
      if (this.usuario === 'admin' && this.clave === 'admin') {
        this.router.navigate(['/Principal']);
      }
    }*/
    LoginComponent.prototype.Entrar = function () {
        this.usuarioEncontrado = false;
        this.arrayUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
        console.log(this.arrayUsuarios);
        for (var i = 0; i < this.arrayUsuarios.length; i++) {
            if (this.arrayUsuarios[i]["mail"] == this.usuario && this.arrayUsuarios[i]["clave"] == this.clave) {
                this.usuarioEncontrado = true;
                this.usuarioJugador = this.arrayUsuarios[i];
                break;
            }
        }
        if (this.usuarioEncontrado) {
            this.usuarioJugador["recordar"] = this.recordar;
            localStorage.setItem("usuarioEnLinea", JSON.stringify(this.usuarioJugador));
            this.router.navigate(['/Principal']);
        }
        else {
            alert("ERROR. No existe el usuario con el que quiere ingresar!");
            //location.reload();
            this.progreso = 0;
            this.ProgresoDeAncho = "0%";
            this.logeando = true;
            this.usuario = null;
            this.clave = null;
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n   \n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaDeGoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaDeGoogleComponent = (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    return MapaDeGoogleComponent;
}());
MapaDeGoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mapa-de-google',
        template: __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapaDeGoogleComponent);

//# sourceMappingURL=mapa-de-google.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    max-width: 300px;\n   height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n  background-color: #DEF3A6;\n    text-align: center;\n    font-family:'Comfortaa', cursive;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n}/* Add some padding inside the card container */\n.container {\n    padding: 2px 16px;\n}\n\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color: #4CAF50;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n  }\n  \n  .button:hover {background-color: #3e8e41}\n  \n  .button:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n    <div class=\"card\">\n      <img class=\"img-thumbnail\"   src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Velocidad y agilidad aritmética </h1>\n      <p class=\"title\">Juego de agilidad mental</p>\n      <!--<p>UTN FRA </p>-->\n  \n      <!--<a href=\"#\"><i class=\"fa fa-dribbble\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a> \n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a> -->\n      <p>           <button class=\"button\"  (click)=\"Juego('Agilidad')\">Jugar</button></p>\n    \n    </div>\n    <div class=\"card\">\n      <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Piedra Papel o Tijera</h1>\n      <p class=\"title\">Juego contra la máquina</p>\n      \n      <p>           <button class=\"button\"  (click)=\"Juego('PiedraPapelTijera')\">Jugar</button></p>\n    </div>\n    <div class=\"card\">\n      <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\n      <h1>Adivina el número secreto</h1>\n      <p class=\"title\">Juego de estrategia</p>\n      \n      <p>           <button class=\"button\"  (click)=\"Juego('Adivina')\">Jugar</button></p>\n    </div>\n    <div class=\"card\">\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/fanaticos.jpg\" alt=\"Avatar\" style=\"width:100%\">\n        <h1>Netflix y Youtubers</h1>\n        <p class=\"title\">Juego asociativo</p>\n        \n        <p>           <button class=\"button\"  (click)=\"Juego('Fanaticos')\">Jugar</button></p>\n    </div>\n    <div class=\"card\">\n        <img  class=\"img-thumbnail\"  src=\"./assets/imagenes/anagrama.png\" alt=\"Avatar\" style=\"width:100%\">\n        <h1>Anagrama</h1>\n        <p class=\"title\">Juego contra la máquina</p>\n        \n        <p>           <button class=\"button\"  (click)=\"Juego('Anagrama')\">Jugar</button></p> <!--Anagrama esta en la clase de anagrama: JuegoAnagrama donde se define-->\n    </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'PiedraPapelTijera':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'Fanaticos':
                this.router.navigate(['/Juegos/Fanaticos']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']); //Anagrama esta en la clase JuegoAnagrama      
                break;
        }
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* цвет фона и рамки навигационного меню */\r\n.navbar-default {\r\n    background-color: #a6dd0e;\r\n    border-color: #3f51b5;\r\n}\r\n/* цвет текста, содержащий название сайта или бренда */\r\n.navbar-default .navbar-brand {\r\n    color: white;\r\n}\r\n/* цвет текста (название сайта или бренда), при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n    color: #a5aed8;\r\n}\r\n/* Цвет пунктов навигационного меню */\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n}\r\n/* Цвет пункта меню, при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n    color: #a5aed8;\r\n}\r\n/* Цвет и фон активного пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .active > a, \r\n.navbar-default .navbar-nav > .active > a:hover, \r\n.navbar-default .navbar-nav > .active > a:focus {\r\n    color: #a5aed8;\r\n    background-color: black;\r\n}\r\n/* Цвет и фон открытого пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .open > a, \r\n.navbar-default .navbar-nav > .open > a:hover, \r\n.navbar-default .navbar-nav > .open > a:focus {\r\n    color: #555;\r\n    background-color: #D5D5D5;\r\n}\r\n/* Цвет стрелочки (треугольничка) у раскрывающихся пунктов меню */\r\n.navbar-default .navbar-nav > .dropdown > a .caret {\r\n    border-top-color: #777;\r\n    border-bottom-color: #777;\r\n}\r\n/* Цвет стрелочки (треугольничка) при поднесении к нему курсора мышки или при его нахождении в фокусе */\r\n.navbar-default .navbar-nav > .dropdown > a:hover .caret,\r\n.navbar-default .navbar-nav > .dropdown > a:focus .caret {\r\n    border-top-color: #333;\r\n    border-bottom-color: #333;\r\n}\r\n/* Цвет стрелочки (треугольничка), открывшегося пункта меню */\r\n.navbar-default .navbar-nav > .open > a .caret, \r\n.navbar-default .navbar-nav > .open > a:hover .caret, \r\n.navbar-default .navbar-nav > .open > a:focus .caret {\r\n    border-top-color: #555;\r\n    border-bottom-color: #555;\r\n}\r\n/* CSS стили для мобильных устройств */\r\n/* Цвет рамки у кнопки, которая открывает меню */\r\n.navbar-default .navbar-toggle {\r\n    border-color: #DDD;\r\n}\r\n/* Цвет фона кнопки (которая открывает меню) при поднесении к ней курсора мышки или при нахождении её в фокусе */\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n    background-color: #DDD;\r\n}\r\n/* Цвет полосочек в кнопочке, которая открывает меню */\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #CCC;\r\n}\r\n \r\n@media (max-width: 767px) {\r\n/* Цвет пунктов меню в раскрывающихся списках */\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n        color: #777;\r\n    }\r\n/* Цвет и фон пункта меню в раскрывающихся списках, при поднесении к нему курсора мышки или при нахождении его в фокусе */\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n        color: #333;\r\n        background-color: transparent;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div>\n    <button routerLink=\"/Principal\">Principal</button>\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \n    <button routerLink=\"/error\">Error</button>\n  \n</div-->\n\n<!--nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n        </ul>\n    </div>\n  </nav-->\n <!-- <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n                                  \n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n  -->\n<!-- El logotipo y el icono que despliega el menú se agrupan para mostrarlos mejor en los dispositivos móviles -->\n\n\n\n\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n<nav class=\"navbar  navbar-default\"> \n\n  <div class=\"navbar-header navbar-inverse\">\n  <a class=\"navbar-brand\" routerLink=\"/Principal\">Bienvenidos</a>\n  </div>\n\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('Adivina')\">Adivina</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav\">\n      <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n    </ul>\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('PiedraPapelTijera')\">PiedraPapelTijera</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('Fanaticos')\">Fanáticos</a></li>\n  </ul>\n  <ul class=\"nav navbar-nav\">\n    <li><a  (click)=\"Juego('Anagrama')\">Anagrama</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-inverse\">\n    <li><a  (click)=\"Juego('QuienSoy')\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-inverse\">\n    <li><a  (click)=\"Juego('/')\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
    }
  }
}
*/


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'PiedraPapelTijera':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'Fanaticos':
                this.router.navigate(['/Juegos/Fanaticos']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'QuienSoy':
                this.router.navigate(['/QuienSoy']);
                break;
            case '/':
                this.router.navigate(['']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".margen-izq{\r\n    margin-left:170px;\r\n    \r\n}\r\n.color-fondo{\r\n    background-color:#e60f93;\r\n}\r\n\r\n.fuente{\r\n    font-family: 'Gloria Hallelujah', cursive;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>piedra-papel-tijera works!</p>-->\n\n\n<link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker\" rel=\"stylesheet\"> \n<div class=\"container-fluid text-center\">    \n  <div class=\"row content\">\n    <div class=\"col-sm-1 sidenav\">\n    </div>\n    <div class=\"col-sm-10 text-left\"> \n      <button *ngIf=\"mostrarBoton\" type=\"button\" class=\"btn btn-info\" (click)=\"limpiar()\" >Abandonar la partida</button>\n      <div class=\"content\">\n        <div class=\"well color-fondo\">\n          <h1 style=\"text-align:center\">\n          <h3 class=\"fuente\">{{eleccionMaquina}}</h3>\n          <h2>{{resultado}}</h2> \n          \n          \n          </h1><br />\n          \n          \n          <div class=\"row margen-izq\">  \n            <div class=\"col-md-4\">\n              <img alt='Icono Piedra' src=\"./assets/imagenes/piedra1.png\"><br /><br /><br />\n              \n              <p>\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijePiedra()\">Piedra</button>\n              </p>\n            </div>\n          \n            <div class=\"col-md-4\">\n              <img alt='Icono Papel' src=\"./assets/imagenes/papel1.png\"><br /><br /><br />\n              <p>\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijePapel()\">Papel</button>\n              </p>\n            </div>\n      \n          \n            <div class=\"col-md-4\">\n              <img alt='Icono Tijera' src=\"./assets/imagenes/tijera1.png\"><br /><br /><br />\n              <p>\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"elijeTijera()\">Tijera</button>\n              </p>\n            </div>           \n          </div>\n          <h1 style=\"text-align:center\"> <h3>{{estadisticas}}</h3></h1>\n        </div>\n      </div>\n      \n    <div class=\"col-sm-2 sidenav\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiedraPapelTijeraComponent = (function () {
    function PiedraPapelTijeraComponent() {
        this.eleccionMaquina = "piedra-papel-tijera =D";
        this.mostrarBoton = false;
        this.empezar = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
    }
    PiedraPapelTijeraComponent.prototype.elijePiedra = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.piedra();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.elijePapel = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.papel();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.elijeTijera = function () {
        this.empezar.comenzar();
        this.mostrarBoton = true;
        this.eleccionMaquina = this.nuevoJuego.tijera();
        this.resultado = this.nuevoJuego.mensaje;
        this.estadisticas = this.nuevoJuego.mostarResultado();
    };
    PiedraPapelTijeraComponent.prototype.limpiar = function () {
        this.mostrarBoton = false;
        this.eleccionMaquina = "piedra-papel-tijera!";
        this.resultado = "";
        this.estadisticas = "";
        this.nuevoJuego.resetear();
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    return PiedraPapelTijeraComponent;
}());
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PiedraPapelTijeraComponent);

//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .imagenDeMenu{\n        width: 80px;\n        height: 70px;\n        }\n        \n        .hero-text {\n            text-align: center;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            color: #100000;\n            }\n        \n        .color-fondo{\n            /*background-color:#581abc;*/\n           /* background: linear-gradient(to top left, #a8ff44, #f1a471);*/\n           background: rgba(73,155,234,1);\n        }\n        \n        .carousel-text-right{\n            width: 65%;\n            height: 85%;\n            padding-left: 465px;\n            padding-bottom: 8px;\n            position: absolute;\n            right: 15%;\n            bottom: 20px;\n            color: #fff;\n            text-align: right;\n            text-align: justify;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n        }\n        \n        .fuente{\n            font-family: 'Acme', sans-serif;\n        }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-cabecera>  </app-cabecera>-->\n<app-menu></app-menu>\n<link href=\"https://fonts.googleapis.com/css?family=Lobster+Two\" rel=\"stylesheet\"> \n\n\n<!--<div class=\"container\" >  \n    <ul class=\"list-group\">\n\n        <li class=\"list-group-item list-group-item-danger\">\n           \n                <div class=\"media-body\">\n                    <div class=\"hero-text\">\n                        <h4 >Menú Principal</h4>\n                    </div>\n                 </div>\n               \n             \n        </li>\n\n        <li class=\"list-group-item list-group-item-success\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n              <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/saladejuegos.png\" class=\"media-object imagenDeMenu\" >\n              </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Juegos</h4>\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>\n\n        <li class=\"list-group-item list-group-item-info\">\n            <a routerLink=\"/Listado\">\n              <div class=\"media\">\n                  <div class=\"media-left\">\n                      <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\" >\n                    </div>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading\">Listados de resultados</h4>\n                  <p>Los listados de los resultados con ordenamiento y busqueda</p>\n                </div>\n                \n              </div> \n            </a>\n        </li>\n\n        <!--<li class=\"list-group-item list-group-item-warning\">\n          <a routerLink=\"/Juegos\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>-->\n        \n<!--        <li class=\"list-group-item list-group-item-warning\">\n          <a routerLink=\"/Jugadores\">\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <img src=\"./assets/imagenes/jugadores.png\" class=\"media-object imagenDeMenu\" >\n                  </div>\n              <div class=\"media-body\">\n                <h4 class=\"media-heading\">Jugadores</h4>\n                <p>Listado de jugadores</p>\n              </div>\n             \n            </div> \n          </a>\n        </li>   \n    </ul>\n</div>\n-->\n\n<link href=\"https://fonts.googleapis.com/css?family=Acme\" rel=\"stylesheet\"> \n<div class=\"container-fluid fuente\" >\n  <div id=\"myCarousel\" class=\"carousel slide color-fondo\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\"  >\n      \n      <div class=\"item active\">\n        <img src=\"./assets/imagenes/saladejuegos.png\" alt=\"Juegos\" style=\"width:44.5%;height:70%;\">\n        <a routerLink=\"/Juegos\">\n          <div class=\"carousel-caption carousel-text-right\">          \n            <h3 class=\"text-right\">Juegos</h3>\n            <p class=\"text-right\">El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\n          </div>\n        </a>\n      </div>\n      \n\n      <div class=\"item\">\n        <img src=\"./assets/imagenes/listado.jpg\" alt=\"Listados de resultados\" style=\"width:46.15%;height:70%;\">\n         <a routerLink=\"/Listado\"> <!-- <a routerLink=\"/Listado\"> -->\n          <div class=\"carousel-caption carousel-text-right\">\n            <h3 class=\"text-right\">Listados de resultados</h3>\n            <!-- <p>Los listados de los resultados con ordenamiento y busqueda</p> -->\n            <p class=\"text-right\">Estadísticas y resultados del juego para cada jugador.</p>\n          </div>\n       </a>\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"./assets/imagenes/Configuracion.png\"  alt=\"Configuración\" style=\"width:46%;height:70%;\">\n        <a routerLink=\"/Login\">\n          <div class=\"carousel-caption carousel-text-right\">\n            <h3 class=\"text-right\">Configuración</h3>\n            <p class=\"text-right\"> Ajustes de la aplicacion y los métodos de autentificación</p>\n          </div>\n        </a>\n      </div>\n  \n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\n\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.tituloInstruccion {\n    margin-bottom: 45px;\n    font-size: 25px;\n    color: rgb(255, 123, 0);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    text-decoration: underline;\n\n}\n.instrucciones{\n  color:blue;\n  text-align: left;\n  font-size: 20px;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.bg-1 { \n    background: rgb(231, 238, 237) url('/assets/imagenes/fondo2.png');\n    color:blue;\n    font-family:'Comfortaa', cursive;\n\n}\n.bg-2 { \n   /* background-color: #474e5d; /* Dark Blue \n    color: #ffffff;*/\n    padding-top: 100px;\n    padding-bottom: 50px;\n    color: white;\n    background: linear-gradient(to top left, #a8ff44, #f1a471);\n}\n.bg-3 { \n   /* background-color: #20B2A9; /* White */\n   /* color: white;*/\n    background: rgb(231, 238, 237) url('/assets/imagenes/fondo2.png');\n}\n.bg-4 { \n   /* background-color: #2f2f2f; /* Black Gray \n    color: #fff;*/\n    padding-top: 100px;\n    padding-bottom: 50px;\n    color: white;\n    background: linear-gradient(to top left, #a8ff44, #f1a471);\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n   /* background-color: rgb(153,102,153);*/\n   /* color: rgb(255,255,204);*/\n   color: white;\n   background: linear-gradient(to top left, #a8ff44, #f1a471);\n\n}\n.navbar-nav  li a:hover {\n    color: #19BC9C !important;\n}\n\n.navbar-nav li a{\n    color:blue;\n    font-size: 20px;\n    font-family:'Comfortaa', cursive;\n}\n\n.navbar-brand{\n    color: rgb(31, 161, 48);\n    font-size: 30px;\n    font-family: 'Comfortaa', cursive;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Sala De Juegos</a>\n      </div>\n\n      <ul class=\"nav navbar-nav\">\n          <li><a href=\"/QuienSoy#quien\">Quién</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n          <li><a href=\"/QuienSoy#que\">Qué es</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n          <li><a href=\"/QuienSoy#donde\">Dónde</a></li>\n      </ul>\n\n    </div>\n</nav>\n  \n<!-- First Container -->\n<div id =\"quien\"class=\"container-fluid bg-1 text-center\">\n  <h3 class=\"margin\">Quién Soy?</h3>\n  <img src=\"./assets/imagenes/quiensoy4.png\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\n  <h3>Romina Ibarra - Alumna de 4°B</h3>\n</div>\n\n<!-- Second Container -->\n<div id =\"que\" class=\"container-fluid bg-2 text-center\">\n  <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n  <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\n    produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\n  <h4 class=\"tituloInstruccion\">Instrucciones de como Jugar los Juegos</h4>\n      <ul>\n        <li><p class=\"instrucciones\">Agilidad Aritmetica: Tenes 7 segundos para responder correctamente<br>una operacion aritmetica dada entre dos numeros y un operador.</p></li>\n        <li><p class=\"instrucciones\">Adivina el Numero: Usted tiene que adivinar un numero entre 1 y 100.</p></li>\n        <li><p class=\"instrucciones\">Piedra, Papel o Tijera: El clasico juego donde tenes que elegir una de las opciones,<br>recorda que jugas contra la máquina.</p></li>\n        <li><p class=\"instrucciones\">Anagrama: Tenes que ordenar una palabra desorganizada e ingresar la palabra correcta.</p></li>\n        <li><p class=\"instrucciones\">Fanáticos: Demostra cuanto sabes de tus series y youtubers favoritos<br>ingresando el nombre de la serie o vblog. Si no sabes podes hacer NEXT!</p></li>\n      </ul>\n\n      <button mat-raised-button color=\"accent\" (click)=\"IrAMiJuego()\" >Jugar ya!</button>\n</div>\n\n<!-- Third Container (Grid) -->\n<div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \n  <h3 class=\"margin\">Dónde Funciona?</h3><br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\n      <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\n    </div>\n    <div class=\"col-sm-4\"> \n      <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\n      <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n    </div>\n    <div class=\"col-sm-4\"> \n      <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\n      <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<footer class=\"container-fluid bg-4 text-center\">\n  <p>Modificado por <a href=\"https://github.com/Ben10Formis/\">Romina Ibarra - Github</a></p> \n</footer>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuienSoyComponent = (function () {
    function QuienSoyComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    QuienSoyComponent.prototype.IrAMiJuego = function () {
        this.router.navigate(['/Principal']);
    };
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], QuienSoyComponent);

var _a, _b;
//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n.example-spacer {\n    -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n  }\n  \n/* Add padding to container elements */\n.container {\n    padding: 16px;\n}\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 70%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n       width: 100%;\n    }\n}\n\n\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n    padding-bottom: 100px;\n}\n\n.material-button{\n    color: #ffffff;\n}\n\n.example-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n  \n  .example-container > * {\n    width: 100%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n   <!-- <body style=\"background-image: url('../../assets/imagenes/fondo2.png')\">-->\n    <body style=\"background-image: url('./assets/imagenes/fondo2.png')\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n          <span><h2 id=\"terminos\">Términos y condiciones</h2><br /><br /></span>\n      </mat-toolbar-row>\n      <mat-toolbar-row>\n          <span></span>\n          <span class=\"example-spacer\"></span>        \n       </mat-toolbar-row>\n       <mat-toolbar-row>\n          <span>El Gobierno de la República Argentina no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños,<br />\n             pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso,<br />\n              en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión,<br />\n               virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran<br />\n              informados sobre la posibilidad de dichos daños, pérdidas o gastos.</span>\n          <span class=\"example-spacer\"></span>        \n       </mat-toolbar-row>\n       <mat-toolbar-row>\n          <span></span>\n          <span class=\"example-spacer\"></span>        \n       </mat-toolbar-row>\n       <mat-toolbar-row>\n          <span><p><br />El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea<br />\n             completamente segura. El Usuario asume este riesgo.</span>\n          <span class=\"example-spacer\"></span>        \n       </mat-toolbar-row>\n       <mat-toolbar-row>\n          <span></span>\n          <span class=\"example-spacer\"></span>        \n       </mat-toolbar-row>\n    </mat-toolbar>\n        <div style=\"text-align:center\">\n            <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\n            <button mat-raised-button color=\"primary\" onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\n            <button mat-raised-button color=\"warn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\n  \n            <div id=\"id01\" class=\"modal\">\n              <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\n              <form class=\"modal-content animate\" [formGroup] = \"registroForm\" (ngSubmit)=\"Registrar()\"> \n                    <div class=\"container\">\n                      <label><b>Email</b></label>\n                      <input type=\"text\" placeholder=\"Ingresa tu correo\" [formControl] = \"registroMail\" name=\"email\">\n                      <div *ngIf=\"registroMail.valid\" class=\"alert alert-success\">\n                        El correo electronico es válido.\n                      </div>\n                      <div *ngIf=\"registroMail.invalid && (registroMail.dirty || registroMail.touched)\" class=\"alert alert-danger\">  \n                          <div *ngIf=\"registroMail.errors.required\">\n                            El correo electronico es requerido.\n                          </div>\n                          <div *ngIf=\"registroMail.errors.minlength\">\n                            El correo electronico debe contener 10 carácteres mínimo.\n                          </div>\n                          <div *ngIf=\"registroMail.errors.email\">\n                            El correo electronico debe ser como ejemplo <small>tuemail@hotmail.com</small>\n                          </div>\n                          <div *ngIf=\"registroMail.errors.maxlength\">\n                            El correo electronico debe contener 80 carácteres máximo.\n                          </div>\n                      </div>\n              \n              \n                      <label><b>Clave</b></label>\n                      <input type=\"password\" placeholder=\"Ingrese su contraseña\" [formControl] = \"registroClave\" name=\"psw\" required>\n                      <div *ngIf=\"registroClave.valid\" class=\"alert alert-success\">\n                        La clave es válida.\n                      </div>\n                      <div *ngIf=\"registroClave.invalid && (registroClave.dirty || registroClave.touched)\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"registroClave.errors.required\">\n                        La clave es requerida.\n                      </div>\n                       <div *ngIf=\"registroClave.errors.minlength\">\n                         La clave debe tener 5 caracteres mínimo.\n                       </div>\n                       <div *ngIf=\"registroClave.errors.pattern\">\n                         La clave debe contener numeros y letras.\n                       </div>\n                      </div>\n              \n              \n                      <label><b>Repita la clave</b></label>\n                      <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" [formControl] = \"registroRepetirClave\" name=\"psw-repeat\" required>\n                      <div *ngIf=\"registroRepetirClave.valid\" class=\"alert alert-success\">\n                        La clave es válida.\n                      </div>\n                      <div *ngIf=\"registroRepetirClave.invalid && (registroRepetirClave.dirty || registroRepetirClave.touched)\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"registroRepetirClave.errors.required\">\n                        Debe repetir la clave.\n                      </div>\n                       <div *ngIf=\"registroRepetirClave.errors.minlength\">\n                         La clave debe tener 5 caracteres mínimo.\n                       </div>\n                       <div *ngIf=\"registroRepetirClave.errors.MatchPassword\">\n                         Las contraseñas no coinciden.\n                      </div>\n                      </div>\n                      \n              \n                      <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\n                      <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\n                      <div class=\"clearfix\">\n                        <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\n                        <button type=\"submit\" [disabled]=\"!registroForm.valid\" class=\"signupbtn\">Registrarme</button>\n                        <!-- [disabled]=\"!registroForm.valid\" -->\n                      </div>\n                    </div>\n                  </form>\n            </div>\n        </div>\n       \n        \n        <script>\n        // Get the modal\n        var modal = document.getElementById('id01');\n        \n        // When the user clicks anywhere outside of the modal, close it\n        window.onclick = function(event) {\n            if (event.target == modal) {\n                modal.style.display = \"none\";\n            }\n        }\n        </script>\n  \n  \n        \n  </body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });
  constructor( ) { }

  ngOnInit() {
  }

}*/



var RegistroComponent = (function () {
    function RegistroComponent(builder, route, router) {
        this.builder = builder;
        this.route = route;
        this.router = router;
        this.registroMail = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].maxLength(80), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].email]); //(?=.*\d)(?=.*[a-zA-Z])
        this.registroClave = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].maxLength(18)]);
        this.registroRepetirClave = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].maxLength(18)]); //[0-9]+[a-zA-Z ]*
        this.CreateForm();
    }
    RegistroComponent.prototype.CreateForm = function () {
        this.registroForm = this.builder.group({
            'registroMail': this.registroMail,
            'registroClave': this.registroClave,
            'registroRepetirClave': this.registroRepetirClave
        }, { validator: this.areEqual });
    };
    RegistroComponent.prototype.areEqual = function (control) {
        //  return control.get('registroClave').value === control.get('registroRepetirClave').value 
        //  ? null : {'areEqual': true};
        var password = control.get('registroClave').value; // to get value in input tag
        var confirmPassword = control.get('registroRepetirClave').value; // to get value in input tag
        if (password != confirmPassword) {
            //console.log('false');
            control.get('registroRepetirClave').setErrors({ MatchPassword: true });
        }
        else {
            //console.log('true');
            return null;
        }
    };
    RegistroComponent.prototype.Registrar = function () {
        if (this.registroForm.valid == true) {
            var usuarioRegistrado = { mail: this.registroForm.get("registroMail").value, clave: this.registroForm.get("registroClave").value };
            localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));
            alert("Usted se ha registrado con exito!");
            this.router.navigate(['/']);
        }
        else {
            alert("Ocurrio un error durante el registro!");
        }
    };
    RegistroComponent.prototype.ngOnInit = function () {
    };
    return RegistroComponent;
}());
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegistroComponent);

var _a, _b, _c;
//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_toolbar__["a" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */]],
    })
], MaterialModule);

//# sourceMappingURL=material.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    return SexoPipe;
}());
SexoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sexo'
    })
], SexoPipe);

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_fanaticos_fanaticos_component__ = __webpack_require__("../../../../../src/app/componentes/fanaticos/fanaticos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal



















// declaro donde quiero que se dirija
var MiRuteo = [
    //{path: '' , component: PrincipalComponent},
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_16__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'Mapa', component: __WEBPACK_IMPORTED_MODULE_15__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */] },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_13__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_11__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    { path: 'Principal', component: __WEBPACK_IMPORTED_MODULE_5__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Listado', component: __WEBPACK_IMPORTED_MODULE_9__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_14__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */] },
    { path: 'Juegos', component: __WEBPACK_IMPORTED_MODULE_10__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */] },
            { path: 'AdivinaMasListado', component: __WEBPACK_IMPORTED_MODULE_7__componentes_adivina_mas_listado_adivina_mas_listado_component__["a" /* AdivinaMasListadoComponent */] },
            { path: 'AgilidadaMasListado', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_mas_listado_agilidad_mas_listado_component__["a" /* AgilidadMasListadoComponent */] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_6__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_17__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
            { path: 'Fanaticos', component: __WEBPACK_IMPORTED_MODULE_18__componentes_fanaticos_fanaticos_component__["a" /* FanaticosComponent */] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_19__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] }]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_4__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivosjugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosjugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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





var ArchivosjugadoresService = (function () {
    function ArchivosjugadoresService(http) {
        this.http = http;
    }
    ArchivosjugadoresService.prototype.httpGetPromise = function (url) {
        return this.http
            .get("./assets/datosadicionales/usuarios.json")
            .toPromise()
            .then(this.extraerDatos)
            .catch(this.handleError);
    };
    ArchivosjugadoresService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    ArchivosjugadoresService.prototype.handleError = function (error) {
        return error;
    };
    ArchivosjugadoresService.prototype.getUsers = function () {
        return this.http.get("./assets/datosadicionales/usuarios.json")
            .map(function (response) { return response.json(); });
    };
    return ArchivosjugadoresService;
}());
ArchivosjugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArchivosjugadoresService);

var _a;
//# sourceMappingURL=archivosjugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';
import { JuegoAdivina } from '../clases/juego-adivina';
import { MiHttpService } from './mi-http/mi-http.service';

@Injectable()
export class JuegoServiceService {

  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    this.peticion = this.miHttp.httpGetO("http://localhost:3003");
//    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
  }

  public listar(): Array<Juego> {
   this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
    .then( data => {
      console.log( data );
    })
    .catch( err => {
      console.log( err );
    });
   
  
    this.peticion
    .subscribe( data => {
      console.log("En listar");
      console.log( data );
    }, err => {
      console.info("error: " ,err );
    })

    let miArray: Array<Juego> = new Array<Juego>();

    miArray.push(new JuegoAdivina("Juego 1", false));
    miArray.push(new JuegoAdivina("Pepe", true));
    miArray.push(new JuegoAdivina("Juego 3", false));
    miArray.push(new JuegoAdivina("Juego 4", false));
    miArray.push(new JuegoAdivina("Juego 5", false));
    miArray.push(new JuegoAdivina("Juego 6", false));
    return miArray;
  }

  public listarPromesa(): Promise<Array<Juego>> {
    this.peticion
    .subscribe( data => {
      console.log("En listarPromesa");
      console.log( data );
    }, err => {
      console.log( err );
    })
    let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
      let miArray: Array<Juego> = new Array<Juego>();
      miArray.push(new JuegoAdivina("JuegoPromesa 1", false,"promesa"));
      miArray.push(new JuegoAdivina("PepePromesa", true));
      miArray.push(new JuegoAdivina("JuegoPromesa 3", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 4", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 5", false));
      miArray.push(new JuegoAdivina("JuegoPromesa 6", false));
      resolve(miArray);
    });

    return promesa;
  }

}*/




var JuegoServiceService = (function () {
    function JuegoServiceService() {
    }
    JuegoServiceService.prototype.listar = function () {
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Adivina El Numero", false, "administrador@outlook.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_2__clases_juego_agilidad__["a" /* JuegoAgilidad */]("Agilidad Aritmetica", true, "administrador@outlook.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_2__clases_juego_agilidad__["a" /* JuegoAgilidad */]("Agilidad Aritmetica", true, "administrador@outlook.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_3__clases_juego_anagrama__["a" /* JuegoAnagrama */]("Anagrama", false, "leandro_12@hotmail.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Agilidad Aritmetica", false, "leandro_12@hotmail.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_3__clases_juego_anagrama__["a" /* JuegoAnagrama */]("Anagrama", true, "leandro_12@hotmail.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_3__clases_juego_anagrama__["a" /* JuegoAnagrama */]("Anagrama", false, "administrador@outlook.com"));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Adivina El Numero", true, "administrador@outlook.com"));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JuegoServiceService);

//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivosjugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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






var JugadoresService = (function () {
    function JugadoresService(http, archivo) {
        this.http = http;
        this.archivo = archivo;
    }
    JugadoresService.prototype.filtrar = function (url, filtro) {
        var _this = this;
        var modo;
        if (filtro == "gano")
            modo = true;
        if (filtro == "perdio")
            modo = false;
        if (filtro == "todos") {
            return this.archivo
                .httpGetPromise(url)
                .then(function (data) { return data; })
                .catch(this.handleError);
        }
        return this.archivo
            .httpGetPromise(url)
            .then(function (data) {
            _this.userFIlt = data.filter(function (data) { return data.gano === modo; });
            return _this.userFIlt;
        })
            .catch(this.handleError);
    };
    JugadoresService.prototype.extraerDatos = function (resp) {
        return resp.json() || {};
    };
    JugadoresService.prototype.handleError = function (error) {
        return error;
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__["a" /* ArchivosjugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__archivosjugadores_service__["a" /* ArchivosjugadoresService */]) === "function" && _b || Object])
], JugadoresService);

var _a, _b;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/mi-http/mi-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {}; //lo transforma en json
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    return MiHttpService;
}());
MiHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MiHttpService);

var _a;
//# sourceMappingURL=mi-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__ = __webpack_require__("../../../../../src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    return PaisesService;
}());
PaisesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mi_http_mi_http_service__["a" /* MiHttpService */]) === "function" && _a || Object])
], PaisesService);

var _a;
//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);




//https://material.angular.io/guide/getting-started

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map