import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Degree } from "@models/Degree"
import { EndpointConfig } from "app/configs/endpoints.config";

Injectable({ providedIn: 'root' })
export class DegreeService {
   public async getByIdAsync(id : string): Promise<Degree> {
      return fetch(environment.apiUrl + EndpointConfig.DEGREE_ID(id)).then(res => res.json()).then(res => { return res as Degree})
   }

   public async getAllAsync(): Promise<Degree[]> {
      return fetch(environment.apiUrl + EndpointConfig.DEGREE).then(res => res.json()).then(res => { return res as Degree[]})
   }

   public async addAsync(degree : Degree) : Promise<Degree> {
      const headers: Headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      const request: RequestInfo = new Request(environment.apiUrl + EndpointConfig.DEGREE, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify(degree)
      });
      return fetch(request).then(res => res.json()).then(res => { return res as Degree });
   }
}