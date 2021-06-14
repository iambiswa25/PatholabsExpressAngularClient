import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly serverBaseUrl = environment.server;
  readonly api = "api/";
  actionUrl!: string;
  constructor(private http: HttpClient) {
    this.actionUrl = this.serverBaseUrl + this.api;
  }
  public login(loginvalue: any): Observable<Response> {
    let actionUrl = this.actionUrl + 'User_Admins';
    return this.http.post<Response>(actionUrl, JSON.stringify(loginvalue))
  }
}
