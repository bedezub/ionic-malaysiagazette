// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ReadOfflinePage } from '../read-offline/read-offline';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast';
import { ReadGaleriPage } from '../read-galeri/read-galeri';

@Component({
  selector: 'page-offline',
  templateUrl: 'offline.html',
})
export class OfflinePage {

  empty: any;
  offlines: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public database: DatabaseProvider,
    public events: Events,
    public toast: ToastProvider
  ) {
    this.database.passRss().then(offlineRead => {
      this.offlines = offlineRead;
      console.log('Offline', this.offlines);
    });

    this.events.subscribe('offline', (offline) => {
      this.deleteRss(offline);
    });
  }

  openRead(offline) {
    if(offline.categories[1] === 23) {
      this.navCtrl.push(ReadGaleriPage, {rssData: offline});
    } else {
      this.navCtrl.push(ReadOfflinePage, {rssData: offline});
    }
    console.log('Push RSS to Read', offline);
  }

  deleteRss(offline) {
    this.toast.push();
    this.storage.remove('offlineRead');
    let x = this.offlines.indexOf(offline);
    this.offlines.splice(x, 1);
    return this.database.deleteRss(this.offlines);
  }

  ionViewDidLoad() {
  }

}
