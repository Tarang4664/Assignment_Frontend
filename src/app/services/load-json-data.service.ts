import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonDataService {

  domain: string;
  base_url: string;
  headers:any;

  constructor(private http: HttpClient, private router: Router) { 
    this.domain=environment.domainUrl;
    this.base_url=environment.baseUrl;
  }

  getJsonData(){
    let headers = new HttpHeaders();
    return this.http.get(this.domain + '/' + this.base_url + '/users',{ headers: headers });
  }
}
