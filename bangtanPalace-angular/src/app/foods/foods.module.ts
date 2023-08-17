import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods/foods.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FoodsFormComponent } from './foods-form/foods-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AuthRegisterComponent } from './auth/auth-register/auth-register.component';

@NgModule({
  declarations: [
    FoodsComponent,
    FoodsFormComponent,
    CartComponent,
    AuthRegisterComponent,
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class FoodsModule { }
