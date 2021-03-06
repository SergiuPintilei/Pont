import { Component, OnInit, Input } from '@angular/core';
import { Pont } from 'app/pont/pont.model';

@Component({
  selector: 'pont-item',
  templateUrl: './pont-item.component.html',
  styleUrls: ['./pont-item.component.less']
})
export class PontItemComponent implements OnInit {
  @Input() pont: Pont;
  toggleLikeText = 'Like';

  toggleLike(): boolean {
    if (this.pont.toggleLike()) {
      this.toggleLikeText = 'Unlike';
    } else {
      this.toggleLikeText = 'Like';
    }
    return false;
  }

  ngOnInit() {
  }

}
