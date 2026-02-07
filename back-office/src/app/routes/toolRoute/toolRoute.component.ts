import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Tool } from '@models/Tool';
import { ToolService } from '@services/ToolService';
import { AddButtonComponent } from "@components/buttons/AddButton/AddButton.component";
import { AddToolComponent } from './addTool/addTool.component';

@Component({
  selector: 'app-tool-route',
  templateUrl: './toolRoute.component.html',
  styleUrls: ['./toolRoute.component.css'],
  standalone: true,
  imports: [MatTableModule, AddButtonComponent, AddToolComponent]
})
export class ToolRouteComponent implements OnInit {

  private toolService : ToolService = inject(ToolService)
  public tools : Tool[] = [];
  public displayedColumns: string[] = ['Id', 'Name', 'Description'];
  public displayAddModal! : boolean;

  async ngOnInit() {
    this.getAllTools();
    this.displayAddModal = false;
  }

  async getAllTools() {
    this.tools = await this.toolService.getAllAsync();
  }

  public toggleAddModal() : void{
    this.displayAddModal = !this.displayAddModal;
  }
}
