// Written by Dr. Zub
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../toast/toast';

@Injectable()
export class DatabaseProvider {

  offline: any = [];

  constructor(
    public http: HttpClient,
    public storage: Storage,
    public toast: ToastProvider
  ) {
  }

  getRss(offline) {
    this.offline.push(offline);
    this.storage.set('offlineRead', this.offline);
  }

  deleteRss(offline) {
    console.log('Received', offline);
    this.offline = offline;
    this.storage.set('offlineRead', this.offline);
    this.passRss();
  }

  passRss() {
    return this.storage.get('offlineRead');
  }

}
