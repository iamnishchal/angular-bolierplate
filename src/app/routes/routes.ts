import { Router } from '@angular/router';
// import { HomeComponent } from '../modules/sample-module/home/home.component';

export const ROUTES = [
  {
    path: '',
    redirectTo: 'samplemodule',
    pathMatch: 'full'
  },
  {
    path: 'samplemodule',
    loadChildren: './../modules/sample-module/sample-module.module#SampleModuleModule',
    canActivate: []
  }
];
