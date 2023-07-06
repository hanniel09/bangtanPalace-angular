import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodsComponent } from './foods/foods/foods.component';

const routes: Routes = [
  {path: '', component: FoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
