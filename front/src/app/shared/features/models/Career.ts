import { CareerContext } from "./CareerContext";

export interface Career {
   id : number;
   name : string;
   place: string;
   beginDate : Date;
   endDate? : Date;
   description : string;
   context : CareerContext
}