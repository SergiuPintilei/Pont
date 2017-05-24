import { Component, OnInit, Input } from '@angular/core';
import { Pont } from 'app/pont/pont.model';

@Component({
  selector: 'pont-image',
  templateUrl: './pont-image.component.html',
  styleUrls: ['./pont-image.component.less']
})
export class PontImageComponent implements OnInit {
  @Input() pont: Pont;
  constructor() { }

  ngOnInit() {
  }

}
