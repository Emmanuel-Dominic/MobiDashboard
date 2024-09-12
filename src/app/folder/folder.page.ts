import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../shared/base/base.page';
import { MenuController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage extends BasePageComponent implements OnInit {
  public folder!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    protected override popoverController: PopoverController,
    protected override menuController: MenuController
  ) {
    super(popoverController, menuController);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}