import { Injectable } from "@angular/core";
import { Project } from "@models/Project";
import { ProjectStatus } from "@models/ProjectStatus";
import { ProjectType } from "@models/ProjectType";

@Injectable({providedIn: 'root'})
export class MockProjectService {
   private listOfProjects : Project[] = [
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         name: 'portolio',
         type: ProjectType.WEB,
         githubLink: "http://google.com",
         id: 1,
         images: ["assets/images/image1.jpg"],
         status: ProjectStatus.IN_PROGRESS
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         githubLink: "http://google.com",
         name: 'Site cool',
         type: ProjectType.WEB,
         id: 2,
         images: ["assets/images/image1.jpg", "assets/images/image2.jpg"],
         status: ProjectStatus.DONE
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         githubLink: "http://google.com",
         name: 'Data warehouse',
         type: ProjectType.DATA,
         id: 3,
         images: ["assets/images/image1.jpg", "assets/images/image2.jpg", "assets/images/image3.jpg"],
         status: ProjectStatus.IN_PROGRESS
      },
      {
         description: 'Description de zinzin',
         shortDescription: 'Description de zinzin',
         githubLink: "http://google.com",
         name: 'Game unity',
         type: ProjectType.GAME,
         id: 4,
         images: [],
         status: ProjectStatus.DONE
      }
   ];

   public getAll() : Project[] {
      return this.listOfProjects;
   }

   public getById(id: number) : Project | undefined {
      return this.listOfProjects.find(project => project.id == id);
   }
}