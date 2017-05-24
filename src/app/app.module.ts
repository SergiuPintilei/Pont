import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PontApp } from './app.component';
import { PontSearchComponent } from './pont-search/pont-search.component';
import { PontItemComponent } from './pont-item/pont-item.component';
import { PontItemListComponent } from './pont-item-list/pont-item-list.component';
import { PontImageComponent } from './pont-image/pont-image.component';
import { PontPriceDisplayComponent } from './pont-price-display/pont-price-display.component';
import { PontFormComponent } from './pont-form/pont-form.component';

@NgModule({
  declarations: [
    PontApp,
    PontSearchComponent,
    PontItemComponent,
    PontItemListComponent,
    PontImageComponent,
    PontPriceDisplayComponent,
    PontFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PontApp]
})
export class PontAppModule { }
