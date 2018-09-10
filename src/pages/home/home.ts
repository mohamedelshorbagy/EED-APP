import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'
import { UserDataPage } from '../user-data/user-data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  code: any = '';
  error: string;
  constructor(
    public navCtrl: NavController,
    public qrScanner: QRScanner
  ) {
    this.code = '';
  }


  scanQR() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
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
    if(this.code === '') {
      this.error = 'Code can\'t be empty'; 
    } else {
      this.navCtrl.push(UserDataPage, { code: this.code });
    }
  }


}
