import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocEditPlayerPage } from './soc-edit-player';

@NgModule({
  declarations: [
    SocEditPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(SocEditPlayerPage),
  ],
})
export class SocEditPlayerPageModule {}
