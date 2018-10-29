import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

import { AlertController, NavController } from '@ionic/angular';
import { Params, Router } from '../../../node_modules/@angular/router';
import { LoggedinPage } from '../loggedin/loggedin.page';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 

  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private fire : AngularFireAuth,
              private alertController: AlertController,
              private navCtr : NavController
       
              
             
  ) { }

  
  ngOnInit() {
       
  }
  async alert(message: string) {
    const alert = await this.alertController.create({
      header: 'Info!',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
    
  }


  signInUser() {
    // console.log(this.user);
  this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log('got some data');
      this.alert('Success! You are Login');
      this.navCtr.navigateForward(`/loggedin/${this.user.value}`);
      
    })

    .catch(error => {
      this.alert(error.message);
      console.log('got an error', error);

      
    })
  }
  
}
