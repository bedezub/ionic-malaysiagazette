// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RssProvider } from '../../providers/rss/rss';
import { ReadGaleriPage } from '../read-galeri/read-galeri';

@Component({
  selector: 'page-galeri',
  templateUrl: 'galeri.html',
})
export class GaleriPage {

  title: any;
  nextOffset: number;
  rssGaleri: any = [];
  offset = '20';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rss: RssProvider,
    public app: App,
    public http: HttpClient
  ) {
    this.rss.getGaleri().subscribe(rssFeed => {
      this.rssGaleri = rssFeed;
    });
  }

  openRead(rssData) {
    this.title = 'Galeri';
    this.app.getRootNav().push(ReadGaleriPage, {rssData: rssData, title: this.title});
  }

  // Infinity Load method
  doInfinite(load?) {
    let response: any;
    let params = new HttpParams();
    params = params.append('per_page', '20');
    params = params.append('categories', '23');
    params = params.append('_embed', '');
    params = params.append('offset', this.offset);
    response = this.http.get('http://malaysiagazette.com/v2/wp-json/wp/v2/posts', {params: params});
    
    response.subscribe(rssFeed => {
    this.rssGaleri = this.rssGaleri.concat(rssFeed);
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