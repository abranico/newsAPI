import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  paisActual: string = "ar"
  a: string = 'ar'
  url = 'https://newsapi.org/v2/top-headlines?' +
        'country=ar&' +
        'apiKey=d99425cca53745b5ab4fd5789cdd2316'

  articulos: any

  noticias: any
  constructor(private http: HttpClient) {

  }

   getNoticias() {
    return this.http.get(this.url)

  }

  cambiarCategoria(value: any){
   this.url = 'https://newsapi.org/v2/top-headlines?' +
   'country=' + this.paisActual + '&' +
   'category=' + value + '&' +
   'apiKey=d99425cca53745b5ab4fd5789cdd2316'
  }

  getPaises(){
    return this.http.get("../assets/paises.json")
  }

  cambiarPais(value: string){
    const a = this.paisActual
    this.url = this.url.replace(a, value)
    this.paisActual = value

  }
}
