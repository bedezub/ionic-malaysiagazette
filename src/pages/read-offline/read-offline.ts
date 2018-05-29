// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-read-offline',
  templateUrl: 'read-offline.html',
})
export class ReadOfflinePage {

  rssData: any;
  title: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events
  ) {
    // Passing json to read page
    this.rssData = this.navParams.get('rssData');
    this.title = this.navParams.get('title');
    console.log('Data dah masuk', this.rssData);
  }

  deleteRss(offline) {
    this.events.publish('offline', offline);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
  }

}
