import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  createAcc(accType:string,currency:string,deposit:number){
    return this.http.post("account/create",{accType,currency,deposit})
  }
}
