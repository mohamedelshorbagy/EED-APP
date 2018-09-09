import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-data',
  templateUrl: 'user-data.html',
})
export class UserDataPage {
  search: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.search = this.navParams.get('textSearch');
    console.log(this.search);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDataPage');
  }



  getUserData() {
    /**
     * 
     * Logic For Getting User Data
     * 
     */
  }


}
