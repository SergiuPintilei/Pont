import { Pont } from './../pont/pont.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'pont-form',
  templateUrl: './pont-form.component.html',
  styleUrls: ['./pont-form.component.less']
})
export class PontFormComponent {
  @Output() onPontAdded: EventEmitter<Pont>;
  myForm: FormGroup;
  title: AbstractControl;
  place: AbstractControl;
  what: AbstractControl;
  category: AbstractControl;
  price: AbstractControl;
  image: AbstractControl;

  constructor(fb: FormBuilder) {
    this.onPontAdded = new EventEmitter();
    this.myForm = fb.group({
      'title': ['', Validators.required],
      'place': ['', Validators.required],
      'what': ['', Validators.required],
      'category': ['', Validators.required],
      'price': ['', Validators.required],
      'image': ['', Validators.required]
    });
    this.title = this.myForm.controls['title'];
    this.place = this.myForm.controls['place'];
    this.what = this.myForm.controls['what'];
    this.category = this.myForm.controls['category'];
    this.price = this.myForm.controls['price'];
    this.image = this.myForm.controls['image'];

    // this.title.valueChanges.subscribe(
    //   (value: string) => {
    //     if (value.length >= 3) {
    //       console.log('Title changed to: ', value);
    //     }
    //   }
    // );

    // this.myForm.valueChanges.subscribe(
    //   (form: any) => {
    //     console.log('Form changed to: ', form);
    //   }
    // );
  }

  onSubmit(form: any): void {
    this.onPontAdded.emit(form);
    console.log('You submitted value: ', form);
    this.myForm.reset();
  }
}
