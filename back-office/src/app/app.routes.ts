import { Routes } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';
import { CareerRouteComponent } from '@routes/careerRoute/careerRoute.component';
import { DegreeRouteComponent } from '@routes/degreeRoute/degreeRoute.component';
import { ProjectRouteComponent } from '@routes/projectRoute/projectRoute.component';
import { SkillRouteComponent } from '@routes/skillRoute/skillRoute.component';
import { ToolRouteComponent } from '@routes/toolRoute/toolRoute.component';

export const routes: Routes = [
  { path: RoutesConfig.CAREERS, component: CareerRouteComponent },
  { path: RoutesConfig.DEGREES, component: DegreeRouteComponent },
  { path: RoutesConfig.PROJECTS, component: ProjectRouteComponent },
  { path: RoutesConfig.SKILLS, component: SkillRouteComponent },
  { path: RoutesConfig.TOOLS, component: ToolRouteComponent },
];
