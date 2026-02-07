import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { Degree } from '@models/Degree';
import { DegreeService } from '@services/DegreeService';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-degree',
  templateUrl: './addDegree.component.html',
  styleUrls: ['./addDegree.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormField, MatLabel, MatHint, MatDatepickerModule, MatFormFieldModule, ReactiveFormsModule]
})
export class AddDegreeComponent {
  private degreeService : DegreeService = inject(DegreeService);
  
  public degreeForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dateObtained: new FormControl(new Date(), [Validators.required])
  });

  public async onSubmit() {
    const degree : Degree = {
      Name: this.degreeForm.value.name,
      Description: this.degreeForm.value.name,
      DateObtained: this.degreeForm.value.dateObtained
    };
    await this.degreeService.addAsync(degree);
  }

}
