import { Component, OnInit } from '@angular/core';
import { Pont } from '../pont/pont.model';

@Component({
  selector: 'pont-item-list',
  templateUrl: './pont-item-list.component.html',
  styleUrls: ['./pont-item-list.component.css']
})
export class PontItemListComponent implements OnInit {
  pontItems: Pont[];

  constructor() {
    this.pontItems = [
      new Pont('Breakfast', 'Papillon', 'Sandwich club - 17 lei', 'Food', 0),
      new Pont('Best Car', 'Audi', 'Audi A5 Sportback - 30000$', 'Car', 0),
      new Pont('Parachute', 'Hangariada', '100$ per person', 'Adventure',  0)
    ];
  }

  ngOnInit() {
  }

}
