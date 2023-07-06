import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods/foods.component';


@NgModule({
  declarations: [
    FoodsComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule
  ]
})
export class FoodsModule { }
