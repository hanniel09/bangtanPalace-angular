import { FoodsService } from './../services/foods.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodsService: FoodsService){
    
  }

  ngOnInit(): void {
    this.foods = this.foodsService.list();
  }

}
