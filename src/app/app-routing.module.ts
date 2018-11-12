import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentModule} from './component/component.module';

const routes: Routes = [
  {
    path: '*',
    loadChildren: './component/component.module#ComponentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
