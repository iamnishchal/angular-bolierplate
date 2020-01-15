import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SAMPLE } from './sample-module.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(SAMPLE),
    CommonModule
  ]
})
export class SampleModuleModule {
  constructor() {
    console.log('loaded....');
  }
}
