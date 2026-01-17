import { CareerContext } from "./CareerContext";

export interface Career {
   id? : number;
   name : string;
   shortDescription : string;
   description : string;
   place: string;
   beginDate : Date;
   endDate? : Date;
   context : CareerContext
   // Tools
   // Skills
}