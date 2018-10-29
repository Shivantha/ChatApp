import { Component, OnInit, ViewChild } from '@angular/core';


import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { LoginPage } from '../login/login.page';
import { LoginPageModule } from '../login/login.module';
import { Params, ActivatedRoute } from '../../../node_modules/@angular/router';


import { environment } from '../../environments/environment';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.page.html',
  styleUrls: ['./loggedin.page.scss'],
})
export class LoggedinPage implements OnInit {

  username: any;
  message: string = "";


  messages = [];


  constructor(
              public db : AngularFireDatabase,
              public login : LoginPage,
              private activate : ActivatedRoute                  
  ) {

    this.db.list('/chats').valueChanges().subscribe( data => {
      // console.log(data);
      // this.messages = data;
      this.messages = [];
      data.map ( elem => {
        this.messages.push(elem);       
      })

    });
    
    
    
   }

  ngOnInit() { 
   
    this.username = this.activate.snapshot.paramMap.get('name');
    console.log(this.username);
  }

  sendMessage() {
  
   console.log( );
      // this.username = this.user.value;
    console.log(this.username);
    this.db.list('/chats').push( {
      username : this.username,
      message : this.message
  }).then( () => {
    //Message sent

    // console.log(this.username);
    this.message = "";

  })

 


  }
 

}
