// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ReadPage } from '../read/read';

@Component({
  selector: 'page-ekonomi',
  templateUrl: 'ekonomi.html',
})
export class EkonomiPage {

  nextOffset: number;
  rssEkonomi: any = [];
  offset = '20';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rss: RssProvider,
    public app: App,
    public http: HttpClient
  ) {
    this.rss.getEkonomi().subscribe(rssFeed => {
      this.rssEkonomi = rssFeed;
    });
  }

  openRead(rssData) {
    this.app.getRootNav().push(ReadPage, {rssData: rssData});
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
    this.rssEkonomi = this.rssEkonomi.concat(rssFeed);
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
