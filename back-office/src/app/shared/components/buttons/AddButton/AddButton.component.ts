import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './AddButton.component.html',
  styleUrls: ['./AddButton.component.css'],
  standalone: true
})
export class AddButtonComponent {
  @Output()
  private clickEvent : EventEmitter<void> = new EventEmitter<void>();
  
  sendClickEvent() {
    this.clickEvent.emit();
  }
}
