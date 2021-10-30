import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../register/model/post.mode';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {
  post = {} as Post;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  
  ) { }

  ngOnInit() {}

  async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{

      await this.firestore.collection("plan").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to view page
    this.navCtrl.navigateRoot("view-post");
    }
  }
  
  formValidation(){
    if(!this.post.place){
      this.showToast("Enter place");
      return false;
    }

    if(!this.post.date){
      this.showToast("Select Start Date");
      return false;
    }

    if(!this.post.date1){
      this.showToast("Select End Date");
      return false;
    }

    if(!this.post.message){
      this.showToast("Enter Note");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }
}
