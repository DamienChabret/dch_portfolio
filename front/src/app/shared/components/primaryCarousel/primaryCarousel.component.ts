import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primaryCarousel',
  templateUrl: './primaryCarousel.component.html',
  styleUrls: ['./primaryCarousel.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ CommonModule ],
})
export class PrimaryCarouselComponent implements OnInit {
  @Input()
  public listOfImages : string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
