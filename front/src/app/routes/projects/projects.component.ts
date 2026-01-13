import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@models/Project';
import { ProjectCardComponent } from '@components/projects/projectCard/projectCard.component';
import { Router } from '@angular/router';
import { RoutesConfig } from 'app/configs/routes.config';
import {ProjectService} from "@services/ProjectService";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ ProjectCardComponent, CommonModule ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  private router = inject(Router);
  private projectService : ProjectService = inject(ProjectService);
  listOfProjectsByProjectType : Map<string, Project[]> = null!;
  listOfProjects : Project[] = [];
  constructor(router : Router) { }

  async ngOnInit() {
    this.listOfProjectsByProjectType = new Map<string, Project[]>();

    this.listOfProjects = await this.projectService.getAll();

    // On trie les projets par catégories
    this.listOfProjects.forEach(x => {
      if (!this.listOfProjectsByProjectType.has(x.type)) {
        this.listOfProjectsByProjectType.set(x.type, []);
      }
      this.listOfProjectsByProjectType.get(x.type)?.push(x);
    });
  }

  navigateToProjectDetails(id: number) {
    this.router.navigateByUrl(RoutesConfig.PROJECT(id));
  }
}
