import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoodsService } from '../services/foods.service';
import { Location } from '@angular/common';
import { Food } from '../model/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foods-form',
  templateUrl: './foods-form.component.html',
  styleUrls: ['./foods-form.component.scss']
})
export class FoodsFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private service: FoodsService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
   ){
  }

  ngOnInit(): void {
    const food: Food = this.route.snapshot.data['food'];
    this.form = this.formBuilder.group({
      title: [null],
      image: [null],
      price: [null]
    });
    console.log(this.form);
    console.log(this.form.value);
  }

  onSubmit(){
    if(this.form){
    this.service.save(this.form.value).subscribe({
      next: (onSucess) => this.onSucess(),
      error: () =>{
        this.onError();
      },
     });
    } else {
      alert('form invalid')
    }
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Food saved successfully!', '', { duration: 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Error saving food.', '', { duration: 5000});
  }

}
