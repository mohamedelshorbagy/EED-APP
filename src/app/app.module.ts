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
import { TabsPage } from '../pages/tabs/tabs';
import { VisitsPage } from '../pages/visits/visits';
import { VisitsDataPage } from '../pages/visits-data/visits-data';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserDataPage,
    TabsPage,
    VisitsPage,
    VisitsDataPage,
    SettingsPage
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
    TabsPage,
    VisitsPage,
    VisitsDataPage,
    UserDataPage,
    SettingsPage
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
