import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UseriServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() 
export class UseriServiceProvider {

  constructor(public http: Http) {
    console.log('Hello UseriServiceProvider Provider');
  }
  apiUrl = 'http://localhost/challenge_siroma/public/api';
  data : any;
  getUsers () {
    // return "Serviço";
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/user')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteUser(id) {
    console.log("id que chefou",id);
    // console.log("url que vou montar nessa porra",id);?
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/user/'+ id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
