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
  selector: 'app-add-career',
  templateUrl: './addCareer.component.html',
  styleUrls: ['./addCareer.component.css'],
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
      Name: this.careerForm.value.name,
      Place: this.careerForm.value.place,
      BeginDate: this.careerForm.value.beginDate,
      EndDate: this.careerForm.value.endDate,
      Description: this.careerForm.value.description,
      Context: this.careerForm.value.context,
      ShortDescription: this.careerForm.value.shortDescription
    };
    const response = await this.careerService.addAsync(career);
    console.log(response);
    this.notificationService.success("Gooood");
  }

}
 