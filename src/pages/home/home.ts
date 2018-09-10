import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDataPage } from '../user-data/user-data';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  code: any = '';
  error: string;
  constructor(
    public navCtrl: NavController,
    public barCodeScanner: BarcodeScanner
  ) {
    this.code = '';
  }


  async scanQR() {
    let results = await this.barCodeScanner.scan();
    console.log(JSON.stringify(results));
    this.code = results.text;
  }

  search() {
    if (this.code === '') {
      this.error = 'Code can\'t be empty';
    } else {
      this.navCtrl.push(UserDataPage, { code: this.code });
    }
  }


}
