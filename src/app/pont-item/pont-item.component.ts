import { Component, OnInit, Input } from '@angular/core';
import { Pont } from '../pont/pont.model';

@Component({
  selector: 'pont-item',
  templateUrl: './pont-item.component.html',
  styleUrls: ['./pont-item.component.css']
})
export class PontItemComponent implements OnInit {
  @Input() pont: Pont;

  voteUp(): boolean {
    this.pont.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.pont.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
