// Written by Dr. Zub
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public superTabsCtrl: SuperTabsController
  ) {
    this.superTabsCtrl.showToolbar(false);
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    this.superTabsCtrl.showToolbar(true);
  }

}
