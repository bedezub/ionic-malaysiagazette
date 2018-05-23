// Written by Dr. Zub
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CinaPage } from '../pages/cina/cina';
import { EkonomiPage } from '../pages/ekonomi/ekonomi';
import { HomePage } from '../pages/home/home';
import { NasionalPage } from '../pages/nasional/nasional';
import { PolitikPage } from '../pages/politik/politik';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadPage } from '../pages/read/read';
import { DuniaPage } from '../pages/dunia/dunia';
import { SeniPage } from '../pages/seni/seni';

// Providers
import { DatabaseProvider } from '../providers/database/database';
import { RssProvider } from '../providers/rss/rss';

// Pipes
import { MomentjsPipe } from '../pipes/momentjs/momentjs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CinaPage,
    ContactPage,
    DuniaPage,
    EkonomiPage,
    HomePage,
    MomentjsPipe,
    NasionalPage,
    PolitikPage,
    ReadPage,
    SeniPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    CinaPage,
    DuniaPage,
    EkonomiPage,
    HomePage,
    NasionalPage,
    PolitikPage,
    ReadPage,
    SeniPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    RssProvider
  ]
})
export class AppModule {}
