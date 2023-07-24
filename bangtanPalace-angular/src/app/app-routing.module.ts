import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './foods/cart/cart.component';


const routes: Routes = [
 { path: '', pathMatch:'full', redirectTo: 'foods'},
 {
  path: 'foods',
  loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
},
{path: 'myCart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
