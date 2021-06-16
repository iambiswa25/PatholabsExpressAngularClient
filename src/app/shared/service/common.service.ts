import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { serverResponse } from 'src/app/entity/common/response';

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
  public login(loginvalue: any): Observable<serverResponse> {
    let actionUrl = this.actionUrl + 'Login';
    return this.http.post<serverResponse>(actionUrl, JSON.stringify(loginvalue))
  }
}
