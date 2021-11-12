import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../register/model/post.mode';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  post = {} as Post;
  id: any;
  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){

    //show loader
  let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
  
    this.firestore.doc("contact/" + id)
    .valueChanges()
    .subscribe(data => {
      this.post.name = data["name"];
      this.post.date = data["date"];
      this.post.date1 = data["date1"];
      this.post.message = data["message"];
    });
    //dismiss loader
    (await loader).dismiss();
    }
  
    async updatePost(post: Post){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        try{
         
          await this.firestore.doc("contact/" + this.id).update(post);
        } catch(e){
          this.showToast(e);
        }
        //dismiss loader
        (await loader).dismiss();
    
        //redirect to view post page
        this.navCtrl.navigateRoot("view-post");
        }
    }
  
    formValidation(){
      if(!this.post.name){
        this.showToast("Enter name");
        return false;
      }

      if(!this.post.date){
        this.showToast("Enter date");
        return false;
      }
      if(!this.post.date1){
        this.showToast("Enter date1");
        return false;
      }
  
      if(!this.post.message){
        this.showToast("Enter message");
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
  
