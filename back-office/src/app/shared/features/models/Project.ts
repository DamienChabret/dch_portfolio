import { ProjectStatus } from "./ProjectStatus";
import { ProjectType } from "./ProjectType";

export interface Project {
   Id?: number;
   Name : string;
   ShortDescription : string;
   Description : string;
   Type : ProjectType;
   GithubLink? : string;
   Status?: ProjectStatus;
   Context?: string
   SoftSkills? : string;
   Technologies? : string;
   Images?: string[];
}