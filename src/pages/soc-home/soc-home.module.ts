import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocHomePage } from './soc-home';

@NgModule({
  declarations: [
    SocHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SocHomePage),
  ],
})
export class SocHomePageModule {}
