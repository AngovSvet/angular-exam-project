import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }

  shouldAppear:boolean=false

  changeStatus() {
    if (this.shouldAppear) {
      this.shouldAppear = false;
    } else {
      this.shouldAppear = true;
    }
  }
}
