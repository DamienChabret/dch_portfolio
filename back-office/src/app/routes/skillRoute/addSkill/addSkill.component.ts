import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { SkillService } from '@services/SkillService';
import { Skill } from "@models/Skill";
import { NotificationService } from '@utils/NotificationManager';

@Component({
  selector: 'app-add-skill',
  templateUrl: './addSkill.component.html',
  styleUrls: ['./addSkill.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, CommonModule, ReactiveFormsModule, MatInputModule, MatOption, MatSelectModule]
})
export class AddSkillComponent  {
  @Output()
  public addSkill : EventEmitter<void> = new EventEmitter<void>();

  private skillService : SkillService = inject(SkillService);
  private notificationService : NotificationService = inject(NotificationService);
  
  public skillForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  async onSubmit() {
    const skill : Skill = {
      Name: this.skillForm.value.name
    };
    const response = await this.skillService.addAsync(skill);
    if(response == null ) {
      this.notificationService.error("Erreur inconnu")
    }
    else {
      console.log(response);
      this.notificationService.success("Gooood");
    }
    this.addSkill.emit();
  }

}
 