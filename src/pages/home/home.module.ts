import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { CommonModule } from '@angular/common';
@NgModule({
   declarations: [HomePage], 
   imports: [
      IonicPageModule.forChild(HomePage),
      CommonModule] 
})
export class HomeModule {

}