import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UseriServiceProvider } from '../../providers/useri-service/useri-service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(
    public navCtrl: NavController,
    public userService: UseriServiceProvider
  )  {
    this.getUsers();
  }
  users: any;

  public  getUsers() {
    console.log('comecou');
    this.userService.getUsers().then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  
public  deleteUser(id) {
    this.userService.deleteUser(id).then(data => {
      console.log(data);
      for(let i = 0; i < this.users.length; i++) {
     
        if(this.users[i]['id'] == id){
          console.log("aaaaaaaaaaaa")
          this.users.splice(i , 1);
        }
      }
      });
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.userService.getUsers().then(data => {
        this.users = data;
        console.log(this.users);
        infiniteScroll.complete();
      });
  
    }, 500);
  }

  doRefresh(refresher) {

    console.log('comecou');
    this.userService.getUsers().then(data => {
      this.users = data;
      console.log(this.users);
      refresher.complete();
    });


      

  } 
  
}
  