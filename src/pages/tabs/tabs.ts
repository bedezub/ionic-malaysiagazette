// Written by Dr. Zub
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NasionalPage } from '../nasional/nasional';
import { Page } from 'ionic-angular/navigation/nav-util';
import { PolitikPage } from '../politik/politik';
import { EkonomiPage } from '../ekonomi/ekonomi';
import { DuniaPage } from '../dunia/dunia';
import { SeniPage } from '../seni/seni';
import { CinaPage } from '../cina/cina';
import { MgtvPage } from '../mgtv/mgtv';
import { GaleriPage } from '../galeri/galeri';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabs: { root: Page; title: string; }[];
  tab1Root = HomePage;
  tab2Root = NasionalPage;
  tab3Root = PolitikPage;
  tab4Root = EkonomiPage;
  tab5Root = DuniaPage;
  tab6Root = SeniPage;
  tab7Root = CinaPage;
  tab8Root = MgtvPage;
  tab9Root = GaleriPage;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.tabs = [
      {root: this.tab1Root, title: "Utama"},
      {root: this.tab2Root, title: "Nasional"},
      {root: this.tab3Root, title: "Politik"},
      {root: this.tab4Root, title: "Ekonomi"},
      {root: this.tab5Root, title: "Dunia"},
      {root: this.tab6Root, title: "Seni Hidup"},
      {root: this.tab7Root, title: "Akhbar Cina"},
      {root: this.tab8Root, title: "MGTV"},
      {root: this.tab9Root, title: "Galeri"}
    ];
  }

  ionViewDidLoad() {
  }

}
