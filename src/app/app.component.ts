import { Component } from '@angular/core';
import { Pont } from './pont/pont.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ponts: Pont[];

  constructor() {
    this.ponts = [
      new Pont('Breakfast', 'Papillon', 'Sandwich club - 17 lei', 'Food', 0),
      new Pont('Best Car', 'Audi', 'Audi A5 Sportback - 30000$', 'Car', 0),
      new Pont('Parachute', 'Hangariada', '100$ per person', 'Adventure', 0)
    ];
  }

  sortedPonts(): Pont[] {
    return this.ponts.sort((a: Pont, b: Pont) => b.votes - a.votes);
  }

  addPont(title: HTMLInputElement, where: HTMLInputElement, what: HTMLInputElement, category: HTMLInputElement): boolean {
    console.log(`Adding pont: title = ${title.value}; where = ${where.value}; what = ${what.value}; category = ${category.value}`);
    this.ponts.push(new Pont(title.value, where.value, what.value, category.value, 0));
    title.value = '';
    where.value = '';
    what.value = '';
    category.value = '';
    return false;
  }
}
