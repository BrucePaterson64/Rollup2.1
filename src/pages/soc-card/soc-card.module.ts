import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocCardPage } from './soc-card';

@NgModule({
  declarations: [
    SocCardPage,
  ],
  imports: [
    IonicPageModule.forChild(SocCardPage),
  ],
})
export class SocCardPageModule {}
