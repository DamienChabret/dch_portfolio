import { CareerContext } from "./CareerContext";

export interface Career {
   Id? : number;
   Name : string;
   ShortDescription : string;
   Description : string;
   Place: string;
   BeginDate : Date;
   EndDate? : Date;
   Context : CareerContext
   // Tools
   // Skills
}