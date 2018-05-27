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
      // { title: 'Utama', component: TabsPage, icon: 'ios-home-outline', id: '0'  },
      // { title: 'Berita', component: TabsPage, icon: 'ios-paper-outline', id: '1' },
      // { title: 'Analisis', component: TabsPage, icon: 'ios-pie-outline', id: '2' },
      // { title: 'Video', component: TabsPage, icon: 'ios-videocam-outline', id: '3' },
      // { title: 'Infografik', component: TabsPage, icon: 'ios-image-outline', id: '4' },
      // { title: 'Galeri', component: TabsPage, icon: 'ios-images-outline', id: '5' },
      // { title: 'Soundtrack', component: TabsPage, icon: 'ios-musical-notes-outline', id: '6' },
      // { title: 'Surat Pembaca', component: TabsPage, icon: 'ios-people-outline', id: '7' }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component, {page: page.id});
  }
}
