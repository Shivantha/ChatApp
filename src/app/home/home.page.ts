import { Component, ViewChild } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '../../../node_modules/@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
    @ViewChild('username') uname;
    @ViewChild('password') password;

    constructor (public alertCtrl: AlertController,
                 private router: Router,
                 private nav: NavController
    ) {}


 signIn() {
      this.nav.navigateForward("/login");
    
  }

  register(){
    this.nav.navigateForward("/register");
  }

}
