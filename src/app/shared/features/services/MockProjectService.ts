import { Injectable } from "@angular/core";
import { Project } from "@models/Project";
import { ProjectType } from "@models/ProjectType";

@Injectable({providedIn: 'root'})
export class MockProjectService {
   private listOfProjects : Project[] = [
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         name: 'portolio',
         type: ProjectType.WEB,
         github: "http://google.com",
         id: 1
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         name: 'Site cool',
         type: ProjectType.WEB,
         id: 2
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         name: 'Data warehouse',
         type: ProjectType.DATA,
         id: 3
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         name: 'Game unity',
         type: ProjectType.GAME,
         id: 4
      }
   ];

   public getAll() : Project[] {
      return this.listOfProjects;
   }

   public getById(id: number) : Project | undefined {
      return this.listOfProjects.find(project => project.id == id);
   }
}