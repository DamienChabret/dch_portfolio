import { Component, inject, OnInit } from '@angular/core';
import { Skill } from '@models/Skill';
import { SkillService } from '@services/SkillService';
import { MatTableModule } from '@angular/material/table';
import { AddButtonComponent } from '@components/buttons/AddButton/AddButton.component';
import { AddSkillComponent } from './addSkill/addSkill.component';

@Component({
  selector: 'app-skill-route',
  templateUrl: './skillRoute.component.html',
  styleUrls: ['./skillRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddSkillComponent]
})
export class SkillRouteComponent implements OnInit {
  private skillService : SkillService = inject(SkillService);
  public skills : Skill[] = [];
  displayedColumns: string[] = ['Id', 'Name'];
  public displayAddModal! : boolean;

  ngOnInit() {
    this.getAllSkills();
    this.displayAddModal = false;
  }

  async getAllSkills() {
    this.skills = await this.skillService.getAllAsync();
  }

  public toggleAddModal() : void {
    this.displayAddModal = !this.displayAddModal;
    this.getAllSkills();
  }
}
