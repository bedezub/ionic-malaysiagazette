// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-read-galeri',
  templateUrl: 'read-galeri.html',
})
export class ReadGaleriPage {

  rssData: any;
  title: any;
  images = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rssData = this.navParams.get('rssData');
    this.title = this.navParams.get('title');
    console.log(this.rssData);
  }

  ionViewDidLoad() {
    this.images = Array.prototype.slice.call(document.getElementsByClassName('wp-caption alignnone'));
    console.log(this.images);
    $('#invisible').hide();
  }

}
