import { Component, inject, OnInit } from '@angular/core';
import { Skill } from '@models/Skill';
import { SkillService } from '@services/SkillService';
import { MatTableModule } from '@angular/material/table';
import { AddButtonComponent } from '@components/buttons/AddButton/AddButton.component';
import { AddCareerComponent } from "@components/forms/addCareer/addCareer.component";
import { AddSkillComponent } from "@components/forms/addSkill/addSkill.component";

@Component({
  selector: 'app-skillRoute',
  templateUrl: './skillRoute.component.html',
  styleUrls: ['./skillRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddCareerComponent, AddSkillComponent]
})
export class SkillRouteComponent implements OnInit {
  private skillService : SkillService = inject(SkillService);
  public skills : Skill[] = [];
  displayedColumns: string[] = ['Id', 'Name'];
  displayNewSkillModal! : boolean;

  ngOnInit() {
    this.getAllSkills();
    this.displayNewSkillModal = false;
  }

  async getAllSkills() {
    this.skills = await this.skillService.getAll();
  }

  toggleNewSkillModal() {
    this.displayNewSkillModal = !this.displayNewSkillModal;
    this.getAllSkills();
  }
}
