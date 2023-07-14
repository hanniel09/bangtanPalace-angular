import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { FoodsFormComponent } from './foods-form/foods-form.component';

const routes: Routes = [
  {path: '', component: FoodsComponent},
  {path: 'newfood', component: FoodsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
