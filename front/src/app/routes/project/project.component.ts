import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@models/Project';
import { MockProjectService } from '@services/MockProjectService';
import { CommonModule } from '@angular/common';
import { PrimaryCarouselComponent } from '@components/primaryCarousel/primaryCarousel.component';
import {ProjectService} from "@services/ProjectService";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  imports: [CommonModule, PrimaryCarouselComponent],
  standalone: true
})
export class ProjectComponent implements OnInit {
  private projectService : ProjectService = inject(ProjectService);
  project! : Project | undefined;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const ProjectId = this.route.snapshot.paramMap.get('id');
    if(ProjectId)
      this.project = await this.projectService.getById(ProjectId);
  }
}
