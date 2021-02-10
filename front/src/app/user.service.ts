import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: String = ""
  constructor() { }

  connectUser(id: String){
    this.user=id
  }
  disconnectUser(){
    this.user=''
  }
}
