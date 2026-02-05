import { Injectable } from "@angular/core";
import { EndpointConfig } from "app/configs/endpoints.config";
import { environment } from "@environments/environment";
import { Skill } from "@models/Skill";

@Injectable({providedIn: 'root'})
export class SkillService {
    public async getAllAsync() : Promise<Skill[]> {
        return fetch(environment.apiUrl + EndpointConfig.SKILLS)
            .then(res => res.json())
            .then(res => {
                return res as Skill[]
            })
    }
    
    public async getByIdAsync(id: string) : Promise<Skill> {
        return fetch(environment.apiUrl + EndpointConfig.SKILLS_ID(id))
            .then(res => res.json())
            .then(res => {
                return res as Skill
            })
    }

    public async addAsync(skill: Skill) : Promise<Skill> {
      const headers: Headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      const request: RequestInfo = new Request(environment.apiUrl + EndpointConfig.SKILLS, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify(skill)
      });

      return fetch(request).then(res => res.json()).then(res => { return res as Skill });
    }
}