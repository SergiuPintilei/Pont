import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PontApp } from './app.component';
import { PontSearchComponent } from './pont-search/pont-search.component';
import { PontItemComponent } from './pont-item/pont-item.component';
import { PontItemListComponent } from './pont-item-list/pont-item-list.component';

@NgModule({
  declarations: [
    PontApp,
    PontSearchComponent,
    PontItemComponent,
    PontItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PontApp]
})
export class AppModule { }
