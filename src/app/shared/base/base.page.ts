import { Component, HostListener, Input } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverNotificationComponent } from '../../popover-notification/popover-notification.component';
import { notifications } from '../../data';

@Component({
  selector: 'base-page',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePageComponent {
  @Input() title!: string;
  notifications = notifications;
  dropdownVisible = false;
  isMobileView: boolean = false;

  constructor(
    protected popoverController: PopoverController,
    protected menuController: MenuController
  ) {
    this.checkIfMobile();
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
