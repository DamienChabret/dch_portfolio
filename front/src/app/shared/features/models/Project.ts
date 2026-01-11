import { ProjectType } from "./ProjectType";

export interface Project {
   id: number;
   name : string;
   shortDescription : string;
   description : string;
   type : ProjectType;
   github? : string;
}
