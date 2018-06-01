// Written by Dr. Zub
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CinaPage } from '../pages/cina/cina';
import { EkonomiPage } from '../pages/ekonomi/ekonomi';
import { EmailPage } from '../pages/email/email';
import { GaleriPage } from '../pages/galeri/galeri';
import { HomePage } from '../pages/home/home';
import { MgtvPage } from '../pages/mgtv/mgtv';
import { NasionalPage } from '../pages/nasional/nasional';
import { OfflinePage } from '../pages/offline/offline';
import { PreferencePage } from '../pages/preference/preference';
import { PolitikPage } from '../pages/politik/politik';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadGaleriPage } from '../pages/read-galeri/read-galeri';
import { ReadOfflinePage } from '../pages/read-offline/read-offline';
import { ReadPage } from '../pages/read/read';
import { DuniaPage } from '../pages/dunia/dunia';
import { SeniPage } from '../pages/seni/seni';

// Providers
import { DatabaseProvider } from '../providers/database/database';
import { RssProvider } from '../providers/rss/rss';
import { ToastProvider } from '../providers/toast/toast';

// Pipes
import { MomentjsPipe } from '../pipes/momentjs/momentjs';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CinaPage,
    ContactPage,
    DuniaPage,
    EmailPage,
    EkonomiPage,
    GaleriPage,
    HomePage,
    MomentjsPipe,
    MgtvPage,
    NasionalPage,
    OfflinePage,
    PolitikPage,
    PreferencePage,
    ReadGaleriPage,
    ReadOfflinePage,
    ReadPage,
    SeniPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    CinaPage,
    DuniaPage,
    EmailPage,
    EkonomiPage,
    GaleriPage,
    HomePage,
    MgtvPage,
    NasionalPage,
    OfflinePage,
    PolitikPage,
    PreferencePage,
    ReadOfflinePage,
    ReadGaleriPage,
    ReadPage,
    SeniPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    AppAvailability,
    Device,
    InAppBrowser,
    EmailComposer,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    RssProvider,
    DatabaseProvider,
    ToastProvider
  ]
})
export class AppModule {}
