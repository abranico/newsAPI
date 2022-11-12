import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  noticias: any
  articulos: any
  paises: any
  paisActual = ""
  seleccionado = ""
  constructor(private _noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticias = this._noticiasService.getNoticias()
    .subscribe((data) => {
      this.noticias = data;
      this.articulos = this.noticias.articles
    })
    this.paises = this._noticiasService.getPaises()
      .subscribe((data)=>{
        this.paises = data
      })
  }



  cambiarCategoria(event: any){
    switch(event.path[0].textContent){
      case "Últimas Noticias":
        this._noticiasService.cambiarCategoria('general');
        break;
      case "Negocios":
        this._noticiasService.cambiarCategoria('business');
        break;
      case "Entretenimiento":
        this._noticiasService.cambiarCategoria('entertainment');
        break;
      case "Salud":
        this._noticiasService.cambiarCategoria('health');
        break;
      case "Ciencia":
        this._noticiasService.cambiarCategoria('science');
        break;
      case "Deportes":
        this._noticiasService.cambiarCategoria('sports');
        break;
      case "Tecnología":
        this._noticiasService.cambiarCategoria('technology');
        break;
    }
    this.actualizarNoticias()

  }

  actualizarNoticias(){
    this.noticias = this._noticiasService.getNoticias()
    .subscribe((data) => {
      this.noticias = data;
      this.articulos = this.noticias.articles
    })

  }

  cambiarPais(value: string){
    const nValor = value.toLowerCase()
    this._noticiasService.cambiarPais(nValor)
    this.actualizarNoticias()

  }


}


