import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pont-price-display',
  templateUrl: './pont-price-display.component.html',
  styleUrls: ['./pont-price-display.component.less']
})
export class PontPriceDisplayComponent implements OnInit {
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
