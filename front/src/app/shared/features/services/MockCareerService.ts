import { Injectable } from "@angular/core";
import { Career } from "@models/Career";
import { CareerContext } from "@models/CareerContext";

@Injectable({providedIn: 'root'})
export class MockCareerService {
   private listOfCareer : Career[] = [
      {
         id: 2,
         name: 'Stage développeur Informatique',
         description: 'développement dIA',
         beginDate: new Date("December 17, 2023 00:00:00"),
         endDate: new Date("December 17, 2024 00:00:00"),
         context: CareerContext.INTERNSHIP,
         place: "Atol Conseil & Développement"
      },
      {
         id: 1,
         description: 'Cours suivi : informatique, base de données, jspas, pas inspiré',
         name: 'BUT Informatique',
         beginDate: new Date("December 10, 2020 00:00:00"),
         endDate: new Date("December 17, 2023 00:00:00"),
         context: CareerContext.EDUCATION,
         place : "IUT Dijon"
      },
      {
         id: 3,
         name: 'Développeur Informatique',
         description: 'Bcp de projets',
         beginDate: new Date("December 17, 2024 00:00:00"),
         endDate: undefined,
         context: CareerContext.CDI,
         place: "Atol Conseil & Développement"
      },
   ];

   public getAll() : Career[] {
      return this.listOfCareer;
   }

   public getById(id: number) : Career | undefined {
      return this.listOfCareer.find(career => career.id == id);
   }
}