// Written by Dr. Zub
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {

  offline: any = [];

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
  }

  getRss(offline) {
    this.offline.push(offline);
    this.storage.set('offlineRead', this.offline);
  }

  passRss() {
    return this.storage.get('offlineRead');
  }

}
