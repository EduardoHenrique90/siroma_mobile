import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormModalPage } from './form-modal';

@NgModule({
  declarations: [
    FormModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FormModalPage),
  ],
})
export class FormModalPageModule {}
