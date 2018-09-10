import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitsDataPage } from './visits-data';

@NgModule({
  declarations: [
    VisitsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitsDataPage),
  ],
})
export class Tabs2PageModule { }
