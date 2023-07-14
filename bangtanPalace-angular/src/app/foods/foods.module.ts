import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods/foods.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FoodsFormComponent } from './foods-form/foods-form.component';

@NgModule({
  declarations: [
    FoodsComponent,
    FoodsFormComponent
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    AppMaterialModule
  ]
})
export class FoodsModule { }
