import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  private url = '../assets/php/contact_process.php';

  constructor(private http: HttpClient) { }

    private getDatos(data){
        if(data){
            return true;
        }
        return false;
    }

    contacto(body: string): Observable<boolean>{

        let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

        return this.http.post<boolean>(this.url, body, {headers : headers})
            .map((data) => this.getDatos(data));
    }

}
