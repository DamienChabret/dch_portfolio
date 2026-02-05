import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Tool } from "@models/Tool";
import { EndpointConfig } from "app/configs/endpoints.config";

Injectable({ providedIn: 'root'})
export class ToolService {
   public async getAllAsync() : Promise<Tool[]>{
      return fetch(environment.apiUrl + EndpointConfig.TOOLS)
         .then((res) => res.json())
         .then(res => { return res as Tool[]})
   }

   public async addAsync(tool : Tool) : Promise<Tool> {
      const headers: Headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      const request: RequestInfo = new Request(environment.apiUrl + EndpointConfig.TOOLS, {
               method: 'POST',
               headers: headers,
               body: JSON.stringify(tool)
            });
      
      return fetch(request).then(res => res.json()).then(res => { return res as Tool });
   }
}