import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MoovieProvider {
  
  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMoovies()
  {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key=ee5158cb94a57a2c46133c8fc48aa9c6');
  }

}
