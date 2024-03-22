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

  getAccDetails(id:string){
    return this.http.get(`getAcc/${id}`)
  }

  deposit(id:string,amount:number){
    return this.http.put(`accountDeposit/${id}`,{amount})
  }
  
  withdraw(id:string,amount:number){
    return this.http.put(`accountWithdraw/${id}`,{amount})
  }


  deleteAcc(id:string){
    return this.http.delete(`accountDel/${id}`)
  }
}
