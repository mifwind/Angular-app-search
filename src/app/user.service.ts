import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

    getUser(username: string): Observable<any>{
        return this.http.get(`https://api.github.com/users/${username}`)
            .map( (response: Response) => response.json() )
    }
}