import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{

  user$$ = new BehaviorSubject<User|undefined>(undefined);

  user$ = this.user$$.asObservable()

  user:any

  subscriber:Subscription

  get isLogged(){
    return !!this.user
  }

  constructor( private http:HttpClient) {
    this.subscriber=this.user$.subscribe((user)=>{
      this.user=user
    })
  }

  login(username:string, password:string){
    return this.http.post<User>('user/login',{username,password}).pipe(tap((user)=>this.user$$.next(user)))
  }

  register(username:string, email:string, password:string, rePass:string){
    return this.http.post<User>('user/register',{username,email,password,rePass}).pipe(tap((user)=>this.user$$.next(user)))
  }

  logOut(){
    return this.http.get('user/logout').pipe(tap(()=>this.user$$.next(undefined)))
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

}
