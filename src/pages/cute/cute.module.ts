import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutePage } from './cute';

@NgModule({
  declarations: [
    CutePage,
  ],
  imports: [
    IonicPageModule.forChild(CutePage),
  ],
})
export class CutePageModule {}
