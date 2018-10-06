import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Array<User> = [
    {nome: "Renata", email: "adm@adm", password:'123'}
  ]

  
  constructor() { }

  isValid(user : User) : boolean{
    this.user.forEach( (element)=>{
      if(element.email === user.email && element.password === user.password){
        return true
    }
    })
    return false
  } 
}
