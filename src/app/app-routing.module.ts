import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentModule} from './component/component.module';

const routes: Routes = [
  {
    path: '*',
    resolve: ComponentModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
