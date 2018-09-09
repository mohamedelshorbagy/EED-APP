import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { QRScanner } from '@ionic-native/qr-scanner'
import { UserDataPage } from '../pages/user-data/user-data';
import { UserDataProvider } from '../providers/user-data/user-data';

import { Pro } from '@ionic/pro';
import { Injectable, Injector } from '@angular/core';

Pro.init('7c3b77a3', {
  appVersion: '1.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    IonicErrorHandler,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }],
    QRScanner,
    UserDataProvider
  ]
})
export class AppModule { }
