import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocRegisterPage } from './soc-register';

@NgModule({
  declarations: [
    SocRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(SocRegisterPage),
  ],
})
export class SocRegisterPageModule {}
