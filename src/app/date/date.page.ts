import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../shared/base/base.page';
import { MenuController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage extends BasePageComponent implements OnInit {
  constructor(
    protected override popoverController: PopoverController,
    protected override menuController: MenuController
  ) {
    super(popoverController, menuController);
  }

  ngOnInit() {}
}
