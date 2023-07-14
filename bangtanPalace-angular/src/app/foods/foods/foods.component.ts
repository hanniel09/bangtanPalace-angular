import { FoodsService } from './../services/foods.service';
import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})

export class FoodsComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodsService: FoodsService,
    private router: Router,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.foods = this.foodsService.list();
  }

  onAdd(){
    this.router.navigate(['newfood'], {relativeTo: this.route })
  }

}
