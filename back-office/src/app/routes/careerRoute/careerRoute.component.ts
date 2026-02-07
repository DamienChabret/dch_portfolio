import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Career } from '@models/Career';
import { CareerService } from '@services/CareerService';
import { AddButtonComponent } from "@components/buttons/AddButton/AddButton.component";
import { AddCareerComponent } from './addCareer/addCareer.component';

@Component({
  selector: 'app-career-route',
  templateUrl: './careerRoute.component.html',
  styleUrls: ['./careerRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddCareerComponent]
})
export class CareerRouteComponent implements OnInit {
  private careerService : CareerService = inject(CareerService);
  public careers : Career[] = [];
  public displayedColumns: string[] = ['Id', 'Name', 'ShortDescription', 'Description', 'Place', 'BeginDate', 'EndDate', 'Context'];
  public displayAddModal! : boolean;

  ngOnInit() {
    this.getAllCareers();
  }

  async getAllCareers() {
    this.careers = await this.careerService.getAllAsync();
  }

  public toggleAddModal() : void {
    this.displayAddModal = !this.displayAddModal;
    this.getAllCareers();
  }

}
