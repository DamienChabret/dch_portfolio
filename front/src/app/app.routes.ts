import { Routes } from '@angular/router';
import { CareerComponent } from '@routes/career/career.component';
import { ContactComponent } from '@routes/contact/contact.component';
import { HomeRouteComponent } from '@routes/homeRoute/homeRoute.component';
import { ProjectComponent } from '@routes/project/project.component';
import { ProjectsComponent } from '@routes/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent},
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent }
];
