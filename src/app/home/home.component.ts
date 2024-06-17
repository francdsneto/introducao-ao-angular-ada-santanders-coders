import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListaService } from './lista.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @Output() onGetCatFactsList: EventEmitter<any> = new EventEmitter();
  listOfCats$!: Observable<any>;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.getListFromService();
  }

  getListFromService() {
    this.listOfCats$ = this.listaService.getList();

    this.listaService.getList().subscribe((result: any) => {
      this.onGetCatFactsList.emit(result.data);
    });
  }
}
