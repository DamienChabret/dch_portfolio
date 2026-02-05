import { Injectable } from "@angular/core";
import { EndpointConfig } from "app/configs/endpoints.config";
import { environment } from "@environments/environment";
import {Project} from "@models/Project";

@Injectable({providedIn: 'root'})
export class ProjectService {
    public async getAllAsync() : Promise<Project[]> {
        return fetch(environment.apiUrl + EndpointConfig.PROJECTS)
            .then(res => res.json())
            .then(res => {
                return res as Project[]
            })
    }
    
    public async getByIdAsync(id: string) : Promise<Project> {
        return fetch(environment.apiUrl + EndpointConfig.PROJECTS_ID(id))
            .then(res => res.json())
            .then(res => {
                return res as Project
            })
    }
}