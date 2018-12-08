import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentPageComponent} from './content-page.component';

const routes: Routes = [
  {
    path: ':contentPage',
    component: ContentPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPageRoutingModule { }
