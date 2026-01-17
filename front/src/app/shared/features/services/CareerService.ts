import { Injectable } from "@angular/core";
import { Career } from "@models/Career";
import { CareerContext } from "@models/CareerContext";
import { EndpointConfig } from "app/configs/endpoints.config";
import { environment } from "@environments/environment";

@Injectable({providedIn: 'root'})
export class CareerService {
   public getAll() : Promise<Career[]> {
      return fetch(environment.apiUrl + EndpointConfig.CAREERS)
          .then(res => res.json())
          .then(res => {
             return res as Career[]
          })
   }
   
   public getById(id: string) : Promise<Career> | undefined {
      return fetch(environment.apiUrl + EndpointConfig.CAREERS_ID(id))
      .then(res => res.json())
      .then(res => {
         return res as Career
      })
   }
}