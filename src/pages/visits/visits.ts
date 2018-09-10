import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { VisitsDataPage } from '../visits-data/visits-data';

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
    public qrScanner: QRScanner
  ) {

  }


  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.result = text;
            this.code = text;
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => {
        this.error = e;
        console.log('Error is', e)
      });
  }

  search() {
    this.navCtrl.push(VisitsDataPage, { code: this.code });
  }


}
