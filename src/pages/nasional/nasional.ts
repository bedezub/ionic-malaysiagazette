// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { RssProvider } from '../../providers/rss/rss';
import { ReadPage } from '../read/read';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-nasional',
  templateUrl: 'nasional.html',
})
export class NasionalPage {

  title: string;
  nextOffset: any;
  rssNasional: any = [];
  offset = '20';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rss: RssProvider,
    public app: App,
    public http: HttpClient,
  ) {
    this.rss.getNasional().subscribe(rssFeed => {
      this.rssNasional = rssFeed;
    });
  }

  openRead(rssData) {
    this.title = 'Nasional';
    this.app.getRootNav().push(ReadPage, {rssData: rssData, title: this.title});
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
    this.rssNasional = this.rssNasional.concat(rssFeed);
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
