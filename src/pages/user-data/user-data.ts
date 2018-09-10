import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { UserDataProvider } from '../../providers/user-data/user-data';


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
  loading: Loading;
  requestFinished: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userData: UserDataProvider,
    public loadingCtrl: LoadingController
  ) {
    this.code = this.navParams.get('code');
    console.log(this.code);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitsDataPage');
    this.loading = this.loadingCtrl.create({
      content: `Loading ...`,
    });

    this.loading.present();
    this.searchUser();
  }


  searchUser() {
    this.userData.searchVisitor(this.code).subscribe(res => {
      this.loading.dismiss();
      this.requestFinished = true;
      this.response = res['data'][0];
    }, (err) => {
      if (err) {
        this.loading.dismiss();
        this.message.message = 'Something went wrong';
        this.message.error = true;
        this.message.success = false;
      }
    });
  }


  checkIn(id) {
    this.userData.checkInVisitor(id).subscribe(res => {
      console.log(res);
      if (res['error']) {
        this.message.message = 'Something went wrong';
        this.message.error = true;
        this.message.success = false;
      } else {
        this.message.error = false;
        this.message.success = true;
        this.message.message = res['data']['success'];
      }
    })
  }


  checkOut(id) {
    this.userData.checkOutVisitor(id).subscribe(res => {
      console.log(res);
      if (res['error']) {
        this.message.message = 'Something went wrong';
        this.message.error = true;
        this.message.success = false;
      } else {
        this.message.error = false;
        this.message.success = true;
        this.message.message = res['data']['success'];
      }
    })
  }
}
