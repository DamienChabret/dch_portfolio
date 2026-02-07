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
    
    public async addAsync(project: Project) : Promise<Project> {
        const headers: Headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        const request: RequestInfo = new Request(environment.apiUrl + EndpointConfig.PROJECTS, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(project)
        });
        return fetch(request).then(res => res.json()).then(res => { return res as Project });
    }
}