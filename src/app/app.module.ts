import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { youTubeServiceInjectables } from './searchResult/youtubeService';
import { PontApp } from './app.component';
import { PontSearchComponent } from './pont-search/pont-search.component';
import { PontItemComponent } from './pont-item/pont-item.component';
import { PontItemListComponent } from './pont-item-list/pont-item-list.component';
import { PontImageComponent } from './pont-image/pont-image.component';
import { PontPriceDisplayComponent } from './pont-price-display/pont-price-display.component';
import { PontFormComponent } from './pont-form/pont-form.component';
import { SearchBox } from './searchResult/youtubeService';
import { SearchResultComponent } from './searchResult/youtubeService';
import { YouTubeSearchComponent } from './searchResult/youtubeService';

@NgModule({
  declarations: [
    PontApp,
    PontSearchComponent,
    PontItemComponent,
    PontItemListComponent,
    PontImageComponent,
    PontPriceDisplayComponent,
    PontFormComponent,
    SearchBox,
    SearchResultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [PontApp]
})
export class PontAppModule { }
