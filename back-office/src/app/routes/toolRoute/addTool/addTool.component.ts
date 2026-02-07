import { Tool } from '@models/Tool';
import { ToolService } from '@services/ToolService';
import { MatLabel, MatFormField } from "@angular/material/form-field";
import { Component, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-add-tool',
  templateUrl: './addTool.component.html',
  styleUrls: ['./addTool.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormField, MatLabel]
})
export class AddToolComponent {
  private toolService : ToolService = inject(ToolService);

  public toolForm : FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  onSubmit() {
    const newTool : Tool = {
      Name: this.toolForm.value.name,
      Description: this.toolForm.value.description
    }
    this.toolService.addAsync(newTool);
  }

}
