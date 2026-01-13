import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [ MatFormFieldModule, MatButtonModule, FormsModule, CommonModule, ReactiveFormsModule , MatInputModule]
})
export class ContactComponent implements OnInit {

  public form : FormGroup = new FormGroup({
    identity: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
