import { ProjectStatus } from "./ProjectStatus";
import { ProjectType } from "./ProjectType";

export interface Project {
   id: number;
   name : string;
   shortDescription : string;
   description : string;
   type : ProjectType;
   githubLink? : string;
   status?: ProjectStatus;
   context?: string
   softSkills? : string;
   technologies? : string;
   images: string[];
}