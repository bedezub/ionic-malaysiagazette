// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EmailPage } from '../email/email';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {
  }

  openEmail() {
    let email = this.modalCtrl.create(EmailPage);
    email.present();
  }

  ionViewDidLoad() {
  }

}
