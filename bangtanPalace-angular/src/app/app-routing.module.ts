import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 { path: '', pathMatch:'full', redirectTo: 'foods'},
 {
  path: 'foods',
  loadChildren: () => import('./foods/foods.module').then(m => m.FoodsModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
