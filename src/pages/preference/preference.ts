// Written by Dr. Zub
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
})
export class PreferencePage {

  placeholder: any;
  utama: any;
  berita: any;
  analisis: any;
  infografik: any;
  galeri: any;
  soundtrack: any;
  pembaca: any;
  list: any;
  default: any;
  @ViewChild(Nav) nav: Nav;
  selectedTheme: any;
  notification = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public toast: ToastController
  ) {
  }

  removeAll() {
    this.storage.remove('offlineRead');
    let saveRss = this.toast.create({
      message: 'Data dan Cache telah dibuang',
      duration: 3000,
      position: 'bottom',
    });
    saveRss.present();
  }

  ionViewDidLoad() {
  }

}
