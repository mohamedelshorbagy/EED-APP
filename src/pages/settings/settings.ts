import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  url: string = '';
  error: string = '';
  message: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userData: UserDataProvider
  ) {
  }

  ionViewDidLoad() {
    this.url = this.userData.getBaseUrl;
  }


  save() {
    if (this.url === '') {
      this.error = 'Url can\'t be empty';
    } else {
      this.userData.setBaseUrl(this.url);
      this.message = 'Settings Saved!';
    }
  }


}
