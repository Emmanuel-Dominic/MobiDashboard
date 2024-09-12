import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  selectedSegment = "segment1";

  constructor() { }

  ngOnInit() {
  }

  onSegmentChange(event: CustomEvent<any>) {
    this.selectedSegment = event.detail.value;
  }
}
