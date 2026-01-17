import { Injectable } from "@angular/core";
import { Career } from "@models/Career";
import { CareerContext } from "@models/CareerContext";
import { EndpointConfig } from "app/configs/endpoints.config";
import { environment } from "@environments/environment";
import {Project} from "@models/Project";

@Injectable({providedIn: 'root'})
export class ProjectService {
    public getAll() : Promise<Project[]> {
        return fetch(environment.apiUrl + EndpointConfig.PROJECTS)
            .then(res => res.json())
            .then(res => {
                return res as Project[]
            })
    }
    
    public getById(id: string) : Promise<Project> | undefined {
        return fetch(environment.apiUrl + EndpointConfig.PROJECTS_ID(id))
            .then(res => res.json())
            .then(res => {
                return res as Project
            })
    }
}