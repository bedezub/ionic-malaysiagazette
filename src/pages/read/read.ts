// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  title: any;
  rssData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public superTabsCtrl: SuperTabsController
  ) {
    this.superTabsCtrl.showToolbar(false);
    this.rssData = this.navParams.get('rssData');
    this.title = this.navParams.get('title');
    console.log(this.title);
  }

  ionViewDidLoad() {
  }

  ionViewWillLeave() {
    this.superTabsCtrl.showToolbar(true);
  }

}
