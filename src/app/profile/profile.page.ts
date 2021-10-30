import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../register/model/user.mode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  uid: string;
  user = {} as User;

  constructor(private afAuth:AngularFireAuth, private afStore: AngularFirestore) { }

  ngOnInit() {
    this.getInfo();
  }
  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.uid);

    //getting current user's basic info
    this.afStore
      .doc("UserInfo/" + this.uid)
      .valueChanges()
      .subscribe((data) => {
        this.user.name=data['name'];
        this.user.email=data['email'];
        this.user.password=data['password'];
      });
  }
}