import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasePageRoutingModule } from './base-routing.module';
import { BasePageComponent } from './base.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasePageRoutingModule
  ],
  declarations: [BasePageComponent]
})
export class BasePageModule {}
