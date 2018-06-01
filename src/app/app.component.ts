// Written by Dr. Zub
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { OfflinePage } from '../pages/offline/offline';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { AboutPage } from '../pages/about/about';
import { PreferencePage } from '../pages/preference/preference';

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
    splashScreen: SplashScreen,
    private appAvailability: AppAvailability,
    private device: Device,
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

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = new InAppBrowser();
      browser.create(httpUrl + username, '_system')
      return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
        let browser = new InAppBrowser();
        browser.create(httpUrl + username, '_system')
      },
      () => { // error callback
        let browser = new InAppBrowser();
        browser.create(httpUrl + username, '_system')
      }
    );
  }

  openTabs(page) {
    if(page.id === '8') {
      console.log(page.id);
      this.nav.push(page.component, {page: page.id});
    } else {
      this.nav.setRoot(page.component, {page: page.id});
    }
  }

  openInstagram() {
    let username = 'malaysiagazette';
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }
  
  openTwitter() {
    let username = 'malaysiagazette';
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }
  
  openFacebook() {
    let username = 'MalaysiaGazette';
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://page/', 'https://www.facebook.com/', username);
  }

  openYoutube() {
    let username = 'UC-zwAo_0PsviX7-H71mbHYg';
    this.launchExternalApp('youtube://', 'com.google.android.youtube', 'youtube://channel/', 'https://www.youtube.com/channel/', username);
  }

  openAbout() {
    this.nav.push(AboutPage);
  }

  openPreference() {
    this.nav.push(PreferencePage);
  }

}
