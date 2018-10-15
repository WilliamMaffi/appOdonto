import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProntuárioPage } from './prontuário';

@NgModule({
  declarations: [
    ProntuárioPage,
  ],
  imports: [
    IonicPageModule.forChild(ProntuárioPage),
  ],
})
export class ProntuárioPageModule {}
