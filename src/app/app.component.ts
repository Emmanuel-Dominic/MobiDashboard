import { Component, OnInit, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { notifications } from './data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  notifications = notifications;
  isMobileView: boolean = false;
  public appPages = [
    { title: 'Time & Date', url: '/date', icon: 'calendar-outline' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobileView = window.innerWidth >= 768;
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {
      this.checkIfMobile();
    });
  }
}
