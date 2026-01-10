import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectType } from '@models/ProjectType';
import { CommonModule } from '@angular/common';
import { Project } from '@models/Project';
@Component({
  selector: 'app-projectCard',
  templateUrl: './projectCard.component.html',
  styleUrls: ['./projectCard.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class ProjectCardComponent implements OnInit {
  @Input()
  public Project!: Project;

  @Output()
  public projectEvent : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sendClickEvent() {
    this.projectEvent.emit(this.Project.id);
  }

}
