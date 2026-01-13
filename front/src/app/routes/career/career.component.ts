import { CommonModule } from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { Career } from '@models/Career';
import { TimelineComponent } from '@components/timeline/timeline.component';
import { CareerService } from '@services/CareerService';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  standalone: true,
  imports: [ CommonModule, TimelineComponent ]
})
export class CareerComponent implements OnInit {
  private projectService : CareerService = inject(CareerService);
  listOfCareers : Career[] = [];

  constructor() { }

  async ngOnInit() {
    // On trie par ordre de plus récent au plus ancien
    this.listOfCareers = (await this.projectService.getAll()).sort((a: Career, b : Career) => {
      return a.beginDate.valueOf() - b.beginDate.valueOf()
    });
  }

}
