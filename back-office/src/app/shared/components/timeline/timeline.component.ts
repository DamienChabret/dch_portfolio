import {Component, Input, LOCALE_ID, OnInit} from '@angular/core';
import { Career } from '@models/Career';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  imports: [ CommonModule ],
  standalone: true
})
export class TimelineComponent implements OnInit {
  @Input()
  public listOfCareer : Career[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
