import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@models/Project';
import { MockProjectService } from '@services/MockProjectService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectComponent implements OnInit {
  private projectService : MockProjectService = inject(MockProjectService);
  project! : Project | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const ProjectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getById(Number(ProjectId));
  }

}
