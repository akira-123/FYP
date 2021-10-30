import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
private loadingCtrl: LoadingController,
private navCtrl: NavController,
private platform: Platform,
    private statusBar: StatusBar,
    public router:Router
) {
  this.initializeApp();
 }
 initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.router.navigateByUrl('splash');
  });
}
ngOnInit() {
}

CreatePrompt()
{
this.alertCtrl.create({
header: 'Sign Out?',
message: 'Are sure to sign out?',

buttons:[
  {
    text:"No",
    handler:(data)=>{
     // alert("user cancelled")
    }
  },
  {
    text:"Yes",
    handler:()=>{
      //alert("The user succesfully sign out");
      this.navCtrl.navigateRoot("start")

    }

  }

]
}).then((promptElement)=>{
promptElement.present();
})
}

}

