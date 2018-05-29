// Written by Dr. Zub
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { OfflinePage } from '../pages/offline/offline';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any, icon: string, id: string}>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Bacaan Offline', component: OfflinePage, icon: 'ios-bookmark-outline', id: '8' },
      { title: 'Utama', component: TabsPage, icon: 'ios-home-outline', id: '0'  },
      { title: 'Nasional', component: TabsPage, icon: 'custom-malaysia', id: '1' },
      { title: 'Politik', component: TabsPage, icon: 'ios-people-outline', id: '2' },
      { title: 'Ekonomi', component: TabsPage, icon: 'ios-trending-up-outline', id: '3' },
      { title: 'Dunia', component: TabsPage, icon: 'custom-earth', id: '4' },
      { title: 'Seni Hidup', component: TabsPage, icon: 'custom-seni', id: '5' },
      { title: 'Akhbar Cina', component: TabsPage, icon: 'ios-paper-outline', id: '6' },
      { title: 'MGTV', component: TabsPage, icon: 'ios-desktop-outline', id: '7' },
      { title: 'Galeri', component: TabsPage, icon: 'ios-images-outline', id: '8' }
    ];
  }

  openTabs(page) {
    if(page.id === '8') {
      console.log(page.id);
      this.nav.push(page.component, {page: page.id});
    } else {
      this.nav.setRoot(page.component, {page: page.id});
    }
  }
}
