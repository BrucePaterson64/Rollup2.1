import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocietiesPage } from './societies';

@NgModule({
  declarations: [
    SocietiesPage,
  ],
  imports: [
    IonicPageModule.forChild(SocietiesPage),
  ],
})
export class SocietiesPageModule {}
