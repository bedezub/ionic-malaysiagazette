// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ReadOfflinePage } from '../read-offline/read-offline';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage {

  offlines: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public database: DatabaseProvider
  ) {
    this.database.passRss().then(offlineRead => {
      this.offlines = offlineRead;
      console.log('Offline', this.offlines);
    });
  }

  openRead(offline) {
    this.navCtrl.push(ReadOfflinePage, {rssData: offline});
    console.log('Push RSS to Read', offline);
  }
  
  dismiss() {
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {

  }

}
