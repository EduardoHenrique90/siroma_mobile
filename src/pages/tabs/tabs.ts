import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { UseriServiceProvider } from '../../providers/useri-service/useri-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public userService: UseriServiceProvider
  ) {

  }
  users: any;
  public  getUsers() {
    this.userService.getUsers().then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  
public  deleteUser(id) {
    this.userService.deleteUser(id).then(data => {
      console.log(data);
        this.getUsers();
      });
  }
}
