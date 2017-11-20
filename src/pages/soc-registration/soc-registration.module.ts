import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocRegistrationPage } from './soc-registration';

@NgModule({
  declarations: [
    SocRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(SocRegistrationPage),
  ],
})
export class SocRegistrationPageModule {}
