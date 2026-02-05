import { Component, inject, OnInit } from '@angular/core';
import { Tool } from '@models/Tool';
import { ToolService } from '@services/ToolService';

@Component({
  selector: 'app-tool-route',
  templateUrl: './toolRoute.component.html',
  styleUrls: ['./toolRoute.component.css']
})
export class ToolRouteComponent implements OnInit {

  private toolService : ToolService = inject(ToolService)
  public skills : Tool[] = [];
  displayedColumns: string[] = ['Id', 'Name', 'Description'];
  displayNewToolModal! : boolean;

  async ngOnInit() {
    this.getAllSkills();
  }

  async getAllSkills() {
    this.skills = await this.toolService.getAllAsync();
  }

}
