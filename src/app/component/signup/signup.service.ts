import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';


interface SignupResponseData{
  kind:string,
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string,
  registered:boolean
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  user =new Subject<User>()
  handleError: any;
  constructor(private http:HttpClient) { }

  signup(email:string,password:string){
    return this.http.post<SignupResponseData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxhYbf-FBAinAXaXi1JC8OrKCzNS1GxtM',
    {
      email:email,
      password:password,
      returnSecureToken:true


    }).pipe(catchError(this.handleError),tap(resData=>{
      const expressionDate=new Date(new Date().getTime()+ +resData.expiresIn*1000 );
      const user=new User(resData.email,resData.localId,resData.idToken,expressionDate);
      this.user.next(user);
    }))
  }
  login(email:string,password:string){
    return this.http.post<SignupResponseData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxhYbf-FBAinAXaXi1JC8OrKCzNS1GxtM',
    {
        email:email,
        password:password,
        returnSecureToken:true
    }).pipe(catchError(this.handleError),tap(resData=>{
      const expressionDate=new Date(new Date().getTime()+ +resData.expiresIn*1000 );
      const user=new User(resData.email,resData.localId,resData.idToken,expressionDate);
      this.user.next(user);
    }))
  }
  logout(){
    this.user.next(null);
  }
}
 