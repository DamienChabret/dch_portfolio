import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { Project } from '@models/Project';
import { ProjectService } from '@services/ProjectService';
import { NotificationService } from '@utils/NotificationManager';

@Component({
  selector: 'app-add-project',
  templateUrl: './addProject.component.html',
  styleUrls: ['./addProject.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, CommonModule, ReactiveFormsModule, MatInputModule, MatOption, MatSelectModule]
})
export class AddProjectComponent {
  @Output()
  public addProject : EventEmitter<void> = new EventEmitter<void>();
  
  private projectService : ProjectService = inject(ProjectService);
  private notificationService : NotificationService = inject(NotificationService);
    
  public projectForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    shortDescription : new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    githubLink: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    context: new FormControl('', [Validators.required])
  });
  
  async onSubmit() {
    const project : Project = {
      Name: this.projectForm.value.name,
      ShortDescription: this.projectForm.value.shortDescription,
      Description: this.projectForm.value.description,
      Type: this.projectForm.value.type,
      GithubLink: this.projectForm.value.githubLink, 
      Status: this.projectForm.value.status,
      Context: this.projectForm.status
    };
    const response = await this.projectService.addAsync(project);
    if(response == null ) {
      this.notificationService.error("Erreur inconnu")
    }
    else {
      console.log(response);
      this.notificationService.success("Gooood");
    }
    this.addProject.emit();
  }
}
