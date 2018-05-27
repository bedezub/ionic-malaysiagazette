// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { ReadPage } from '../read/read';
import { HttpParams, HttpClient } from '@angular/common/http';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string;
  rssUtama: any = [];
  offset = "20";
  nextOffset: number;

  constructor(
    public navCtrl: NavController,
    public rss: RssProvider,
    public app: App,
    public http: HttpClient,
    public toast: ToastController,
    public database: DatabaseProvider
  ) {
    this.rss.getUtama().subscribe(rssFeed => {
      this.rssUtama = rssFeed;
    });
  }

  openRead(rssData) {
    this.title = 'Utama';
    this.app.getRootNav().push(ReadPage, {rssData: rssData, title: this.title});
  }

  // Infinity Load method
  doInfinite(load?) {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '32');
    params = params.append('_embed', '');
    params = params.append('offset', this.offset);
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    
    response.subscribe(rssFeed => {
    this.rssUtama = this.rssUtama.concat(rssFeed);
      if(load) {
        this.nextOffset = parseInt(this.offset) + 10;
        this.offset = this.nextOffset.toString();
        load.complete();
      }
    });
  }

  // Offline reading functionality
  saveRss(rssData) {    
    let offline = rssData;
    let saveRss = this.toast.create({
      message: 'Artikel disimpan untuk bacaan offline',
      duration: 3000,
      position: 'bottom',
    });
    saveRss.present();
    console.log('Entering database', offline);
    return this.database.getRss(offline);
  }
  
}
