import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendReview(name:string,email:string,text:string){
    return this.http.post("review",{name,email,text})
  }
}
