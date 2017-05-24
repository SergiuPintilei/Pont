import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pont } from 'app/pont/pont.model';

@Component({
  selector: 'pont-item-list',
  templateUrl: './pont-item-list.component.html',
  styleUrls: ['./pont-item-list.component.css']
})
export class PontItemListComponent implements OnInit {
  @Input() pontItems: Pont[];
  @Output() onPontSelected: EventEmitter<Pont>;
  private currentPont: Pont;

  constructor() {
    this.onPontSelected = new EventEmitter();
  }

  clicked(pont: Pont): void {
    this.currentPont = pont;
    this.onPontSelected.emit(pont);
  }

  isSelected(pont: Pont): boolean {
    if (!pont || !this.currentPont) {
      return false;
    }
    return pont.title === this.currentPont.title;
  }

  ngOnInit() {
  }

}
