import { Component } from '@angular/core';
import { Pont } from 'app/pont/pont.model';

@Component({
  selector: 'pont-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class PontApp {
  ponts: Pont[];

  constructor() {
    this.ponts = [
      new Pont('Breakfast', 'Papillon', 'Sandwich club', 'Food', 17, 'https://i.ytimg.com/vi/ScMzIvxBSi4/maxresdefault.jpg', 15),
      new Pont('Best Car', 'Audi', 'Audi A5 Sportback', 'Car', 30000, '', 5),
      new Pont('Parachute', 'Hangariada', 'Adventure time!', 'Adventure', 100,
        'https://s-media-cache-ak0.pinimg.com/736x/6c/c5/15/6cc515743ba301bdd024a4ed06375464.jpg', 8)
    ];
  }

  // sortedPonts(): Pont[] {
  //   return this.ponts.sort((a: Pont, b: Pont) => b.votes - a.votes);
  // }

  addPont(event: any): boolean {
    this.ponts.push(new Pont(event.title, event.place, event.what, event.category, event.price, event.image));
    return false;
  }

  pontWasSelected(pont: Pont): void {
    console.log('Pont clicked: ' + pont);
  }
}
