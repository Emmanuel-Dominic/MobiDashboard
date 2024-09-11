import { Component, inject, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notifications } from '../data';
import { PopoverController, MenuController } from '@ionic/angular';
import { PopoverNotificationComponent } from '../popover-notification/popover-notification.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  notifications = notifications;
  dropdownVisible = false;
  isMobileView: boolean = false;
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(private popoverController: PopoverController, private menuController: MenuController) {
    this.checkIfMobile();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobileView = window.innerWidth < 768;
  }

  async openNotifications(event: Event) {
    if (this.isMobileView) {
      this.menuController.open('notifications');
    } else {
      const popover = await this.popoverController.create({
        component: PopoverNotificationComponent,
        cssClass: 'popover-400px',
        event: event,
        translucent: true,
        componentProps: { notifications: this.notifications },
      });
      await popover.present();
    }
  }
}
