import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [BannerComponent, HomeComponent],
  imports: [CommonModule],
  exports: [BannerComponent, HomeComponent],
})
export class HomeModule {}
