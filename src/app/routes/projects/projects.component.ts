import { Component, OnInit } from '@angular/core';
import { Project } from '@models/Project';
import { ProjectType } from '@models/ProjectType';
import { ProjectCardComponent } from '@components/projects/projectCard/projectCard.component';
import { CommonModule } from '@angular/common'; // <-- IMPORTANT

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ ProjectCardComponent, CommonModule ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  listOfProjectsByProjectType : Map<string, Project[]> = null!;
  listOfProjects : Project[] = [];
  projectTypeList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.listOfProjectsByProjectType = new Map<string, Project[]>();
    this.projectTypeList = Object.keys(ProjectType);

    this.listOfProjects.push({
      description: 'Description de zinzin',
      name: 'portolio',
      type: ProjectType.WEB
    });

     this.listOfProjects.push({
      description: 'Description de zinzin',
      name: 'Site cool',
      type: ProjectType.WEB
    });

     this.listOfProjects.push({
      description: 'Description de zinzin',
      name: 'Data warehouse',
      type: ProjectType.DATA
    });

     this.listOfProjects.push({
      description: 'Description de zinzin',
      name: 'Game unity',
      type: ProjectType.GAME
    });

    // On trie les projets par catégories
    this.listOfProjects.forEach(x => {
      if (!this.listOfProjectsByProjectType.has(x.type)) {
        this.listOfProjectsByProjectType.set(x.type, []);
      }
      this.listOfProjectsByProjectType.get(x.type)?.push(x);
    });

    console.log(this.listOfProjectsByProjectType);
  }
}
