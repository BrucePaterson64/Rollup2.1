import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocLeaderBoardPage } from './soc-leader-board';

@NgModule({
  declarations: [
    SocLeaderBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(SocLeaderBoardPage),
  ],
})
export class SocLeaderBoardPageModule {}
