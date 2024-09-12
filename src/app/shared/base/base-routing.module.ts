import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePageComponent } from './base.page';

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
