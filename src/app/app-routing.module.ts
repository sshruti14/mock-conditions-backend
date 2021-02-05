import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ConditionsComponent} from './conditions/conditions.component'

const routes: Routes = [
  { path: 'api/condition', component: ConditionsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
