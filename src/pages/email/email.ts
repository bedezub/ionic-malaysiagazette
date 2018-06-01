import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  subject='';
  body='';
  to='editor@malaysiagazette.com';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    public viewCtrl: ViewController
  ) {
  }

  send() {
    this.viewCtrl.dismiss();
    let email = {
      to: this.to,
      cc: [],
      bcc: [],
      attachement: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: 'gmail'
    };
    this.emailComposer.open(email);
  }

  ionViewDidLoad() {
  }

}
