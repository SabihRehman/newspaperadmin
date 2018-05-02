import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Injectable()
export class HttpsService {
  api : string;
  
  // private spinnerService: Ng4LoadingSpinnerService
  constructor( 
   public http : Http
    ) {
    this.api = 'http://localhost:3000/api/v1';
   }

   get( url ){
 
      return this.http.get( this.api + url )
      .map( res => res.json() )
   }

   post( url, body ){
      return this.http.post( this.api + url, body )
      .map( res => res.json() )
      
   }

   patch( url, body ){
      return this.http.patch( this.api + url , body )
      .map( res => res.json() )
   }

   put( url, body ){
      return this.http.put( this.api + url, body )
      .map( res => res.json() )
   }

   delete( url ){
      return this.http.delete( this.api + url )
      .map( res => res.json() )
   }
}
