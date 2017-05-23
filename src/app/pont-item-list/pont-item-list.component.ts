import { Component, OnInit, Input } from '@angular/core';
import { Pont } from '../pont/pont.model';

@Component({
  selector: 'pont-item-list',
  templateUrl: './pont-item-list.component.html',
  styleUrls: ['./pont-item-list.component.css']
})
export class PontItemListComponent implements OnInit {
  @Input() pontItems: Pont[];

  constructor() {
  }

  ngOnInit() {
  }

}
