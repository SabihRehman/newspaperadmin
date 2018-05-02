import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  
  authToken : any;
  user: any;

  constructor( private http : Http ) { }
  
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //http://localhost:3000/
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //http://localhost:3000/
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append( 'Authorization', this.authToken);//localStorage.getItem('id_token') );
    headers.append('Content-Type', 'application/json');
    //http://localhost:3000/

    return this.http.get('users/profile', {headers: headers})
      .map(function( err, res ){
        debugger
          console.log( res )
      });
  }

  loadToken(){
    const token =  localStorage.getItem('token');
    this.authToken = token;
  }
  
  storeUserData( token, user ){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  loggedIn() {
    // return true;
    return tokenNotExpired();
  }
}
