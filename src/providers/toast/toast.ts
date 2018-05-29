// Written by Dr. Zub
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  private toasts: Toast[] = [];
  
  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController
  ) {
  }

  push() {
    let toast = this.toastCtrl.create({
      message: 'Artikel dibuang dari bacaan offline',
      duration: 2000,
      position: 'bottom',
    });

    toast.onDidDismiss(() => {
      this.toasts.shift();
      if (this.toasts.length > 0) {
      }
    });
    this.toasts.push(toast);

    if (this.toasts.length > 1) {
      this.toasts.splice(1, 200);
    }
    this.show();
    console.log('Checking', this.toasts);
  }

  show() {
    this.toasts[0].present();
  }

}
