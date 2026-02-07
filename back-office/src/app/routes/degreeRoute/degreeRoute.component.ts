import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Degree } from '@models/Degree';
import { DegreeService } from '@services/DegreeService';
import { AddButtonComponent } from "@components/buttons/AddButton/AddButton.component";
import { AddDegreeComponent } from './addDegree/addDegree.component';

@Component({
  selector: 'app-degree-route',
  templateUrl: './degreeRoute.component.html',
  styleUrls: ['./degreeRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddDegreeComponent]
})
export class DegreeRouteComponent implements OnInit {
  public degrees : Degree[] = [];
  private degreeService : DegreeService = inject(DegreeService);
  public displayedColumns : string[] = ['Id', 'Name', 'Description', 'BeginDate']
  public displayAddModal! : boolean;

  ngOnInit() {
    this.getAllDegrees();
  }

  private async getAllDegrees() {
    this.degrees = await this.degreeService.getAllAsync();
  }

  public toggleAddModal() : void {
    this.displayAddModal = !this.displayAddModal;
    this.getAllDegrees();
  }
}
