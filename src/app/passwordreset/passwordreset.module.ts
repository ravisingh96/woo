import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordresetPageRoutingModule } from './passwordreset-routing.module';

import { PasswordresetPage } from './passwordreset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordresetPageRoutingModule
  ],
  declarations: [PasswordresetPage]
})
export class PasswordresetPageModule {}
