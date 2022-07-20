import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateJsonDataService {

  domain: string;
  base_url: string;
  headers:any;

  constructor(private http: HttpClient, private router: Router) { 
    this.domain=environment.domainUrl;
    this.base_url=environment.baseUrl;
  }

  updateJsonData(Name : string ,Price : number){
    let headers = new HttpHeaders();

    let data ={
          "Name":Name,
          "Price":Price
    }

    return this.http.post(this.domain + '/' + this.base_url + '/users',data,{ headers: headers });

  }
}
