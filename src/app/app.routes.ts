import { Routes } from '@angular/router';
import { HomeRouteComponent } from '@routes/homeRoute/homeRoute.component';
import { ProjectsComponent } from '@routes/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'projects', component: ProjectsComponent }
];
