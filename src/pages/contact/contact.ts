import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UseriServiceProvider } from '../../providers/useri-service/useri-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public userService: UseriServiceProvider
  ) {

  }
  users: any;
  user = {name:'', email:'', password:'', cpf: '', born_date:''};

  saveUser() {
    console.log(this.user);
    this.userService.saveUser(this.user).then((result) => {
      console.log(result);
      alert('Usuario inserido');
      // this.users.push(this.user);

      this.user =  {name:'', email:'', password:'', cpf: '', born_date:''};
    }, (err) => {
      console.log(err);
    });
  }



  public  getUsers() {
    console.log('comecou');
    this.userService.getUsers().then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
