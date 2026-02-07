import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Project } from '@models/Project';
import { ProjectService } from '@services/ProjectService';
import { AddButtonComponent } from "@components/buttons/AddButton/AddButton.component";
import { AddProjectComponent } from './addProject/addProject.component';

@Component({
  selector: 'app-project-route',
  templateUrl: './projectRoute.component.html',
  styleUrls: ['./projectRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddProjectComponent]
})
export class ProjectRouteComponent implements OnInit {
  private projectService : ProjectService = inject(ProjectService);
  public projects : Project[] = [];
  public displayedColumns : string[] = ['Id', 'Name', 'Description', 'GithubLink', 'Context', 'Type', 'Status', 'ShortDescription']
  public displayAddModal! : boolean;

  ngOnInit() {
    this.getAllProjects();
  }

  private async getAllProjects() {
    this.projects = await this.projectService.getAllAsync();
  }

  public toggleAddModal() : void {
    this.displayAddModal = !this.displayAddModal;
    this.getAllProjects(); // TODO: Changer, quand on appuie sur le bouton pour afficher le modal, ça reload les projects et faire un appel pour rien
  }
}
