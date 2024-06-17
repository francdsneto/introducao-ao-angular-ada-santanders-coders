import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input('imagem') imagemUrl!: string;
  @Output() onClickImage: EventEmitter<string> = new EventEmitter();
}
