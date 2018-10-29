import { Component, OnInit, ViewChild } from '@angular/core';

import {  AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private fire: AngularFireAuth,
              private alertController : AlertController
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


  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then( data => {
      // console.log('got data', data);
      this.alert('Registered!');
    })
    .catch(error => {
      this.alert(error.message);
      console.log('got the error', error);
    } )
  }

}
