import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendMessage(name:string,email:string,message:string){
    return this.http.post("message",{name,email,message})
  }
}
