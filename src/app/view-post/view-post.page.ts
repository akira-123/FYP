import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.page.html',
  styleUrls: ['./view-post.page.scss'],
})
export class ViewPostPage implements OnInit {
  posts: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore

  ) { }

  ngOnInit() {}
  ionViewWillEnter() {
    this.getPosts();
  }

  async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("plan")
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          place: e.payload.doc.data()["place"],
          date: e.payload.doc.data()["start date"],
          date1: e.payload.doc.data()["end date"],
          message: e.payload.doc.data()["message"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async deletePost(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  await this.firestore.doc("plan/" + id).delete();

  //dismiss loader
  (await loader).dismiss();
}

showToast (message:string){
  this.toastCtrl.create({
    message: message,
    duration: 3000
  }).then(toastData => toastData.present());
}
}
