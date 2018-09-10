import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VisitsDataPage } from '../visits-data/visits-data';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the VisitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visits',
  templateUrl: 'visits.html',
})
export class VisitsPage {
  result: any;
  code: any;
  error: string = '';
  constructor(
    public navCtrl: NavController,
    public barCodeScanner: BarcodeScanner
  ) {

  }


  // async scanQR() {
  //   let results = await this.barCodeScanner.scan();
  //   this.code = results.text;
  // }

  search() {
    if (this.code === '') {
      this.error = 'Code can\'t be empty';
    } else {
      this.navCtrl.push(VisitsDataPage, { code: this.code });
    }
  }


}
