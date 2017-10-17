import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSocietyPage } from './add-society';

@NgModule({
  declarations: [
    AddSocietyPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSocietyPage),
  ],
})
export class AddSocietyPageModule {}
