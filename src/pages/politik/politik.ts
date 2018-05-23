// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ReadPage } from '../read/read';

@Component({
  selector: 'page-politik',
  templateUrl: 'politik.html',
})
export class PolitikPage {

  nextOffset: number;
  rssPolitik: any = [];
  offset = '20';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rss: RssProvider,
    public http: HttpClient,
    public app: App
  ) {
    this.rss.getPolitik().subscribe(rssFeed => {
      this.rssPolitik = rssFeed;
    });
  }

  openRead(rssData) {
    this.app.getRootNav().push(ReadPage, {rssData: rssData});
  }

  // Infinity Load method
  doInfinite(load?) {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '10');
    params = params.append('categories', '2');
    params = params.append('_embed', '');
    params = params.append('offset', this.offset);
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    
    response.subscribe(rssFeed => {
    this.rssPolitik = this.rssPolitik.concat(rssFeed);
      if(load) {
        this.nextOffset = parseInt(this.offset) + 10;
        this.offset = this.nextOffset.toString();
        load.complete();
      }
    });
  }

  ionViewDidLoad() {
  }

}
