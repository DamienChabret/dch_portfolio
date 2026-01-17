import { Component, EventEmitter, OnInit, Output, OutputRef } from '@angular/core';

@Component({
  selector: 'app-AddButton',
  templateUrl: './AddButton.component.html',
  styleUrls: ['./AddButton.component.css'],
  standalone: true
})
export class AddButtonComponent implements OnInit {
  @Output()
  private clickEvent : EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {

  }
  
  sendClickEvent() {
    this.clickEvent.emit();
  }
}
