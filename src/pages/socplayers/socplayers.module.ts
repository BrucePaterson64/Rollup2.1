import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocplayersPage } from './socplayers';

@NgModule({
  declarations: [
    SocplayersPage,
  ],
  imports: [
    IonicPageModule.forChild(SocplayersPage),
  ],
})
export class SocplayersPageModule {}
