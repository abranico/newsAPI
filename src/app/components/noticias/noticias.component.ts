import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  @Input() articulos: any
  constructor(private _noticiasService: NoticiasService){}

  ngOnInit() {

  }



}
