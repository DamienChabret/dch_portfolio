import { Injectable } from "@angular/core";
import { Career } from "@models/Career";
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

   public create(career: Career): Promise<Career> {
      const headers: Headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      const request: RequestInfo = new Request(environment.apiUrl + EndpointConfig.CAREERS, {
         method: 'PUT',
         headers: headers,
         body: JSON.stringify(career)
      });

      return fetch(request).then(res => res.json()).then(res => { return res as Career });
   }
}