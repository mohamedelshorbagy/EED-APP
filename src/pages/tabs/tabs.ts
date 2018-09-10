import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { VisitsPage } from '../visits/visits';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  VisitorsPage = HomePage;
  VisitsPage = VisitsPage;
  SettingsPage = SettingsPage;
  Index: number;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }


  activePage(index, page) {
    this.Index = index;
    this.navCtrl.setRoot(page)
  }

}
