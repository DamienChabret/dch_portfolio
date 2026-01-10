import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@models/Project';
import { ProjectType } from '@models/ProjectType';
import { ProjectCardComponent } from '@components/projects/projectCard/projectCard.component';
import { MockProjectService } from '@services/MockProjectService';
import { Router } from '@angular/router';
import { RouteUrl } from 'app/options/routesOptions';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ ProjectCardComponent, CommonModule ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  private router = inject(Router);
  private projectService : MockProjectService = inject(MockProjectService);
  listOfProjectsByProjectType : Map<string, Project[]> = null!;
  listOfProjects : Project[] = [];
  constructor(router : Router) { }

  ngOnInit() {
    this.listOfProjectsByProjectType = new Map<string, Project[]>();

    this.listOfProjects = this.projectService.getAll();

    // On trie les projets par catégories
    this.listOfProjects.forEach(x => {
      if (!this.listOfProjectsByProjectType.has(x.type)) {
        this.listOfProjectsByProjectType.set(x.type, []);
      }
      this.listOfProjectsByProjectType.get(x.type)?.push(x);
    });
  }

  navigateToProjectDetails(id: number) {
    this.router.navigateByUrl(RouteUrl.PROJECT(id));
  }
}
