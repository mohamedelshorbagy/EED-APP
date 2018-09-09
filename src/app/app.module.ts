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
    QRScanner,
    UserDataProvider
  ]
})
export class AppModule { }
