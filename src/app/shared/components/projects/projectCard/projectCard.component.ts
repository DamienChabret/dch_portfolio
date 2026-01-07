import { Component, OnInit, Input } from '@angular/core';
import { ProjectType } from '@models/ProjectType';

@Component({
  selector: 'app-projectCard',
  templateUrl: './projectCard.component.html',
  styleUrls: ['./projectCard.component.css'],
  standalone: true
})
export class ProjectCardComponent implements OnInit {

  @Input()
  public ProjectName : string = "";
  
  @Input()
  public ProjectDescription : string = "";
  
  @Input()
  public ProjectType : ProjectType = null!;


  constructor() { }

  ngOnInit() {
  }

}
