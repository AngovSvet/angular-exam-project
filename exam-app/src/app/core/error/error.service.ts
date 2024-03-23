import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$$=new BehaviorSubject(null)
  error$=this.error$$.asObservable()
  
  constructor() { }

  setError(error:any):void{
    this.error$$.next(error)
  }
}
