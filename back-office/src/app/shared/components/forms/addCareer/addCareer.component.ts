import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import { NotificationService } from '@utils/NotificationManager';
import { CareerService } from '@services/CareerService';
import { Career } from '@models/Career';
import { CareerContext } from '@models/CareerContext';

@Component({
  selector: 'app-addCareer',
  templateUrl: './addCareer.component.html',
  styleUrls: ['../form.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, CommonModule, ReactiveFormsModule, MatInputModule, MatOption, MatSelectModule]
})
export class AddCareerComponent  {
  private careerService : CareerService = inject(CareerService);
  private notificationService : NotificationService = inject(NotificationService);
  
  public careerContextList: string[] = Object.keys(CareerContext);

  public careerForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    place: new FormControl('', [Validators.required]),
    beginDate: new FormControl(new Date(), [Validators.required]),
    endDate: new FormControl(new Date()),
    description: new FormControl('', [Validators.required]),
    context: new FormControl(CareerContext.CDD, [Validators.required]),
    shortDescription: new FormControl('', [Validators.required])
  });

  async onSubmit() {
    const career : Career = {
      name: this.careerForm.value.name,
      place: this.careerForm.value.place,
      beginDate: this.careerForm.value.beginDate,
      endDate: this.careerForm.value.endDate,
      description: this.careerForm.value.description,
      context: this.careerForm.value.context,
      shortDescription: this.careerForm.value.shortDescription
    };
    const response = await this.careerService.create(career);
    console.log(response);
    this.notificationService.success("Gooood");
  }

}
 