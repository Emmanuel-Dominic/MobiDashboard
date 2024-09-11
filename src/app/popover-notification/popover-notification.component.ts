import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { notifications } from '../data';


@Component({
  selector: 'app-popover-notification',
  templateUrl: './popover-notification.component.html',
  styleUrls: ['./popover-notification.component.scss'],
})
export class PopoverNotificationComponent  implements OnInit {
  isMobileView: boolean = false;
  @Input() notifications: any[] = [];

  constructor(private popoverController: PopoverController) {
    this.checkIfMobile();
    this.initializeNotifications();
  }

  ngOnInit() {}


  checkIfMobile() {
    this.isMobileView = window.innerWidth < 768;
  }

  closePopover() {
    this.popoverController.dismiss();
  }

  initializeNotifications() {
    this.notifications = notifications;
  }
}
