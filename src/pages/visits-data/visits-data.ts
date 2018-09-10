import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data'
/**
 * Generated class for the VisitsDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visits-data',
  templateUrl: 'visits-data.html',
})
export class VisitsDataPage {
  code: string;
  message: {
    message: string,
    success: boolean,
    error: boolean
  } = {
      message: null,
      success: null,
      error: null
    };
  error: any;
  response: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userData: UserDataProvider
  ) {
    this.code = this.navParams.get('code');
    console.log(this.code);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitsDataPage');
    this.searchVisit();
  }


  searchVisit() {
    this.userData.searchVisit(this.code).subscribe(res => {
      console.log(res);
      this.response = res['data'][0];
    })
  }


  checkIn(id) {
    this.userData.checkInVisits(id).subscribe(res => {
      if (res['error']) {
        this.message.message = 'Something went wrong';
        this.message.error = true;
      } else {
        this.message.error = false;
        this.message.success = true;
        this.message.message = res['data']['success'] + ' Checked In';
      }
    })
  }

}
